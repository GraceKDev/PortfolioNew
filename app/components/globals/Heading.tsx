import { tv } from "tailwind-variants";

export interface HeadingPropsInterface {
    text: string;
    headingType?: "small" | "medium" | "large" | "xlarge";
    headingPosition?: "left" | "center" | "right";
    font?:"violetta" | "retro"
}

const heading = tv({
    base: "font-violetta font-medium tracking-tight text-pinkdust [-webkit-text-stroke:2px_#c78ca0]",
    variants: {
        size: {
            small: "text-lg md:text-xl",
            medium: "text-2xl md:text-4xl",
            large: "text-4xl md:text-6xl",
            xlarge: "text-6xl md:text-6xl",
        },
        position: {
            left: "text-left",
            center: "text-center",
            right: "text-right"
        },
        font: {
            violetta:"font-violetta",
            retro:"font-retro"
        }
        
    },
    defaultVariants: {
        size: "medium",
        position: "center",
        font:"violetta"
    },
});

export default function Heading({ text, headingType = "medium", headingPosition = "center",font="violetta" }: HeadingPropsInterface) {
    return <h1 className={heading({ size: headingType, position: headingPosition, font:font })}>{text}</h1>;
}