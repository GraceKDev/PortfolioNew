import React from "react";

export interface TimelineItemInterface {
    timelinePosition:number;
    selected:boolean;
    timelineTitle:string;
    timelineSubTitle:string;
    timelineParagraph:string;
    timelineDateStart:number
    timelineDataEnd?:number;
    imageSrc?:string;
}