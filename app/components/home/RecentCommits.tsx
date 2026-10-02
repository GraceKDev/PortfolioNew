import type { Commit } from "@/app/types/Commit";
import type { Project } from "@/app/types/Projects";
import Heading from "../globals/Heading";
import HorizontalRule from "../globals/HorizontalRule";
import CommitAccordion from "./CommitAccordionSet";

interface GitHubCommitResponse {
    sha: string;
    html_url: string;
    author: { login: string } | null;
    commit: {
        message: string;
        author: { name: string; date: string } | null;
        committer: { date: string } | null;
    };
}

interface GitHubRepositoryResponse {
    name: string;
    full_name: string;
    fork: boolean;
    archived: boolean;
    default_branch: string | null;
}

function formatCommitDate(date: string) {
    const parsedDate = new Date(date);
    if (!date || Number.isNaN(parsedDate.getTime())) return "Unknown";

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC",
    }).format(parsedDate);
}

async function githubGet<T>(url: string): Promise<T | null> {
    const headers = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
    };

    try {
        const response = await fetch(url, { headers, next: { revalidate: 3600 } });
        if (!response.ok) return null;

        return await response.json() as T;
    } catch {
        return null;
    }
}

async function getGitHubProjects(): Promise<Project[] | null> {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const hasToken = Boolean(process.env.GITHUB_TOKEN);
    const repositoriesUrl = hasToken
        ? "https://api.github.com/user/repos?affiliation=owner&sort=updated&per_page=10"
        : "https://api.github.com/users/GraceKDev/repos?type=owner&sort=updated&per_page=10";
    const repositories = await githubGet<GitHubRepositoryResponse[]>(`${repositoriesUrl}&page=1`);
    if (!repositories) return null;

    const ownedRepositories = repositories.filter(
        (repository) => !repository.fork && !repository.archived && repository.default_branch,
    );
    
    const projects: { project: Project; latestTimestamp: number }[] = [];

    for (let index = 0; index < ownedRepositories.length; index += 5) {
        const projectBatch = await Promise.all(
            ownedRepositories.slice(index, index + 5).map(async (repository) => {
                const commitsUrl = new URL(`https://api.github.com/repos/${repository.full_name}/commits`);
                commitsUrl.searchParams.set("per_page", "100");
                commitsUrl.searchParams.set("sha", repository.default_branch!);
                commitsUrl.searchParams.set("since", sevenDaysAgo.toISOString());

                const responses = await githubGet<GitHubCommitResponse[]>(commitsUrl.toString());
                if (!responses) return null;

                const recentResponses = responses.filter((entry) => {
                        const date = entry.commit.committer?.date ?? entry.commit.author?.date ?? "";
                        const timestamp = Date.parse(date);
                        return Number.isFinite(timestamp) && timestamp >= sevenDaysAgo.getTime();
                    });
                if (recentResponses.length === 0) return null;

                const commits: Commit[] = recentResponses.map((entry) => ({
                        sha: entry.sha,
                        message: entry.commit.message,
                        author: entry.author?.login ?? entry.commit.author?.name ?? "Unknown",
                        date: formatCommitDate(entry.commit.committer?.date ?? entry.commit.author?.date ?? ""),
                        url: entry.html_url,
                    }));

                const latestTimestamp = Math.max(
                    ...recentResponses.map((entry) => Date.parse(entry.commit.committer?.date ?? entry.commit.author?.date ?? "")),
                );

                return {
                    project: {
                        projectName: repository.name,
                        lastUpdated: commits[0].date,
                        commits,
                    } satisfies Project,
                    latestTimestamp,
                };
            }),
        );

        projects.push(...projectBatch.filter((project): project is NonNullable<typeof project> => project !== null));
    }

    return projects
        .sort((first, second) => {
            if (!Number.isFinite(first.latestTimestamp)) return 1;
            if (!Number.isFinite(second.latestTimestamp)) return -1;
            return second.latestTimestamp - first.latestTimestamp;
        }).slice(0, 5)
        .map(({ project }) => project);
}

export default async function RecentCommits() {
    const fetchedProjects = await getGitHubProjects();

    return (
        <section className="h-full min-w-0 border-t-2 border-dashed border-beige-400 pt-5">
            <div className="flex items-center justify-between gap-3">
                <div> 
                <Heading text="Recent commits" headingType="medium" headingPosition="left" font="retro" />
                <p className="text-small text-rosewood-400"> Updated every hour </p>
                </div>
                <span className="shrink-0 rounded-full border border-pinkdust-400 bg-rosecloud-200 px-3 py-1 text-xs font-semibold text-cocoa-700">
                    Commits in the last 7 days
                </span>
            </div>
            <HorizontalRule className="my-3" />
            {fetchedProjects === null ? (
                <p className="py-4 text-sm text-cocoa-600">GitHub repositories are temporarily unavailable.</p>
            ) : (
                <CommitAccordion projects={fetchedProjects} />
            )}
        </section>
    );
}