import { TimelineItemInterface } from "@/app/types/TimelineItem";
import Heading from "../globals/Heading";



interface TimelineItemChildProps extends TimelineItemInterface {
    id: string;
}

export default function TimelineItemChild(props: TimelineItemChildProps) {

    const { id, timelineTitle, timelineParagraph } = props;
    
    return (
        <article id={id} aria-live="polite" className="mx-3 mt-5 border-l-2 border-dashed border-pinkdust-400 bg-beige-50 px-4 py-3 sm:px-5">
            <Heading text={timelineTitle} headingType="small" headingPosition="left" font="retro"/>
            <p className="mt-2 leading-7 text-cocoa-700">{timelineParagraph}</p>
        </article>
    )
}