import Heading from "../globals/Heading";
import "./PicnicHero.css";

export default function PicnicHero() {
    return (
        <section className="picnic-hero">
            <div className="picnic-hero-content">
                <Heading text="Grace Kearns" headingType="large" />
                <h2>Welcome to my website</h2>
            </div>
        </section>
    );
}