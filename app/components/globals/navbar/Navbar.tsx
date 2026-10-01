import Link from "next/link";

function BowEnd() {
    return (
        <svg aria-hidden="true" className="pointer-events-none absolute top-1/2 h-9 w-12 -translate-y-1/2 fill-rosecloud-100 stroke-rosewood-600" viewBox="0 0 64 44" focusable="false">
            <path d="M29 19C21 8 7 5 5 13c-2 8 7 14 23 11L29 19Zm6 0C43 8 57 5 59 13c2 8-7 14-23 11l-1-5Z" strokeWidth="2" />
            <path d="m29 22-4 18 8-5 7 5-4-18" strokeWidth="2" />
            <path d="M27 20c0-4 3-7 5-7s5 3 5 7-3 8-5 8-5-4-5-8Z" className="fill-rosewood-500 stroke-rosewood-600" strokeWidth="2" />
        </svg>
    );
}

export default function Navbar() {
    return (
        <nav className="relative left-1/2 w-screen -translate-x-1/2 border-2 border-dashed border-beige-400 bg-beige-100 text-cocoa-800">
            <div className="relative mx-auto flex min-h-14 max-w-6xl items-center justify-evenly px-8 ">
                <div className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-beige-400" />
                <BowEnd />
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="home">Home</Link>
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="blog">Blog</Link>
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="projects">Projects</Link>
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="contact">Contact</Link>
                <div className="absolute right-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-beige-400" />
            </div>
        </nav>
    )
}