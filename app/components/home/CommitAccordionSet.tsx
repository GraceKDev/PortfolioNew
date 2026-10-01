"use client";

import type { Commit } from "@/app/types/Commit";
import { useState } from "react";
import RecentCommit from "./RecentCommit";

interface CommitAccordionSetProps {
    commits: Commit[];
}

export default function CommitAccordionSet({ commits }: CommitAccordionSetProps) {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const createCommitChild = (commit: Commit) => <RecentCommit commit={commit} />;

    return (
        <div className="min-w-0 w-full max-w-full overflow-hidden divide-y divide-dashed divide-beige-300 border-y border-dashed border-beige-300">
            {commits.map((commit, index) => {
                const isActive = activeAccordion === index;

                return (
                    <section key={commit.sha} className="min-w-0 max-w-full">
                        <button
                            type="button"
                            aria-expanded={isActive}
                            className="group flex w-full min-w-0 items-center gap-3 px-2 py-3 text-left text-cocoa-700 transition-colors hover:bg-rosecloud-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-rosewood-500"
                            onClick={() => setActiveAccordion(isActive ? null : index)}
                        >
                            <span className="min-w-0 flex-1 break-words font-medium group-hover:text-cocoa-900">
                                {commit.message}
                            </span>
                            <span className="shrink-0 text-xs text-cocoa-500">{commit.date}</span>
                            <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-pinkdust-400 bg-rosecloud-100 text-sm text-cocoa-700">
                                {isActive ? "−" : "+"}
                            </span>
                        </button>
                        {isActive && (
                            <div className="min-w-0 max-w-full overflow-hidden">
                                {createCommitChild(commit)}
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
}