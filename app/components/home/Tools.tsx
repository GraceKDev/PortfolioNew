import { tools } from "@/app/res/tools";
import Heading from "../globals/Heading";
import Image from "next/image";
import { ToolsetInterface } from "@/app/types/Tool";
export default function Tools() {

    const createToolRecord = (toolset: ToolsetInterface) => {
        return (
            <div key={toolset.toolsetName}>
                <h3 className="text-xl font-bold text-rosewood-200">{toolset.toolsetName}</h3>
                <div className="flex flex-wrap gap-3">
                    {toolset.tools.map((tool) => (
                        <div key={tool.toolName} className="flex aspect-square min-w-24 flex-col items-center justify-center gap-1 ">
                            <Image width={50} height={50} src={tool.toolSrc} alt={tool.toolName} />
                            <p>{tool.toolName}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <section>
            <Heading text={"My Toolkit"} headingType="medium" headingPosition="left" font="retro" />
            <div>
                {tools.map((toolset) => (
                    createToolRecord(toolset)
                ))}
            </div>
        </section>
    )
}