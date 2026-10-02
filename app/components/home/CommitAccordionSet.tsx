"use client";

import type { Project } from "@/app/types/Projects";
import { useState } from "react";
import Accordion from "./Accordion";
import RecentCommit from "./RecentCommit";

interface CommitAccordionSetProps {
    projects: Project[];
}

export default function CommitAccordionSet({ projects }: CommitAccordionSetProps) {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [activeCommit, setActiveCommit] = useState<string | null>(null);
    const projectsWithCommits = projects.filter((project) => project.commits.length > 0);

    return (
        <div className="min-w-0 w-full max-w-full overflow-hidden divide-y divide-dashed divide-beige-300 border-y border-dashed border-beige-300">
            {projectsWithCommits.length === 0 ? (
                <p className="px-3 py-4 text-sm text-cocoa-600">No commits in the last 7 days.</p>
            ) : projectsWithCommits.map((project, projectIndex) => {
                const isProjectActive = activeProject === projectIndex;
                const projectPanelId = `project-commits-${projectIndex}`;

                return (
                    <Accordion
                        key={project.projectName}
                        id={projectPanelId}
                        active={isProjectActive}
                        accordionTitle={project.projectName}
                        summary={`${project.lastUpdated} · ${project.commits.length} ${project.commits.length === 1 ? "commit" : "commits"}`}
                        onToggle={() => {
                            setActiveProject(isProjectActive ? null : projectIndex);
                            setActiveCommit(null);
                        }}
                    >
                        <div className="ml-3 divide-y divide-dashed divide-beige-200 border-l-2 border-dashed border-pinkdust-300 py-1 pl-3">
                            {project.commits.map((commit) => {
                                const commitId = `${projectIndex}-${commit.sha}`;
                                const commitPanelId = `commit-details-${commitId}`;

                                return (
                                    <Accordion
                                        key={commit.sha}
                                        id={commitPanelId}
                                        active={activeCommit === commitId}
                                        accordionTitle={commit.message}
                                        summary={commit.date}
                                        onToggle={() => setActiveCommit(activeCommit === commitId ? null : commitId)}
                                    >
                                        <RecentCommit commit={commit} />
                                    </Accordion>
                                );
                            })}
                        </div>
                    </Accordion>
                );
            })}
        </div>
    );
}