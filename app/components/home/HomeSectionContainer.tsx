import "./HomeSectionContainer.css";

export interface HomeSectionContainerProps {
    children: React.ReactNode;
}

export default function HomeSectionContainer({ children }: HomeSectionContainerProps) {
    return (
        <section className="home-section-container">
            {children}
        </section>
    )
}