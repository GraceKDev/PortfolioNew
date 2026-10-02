"use client";

import { useState } from "react";
import { Timeline as timelineData } from "../../res/timelineItems";
import TimelineItem from "./TimelineItem";
import TimelineItemChild from "./TimelineItemChild";

export default function Timeline() {
    const [activeItemIndex, setActiveItemIndex] = useState<number | null>(1);
    const timelineItems = [...timelineData.timeline].sort(
        (second, first) =>
            first.timelineDateStart - second.timelineDateStart ||
            (first.timelineDataEnd ?? first.timelineDateStart) -
                (second.timelineDataEnd ?? second.timelineDateStart),
    );
    const activeItem = activeItemIndex === null ? null : timelineItems[activeItemIndex];

    return (
        <section className="mt-6 flex">
            <div aria-label="Experience timeline">
                <ol className="ml-4 border-l-2 border-beige-400 py-2 pl-8">
                    {timelineItems.map((item, index) => (
                        <TimelineItem
                            key={`${item.timelineTitle}-${item.timelineDateStart}-${index}`}
                            item={item}
                            index={index}
                            active={activeItemIndex === index}
                            onSelect={() => setActiveItemIndex(activeItemIndex === index ? null : index)}
                        />
                    ))}
                </ol>
            </div>
            {activeItem && (
                <TimelineItemChild
                    key={`${activeItem.timelineTitle}-${activeItem.timelineDateStart}`}
                    id={`timeline-details-${activeItemIndex}`}
                    {...activeItem}
                />
            )}
        </section>
    );
}