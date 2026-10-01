import { commits } from "@/app/dev/commits";
import { Commit } from "@/app/types/Commit";
import Heading from "../globals/Heading";
import HorizontalRule from "../globals/HorizontalRule";
import CommitAccordion from "./CommitAccordionSet";

export default function RecentCommits() {
    
    const getRecentCommits = ():Commit[] => {
        return commits.slice(0,5)
    }
    return (
        <section className="h-full min-w-0 border-t-2 border-dashed border-beige-400 pt-5">
            <div className="flex items-center justify-between gap-3">
                <Heading text="Recent commits" headingType="medium" headingPosition="left" font="retro" />
                <span className="shrink-0 rounded-full border border-pinkdust-400 bg-rosecloud-200 px-3 py-1 text-xs font-semibold text-cocoa-700">
                    {getRecentCommits().length} recent
                </span>
            </div>
            <HorizontalRule className="my-3" />
            <CommitAccordion commits={getRecentCommits()} />
        </section>
    )
    
}