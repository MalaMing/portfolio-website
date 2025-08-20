import Image from "next/image";
import { Badge } from "./badge";
import { useState } from "react";
import * as motion from "motion/react-client";
import { hex } from "motion";

interface ProjectCardProps {
    title?: string;
    description?: string;
    technologies?: string[];
    coverImage?: string;
    gradientColor?: string;
}

const technologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB","Figma","UX/UI","React Native","Expo", "Go Fiber", "E-Commerce","Fashion", "Development"];

export function ProjectCard({
    title,
    description,
    coverImage,
    technologies = [],
    gradientColor = ''
}: ProjectCardProps) {
    const [showAllBadges, setShowAllBadges] = useState(false);
    const hasMoreBadges = technologies.length > 4;
    const visibleBadges = showAllBadges ? technologies : technologies.slice(0, 4);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-[var(--card-project-bg)] shadow-white/40 rounded-3xl gap-3 flex flex-col overflow-hidden w-[372px] h-[500px]">
            
            {/* Gradient overlays */}
            <div className="absolute inset-0">
                <Image
                    src={gradientColor}
                    alt="Gradient Overlay"
                    layout="fill"
                    className="object-cover"
                />
            </div>

            {/* Cover Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center">
                <Image
                    src={coverImage ?? "/default-cover.png"}
                    alt="Project Cover"
                    width={405}
                    height={402}
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative p-6 flex flex-col gap-3">
                <p className="text-2xl font-semibold text-[var(--card-project-label-title)]">{title}</p>
                <div className="flex flex-col gap-3">
                    <p className="text-base font-normal text-[var(--card-project-label-body)]">{description}</p>

                    <div className="flex flex-row gap-2 flex-wrap">
                        {visibleBadges.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="cursor-pointer"
                            >
                                <Badge type="primary" label={tech} size="xs" />
                            </motion.div>
                        ))}
                        {hasMoreBadges && (
                            <motion.div
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="cursor-pointer"
                                onClick={() => setShowAllBadges(!showAllBadges)}
                            >
                              <Badge
                                  label={showAllBadges ? "Show Less" : `+ ${technologies.length - 4} More`}
                                  size="xs"
                                  type="primary"
                              />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
