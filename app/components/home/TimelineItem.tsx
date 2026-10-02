import type { TimelineItemInterface } from "@/app/types/TimelineItem";

interface TimelineItemProps {
    item: TimelineItemInterface;
    index: number;
    active: boolean;
    onSelect: () => void;
}

export default function TimelineItem({ item, index, active, onSelect }: TimelineItemProps) {
    const dateLabel = item.timelineDataEnd && item.timelineDataEnd !== item.timelineDateStart
        ? `${item.timelineDateStart} - ${item.timelineDataEnd}`
        : item.timelineDataEnd
            ? `${item.timelineDateStart}`
            : `${item.timelineDateStart} - Present`;

    return (
        <li className="relative pb-8 last:pb-0">
            <button
                type="button"
                aria-label={`${item.timelineTitle}, ${dateLabel}`}
                aria-pressed={active}
                aria-controls={`timeline-details-${index}`}
                onClick={onSelect}
                className={`absolute -left-12 top-0 grid size-8 place-items-center rounded-full border-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosewood-600 ${active ? "border-rosewood-700 bg-softpink-400" : "border-cocoa-600 bg-beige-50 hover:bg-softpink-200"}`}
            >
                <span className="size-2 rounded-full bg-cocoa-700" />
            </button>
            <time className="font-mono text-xs font-semibold text-cocoa-600">{dateLabel}</time>
            <h3 className="mt-1 text-sm font-semibold leading-5 text-cocoa-800">
                {item.timelineTitle}
            </h3>
            <p className="mt-1 text-xs leading-4 text-cocoa-600">
                {item.timelineSubTitle || "Independent"}
            </p>
        </li>
    );
}