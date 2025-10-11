"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { SquareCard } from "../ui/SquareCard";
import { SlideButton } from "../ui/SlideButton";

export function UXUIGroup() {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const cards = [
        {
            icon: "search_insights",
            title: "Research & UX",
            body: "User research, experience mapping, and information architecture for optimal usability.",
        },
        {
            icon: "draw_abstract",
            title: "Design System",
            body: "Created Figma design tokens for spacing, color, typography, border, and radius to speed up workflow and ease dev handoff.",
        },
        {
            icon: "palette",
            title: "Visual Design",
            body: "Designed wireframes (low–hi-fi) and maintained scalable Figma components for consistency and speed.",
        },
        {
            icon: "linked_services",
            title: "Prototyping",
            body: "Prototyping with clear user flows and intuitive layouts.",
        },
        {
            icon: "asterisk",
            title: "Technical & Handoff Skills",
            body: "Design-to-code handoff with Figma tokens and basic front-end skills (HTML, CSS, JS).",
        },
    ];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updateScrollButtons = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;

            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        };

        updateScrollButtons();
        container.addEventListener('scroll', updateScrollButtons);

        return () => container.removeEventListener('scroll', updateScrollButtons);
    }, []);

    const handleNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 372,
                behavior: 'smooth'
            });
        }
    };

    const handlePrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -372,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div
                ref={scrollContainerRef}
                className="flex flex-row overflow-x-auto gap-5 overflow-y-hidden w-full pb-4 scrollbar-hide snap-x snap-mandatory"
            >
                {cards.map((c, i) => (
                    <div key={i} className="snap-center">
                        <SquareCard {...c} />
                    </div>
                ))}
            </div>
            <motion.div
                className="flex justify-center sm:justify-end gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <SlideButton
                    icon="chevron_left"
                    onClick={handlePrev}
                    disabled={!canScrollLeft}
                />
                <SlideButton
                    icon="chevron_right"
                    onClick={handleNext}
                    disabled={!canScrollRight}
                />
            </motion.div>
        </>
    );
}
