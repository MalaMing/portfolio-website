"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SquareCard } from "../ui/SquareCard";
import { SlideButton } from "../ui/SlideButton";

export function UXUIGroup() {
    const [isWide, setIsWide] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);

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

    const maxIndex = Math.max(0, cards.length - visibleCards);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    if (isWide) {
        return (
            <div className="flex flex-row gap-5 flex-wrap justify-center">
                {cards.map((c, i) => (
                    <SquareCard key={i} {...c} />
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
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            className="flex-shrink-0"
                            style={{ 
                                width: `calc(${cardWidth}% - ${(visibleCards - 1) * 20 / visibleCards}px)`,
                                marginRight: i < cards.length - 1 ? '20px' : '0'
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
                            <SquareCard {...card} />
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
