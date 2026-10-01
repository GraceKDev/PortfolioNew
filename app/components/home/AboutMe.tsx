import strings from "../../res/strings"
import Heading from "../globals/Heading";
import HorizontalRule from "../globals/HorizontalRule";

export default function AboutMe() {
    return (
        <section className="h-full min-w-0 border-t-2 border-dashed border-beige-400 pt-5">
            <Heading text="About me" headingType="medium" headingPosition="left" font="retro" />
            <HorizontalRule className="my-3" />
            <p className="max-w-prose text-base leading-8 text-cocoa-700 sm:text-lg">
                {strings["About me"]}
            </p>
        </section>
    )
}