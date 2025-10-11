"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SquareCard } from "../ui/SquareCard";
import { SlideButton } from "../ui/SlideButton";
import { projectsData } from "@/data";
import { ProjectCard } from "../ui/Project-Card";

export function ProjectCardGroup() {
    const [isWide, setIsWide] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsWide(width > 2100);
            
            if (width < 640) {
                setVisibleCards(1); // mobile
            } else if (width < 1024) {
                setVisibleCards(2); // tablet
            } else {
                setVisibleCards(3); // desktop
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, projectsData.length - visibleCards);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    if (isWide) {
        return (
            <div className="flex flex-row gap-5 flex-wrap justify-center">
                {projectsData.map((c, i) => (
                    <ProjectCard key={i} {...c} />
                ))}
            </div>
        );
    }

    const cardWidth = 100 / visibleCards;

    return (
        <div className="flex flex-col gap-5 sm:gap-5 md:gap-5">
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex w-full"
                    style={{ paddingRight: '20px' }}
                    animate={{
                        x: `-${currentIndex * cardWidth}%`
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30
                    }}
                >
                    {projectsData.map((card, i) => (
                        <motion.div
                            key={i}
                            className="flex-shrink-0"
                            style={{ 
                                width: `calc(${cardWidth}% - ${(visibleCards - 1) * 20 / visibleCards}px)`,
                                marginRight: i < projectsData.length - 1 ? '20px' : '0'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            <ProjectCard {...card} />
                        </motion.div>
                    ))}
                </motion.div>
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
                    disabled={currentIndex === 0}
                />
                <SlideButton
                    icon="chevron_right"
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                />
            </motion.div>
        </div>
    );
}
