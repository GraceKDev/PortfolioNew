import Link from "next/link";

const navigationMenus = [
    {
        label: "Blog",
        href: "/blog",
        items: [
            { label: "General blog", href: "/blog" },
            { label: "Dev blog", href: "/blog/dev" },
        ],
    },
    {
        label: "Projects",
        href: "/projects",
        items: [
            { label: "Dev Portfolio", href: "/projects/code" },
            { label: "3D Models", href: "/projects/3d-models" },
            { label: "Art", href: "/projects/art" },
            { label: "Videos", href: "/projects/video" },
        ],
    },
];

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
        <nav className="relative z-1000 left-1/2 w-screen -translate-x-1/2 border-2 border-dashed border-beige-400 bg-beige-100 text-cocoa-800">
            <div className="relative mx-auto flex min-h-14 max-w-6xl items-center justify-evenly px-8 ">
                <div className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-beige-400" />
                <BowEnd />
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="home">Home</Link>
                {navigationMenus.map((menu) => {
                    const menuId = `navigation-menu-${menu.label.toLowerCase()}`;

                    return (
                        <div key={menu.label} className="group relative">
                            <Link
                                href={menu.href}
                                className="flex items-center gap-1 rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosewood-600"
                            >
                                {menu.label}
                                <span aria-hidden="true" className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">⌄</span>
                            </Link>
                            <div className="absolute left-0 top-full z-1001 hidden min-w-52 pt-2 group-hover:block group-focus-within:block">
                                <ul id={menuId} className="list-none border-2 border-dashed border-pinkdust-500 bg-rosecloud-100 p-1 text-cocoa-900 shadow-lg shadow-cocoa-900/20">
                                    {menu.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                className="block whitespace-nowrap rounded-sm px-3 py-2 text-sm transition-colors hover:bg-softpink-300 hover:text-cocoa-900 focus-visible:outline-2 focus-visible:outline-rosewood-600"
                                                href={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
                <Link className="rounded-sm px-2 py-1 transition-colors hover:bg-roseblush-200 hover:text-cocoa-900" href="contact">Contact</Link>
                <div className="absolute right-0 top-1/2 h-8 w-0.5 -translate-y-1/2 bg-beige-400" />
            </div>
        </nav>
    )
}