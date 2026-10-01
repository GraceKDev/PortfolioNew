interface AccordionProps {
    active: boolean;
    children: React.ReactNode;
    accordionTitle: string;
}

export default function Accordion(props: AccordionProps) {
    const { active, accordionTitle, children } = props;

    return (
        <div className="w-full">
            <p>{accordionTitle}</p>
            {active && children}
        </div>
    );
}