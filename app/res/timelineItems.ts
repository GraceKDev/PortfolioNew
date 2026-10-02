import { TimelineInterface } from "../types/Timeline";
import { TimelineItemInterface } from "../types/TimelineItem";

const timelineItems: TimelineItemInterface[] = [
    {
        timelinePosition: 0,
        selected: false,
        timelineTitle:"High School Education",
        timelineSubTitle:"John Paul College",
        timelineParagraph: "Time at highschool yay",
        timelineDateStart: 2012,
        timelineDataEnd: 2017,
    },
    {
        timelinePosition: 1,
        selected: false,
        timelineTitle: "Swinburne Diploma of ICT",
        timelineSubTitle: "Swinburne University of Technology",
        timelineParagraph: "Uni yay",
        timelineDateStart: 2018,
        timelineDataEnd: 2019,
    },
    {
        timelinePosition: 2,
        selected: false,
        timelineTitle: "Bachelor's of Computer Science",
        timelineSubTitle:"Swinburne University of Technology",
        timelineParagraph: "More Uni yay",
        timelineDateStart: 2019,
        timelineDataEnd: 2022,
    },
    {
        timelinePosition: 3,
        selected: false,
        timelineTitle: "Software Developer",
        timelineSubTitle:"Tru Recognition",
        timelineParagraph: "More Uni yay",
        timelineDateStart: 2022,
        timelineDataEnd: 2023,
    },
    {
        timelinePosition: 4,
        selected: false,
        timelineTitle: "Fullstack-Developer",
        timelineSubTitle:"SeenCulture",
        timelineParagraph: "More Uni yay",
        timelineDateStart: 2024,
        timelineDataEnd: 2026,
    },
    {
        timelinePosition: 5,
        selected: false,
        timelineTitle: "Freelancing",
        timelineSubTitle:"",
        timelineParagraph: "More Uni yay",
        timelineDateStart: 2026,
        timelineDataEnd: 2026,
    },
]

export const Timeline:TimelineInterface = {
    timeline:timelineItems
}