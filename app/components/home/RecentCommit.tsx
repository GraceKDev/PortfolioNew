import type { Commit } from "@/app/types/Commit";

export default function RecentCommit({ commit }: { commit: Commit }) {
    return (
        <div className="min-w-0 max-w-full overflow-hidden bg-beige-50 px-3 py-4 sm:px-5">
            <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-3">
                <div>
                    <dt className="text-xs font-semibold uppercase text-cocoa-500">Author</dt>
                    <dd className="mt-1 text-cocoa-800">{commit.author}</dd>
                </div>
                <div>
                    <dt className="text-xs font-semibold uppercase text-cocoa-500">Date</dt>
                    <dd className="mt-1 text-cocoa-800">{commit.date}</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <dt className="text-xs font-semibold uppercase text-cocoa-500">Commit</dt>
                    <dd className="mt-1 break-all font-mono text-cocoa-800">{commit.sha}</dd>
                </div>
            </dl>
            <a
                href={commit.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-rosewood-700 underline decoration-pinkdust-500 underline-offset-4 hover:text-cocoa-900"
            >
                View commit
            </a>
        </div>
    )
}