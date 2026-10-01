import Image from "next/image";
import gearIcon from "@/public/svg/gear.svg";

export default function CurrentProjectWidget() {
    const getCurrentProject = () => {
        return "Unknown"
    }
    return (
        <div className="mx-4 mb-3 mt-2 flex min-w-0 flex-1 drop-shadow-[3px_4px_0_rgba(120,80,90,0.90)] transition-[transform,filter] duration-150 ease-out hover:translate-y-0.5 hover:drop-shadow-[2px_2px_0_rgba(120,80,90,0.90)]">
            <div className="flex items-center border-2 border-rosewood-400 justify-center bg-beige-200 shadow px-2 py-2 rounded-l-xl h-6">
                <Image src={gearIcon} alt="Build icon" width={20} height={20} />
            </div>
            <div className="flex min-w-0 flex-1 items-center bg-softpink-100 border-2 border-rosewood-400 p-1 rounded-r-xl h-6">
                <p className="m-0 truncate text-cocoa-700 p-1 text-xs font-bold" title={`Working On: ${getCurrentProject()}`}>
                    Working On: {getCurrentProject()}
                </p>
            </div>
        </div>
    );
}