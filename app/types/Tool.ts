export interface ToolInterface {
    toolName:string;
    toolSrc:string;
}
export interface ToolsetInterface {
    toolsetName:string;
    tools:ToolInterface[]
}