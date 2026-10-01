import CurrentProjectWidget from "../widgets/CurrentProject";
import RecentBlogWidget from "../widgets/RecentBlog";
import RecentlyCompleteWidget from "../widgets/Recently Completed";

export default function Banner() {
    return (
        <section className="flex  border-b-2 min-w-[70vw] border-dashed box-border border-softpink-400   bg-pinkdust-200">
            <CurrentProjectWidget/>
            <RecentlyCompleteWidget/>
            <RecentBlogWidget/>
        </section>
    )
}