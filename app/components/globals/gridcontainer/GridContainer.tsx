"use client";

import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";

export interface GridContainerProps {
    children: React.ReactNode;
    gridCol?: "one" | "two";
}

const gridContainer = tv({
    base: `
        grid
        grid-cols-2
        gap-6
        [&>*]:min-w-0
        max-[700px]:grid-cols-1
    `,
    variants: {
        gridCol: {
            one: "grid-cols-1",
            two: "grid-cols-2",
        },
    },
});
export default function GridContainer({ children, gridCol = "two" }: GridContainerProps) {
    const gridRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        let previousPositions = new Map<HTMLElement, { left: number; top: number }>();
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        const animatePositions = () => {
            const nextPositions = new Map<HTMLElement, { left: number; top: number }>();

            Array.from(grid.children).forEach((child, index) => {
                if (!(child instanceof HTMLElement)) return;

                const position = { left: child.offsetLeft, top: child.offsetTop };
                const previous = previousPositions.get(child);

                if (!reducedMotion.matches) {
                    const deltaX = previous
                        ? previous.left - position.left
                        : index % 2 === 0 ? -80 : 80;
                    const deltaY = previous
                        ? previous.top - position.top
                        : index % 2 === 0 ? 20 : -20;

                    if (deltaX !== 0 || deltaY !== 0) {
                        child.animate(
                            [
                                { transform: `translate(${deltaX}px, ${deltaY}px)` },
                                { transform: "translate(0, 0)" },
                            ],
                            { duration: 1200, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
                        );
                    }
                }

                nextPositions.set(child, position);
            });

            previousPositions = nextPositions;
        };

        const observer = new ResizeObserver(animatePositions);
        observer.observe(grid);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={gridRef} className={gridContainer({ gridCol })}>
            {children}
        </section>
    );
}