interface AccordionProps {
    id: string;
    active: boolean;
    children: React.ReactNode;
    accordionTitle: string;
    summary?: string;
    onToggle: () => void;
}

export default function Accordion(props: AccordionProps) {
    const { id, active, accordionTitle, children, summary, onToggle } = props;

    return (
        <section>
            <h3>
                <button
                    type="button"
                    aria-expanded={active}
                    aria-controls={id}
                    onClick={onToggle}
                    className="group flex w-full min-w-0 items-center gap-3 px-2 py-3 text-left text-cocoa-700 transition-colors hover:bg-rosecloud-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-rosewood-500"
                >
                    <span className="min-w-0 flex-1 wrap-break-word font-medium group-hover:text-cocoa-900">
                        {accordionTitle}
                    </span>
                    {summary && <span className="shrink-0 text-xs text-cocoa-500">{summary}</span>}
                    <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-pinkdust-400 bg-rosecloud-100 text-sm text-cocoa-700">
                        {active ? "−" : "+"}
                    </span>
                </button>
            </h3>
            <div id={id} hidden={!active} className="min-w-0 max-w-full overflow-hidden">
                {children}
            </div>
        </section>
    );
}