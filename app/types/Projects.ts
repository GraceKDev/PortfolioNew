import { Commit } from "./Commit";

export interface Project {
    projectName:string;
    lastUpdated:string,
    commits:Commit[]
}