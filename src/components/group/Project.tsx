"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { SlideButton } from "../ui/SlideButton";
import { projectsData } from "@/data";
import { ProjectCard } from "../ui/Project-Card";

export function ProjectCardGroup() {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
                {projectsData.map((c, i) => (
                    <div key={i} className="snap-center">
                        <ProjectCard {...c} />
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