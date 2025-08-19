import Image from "next/image";
import { Badge } from "./badge";
import { useState } from "react";
import * as motion from "motion/react-client";
import { hex } from "motion";

interface GradientColors {
    primary: string;
    secondary: string;
    tertiary?: string;
    quartery?: string;
    quinary?: string;
    hexnary?: string;
}

const gradientPresets = {
    kanok: {
        primary: "#F56186",
        secondary: "#FFCBD8",
        tertiary: "#FF76AF",
        quartery: "#C569AB",
        quinary: "#FF5D68",
        hexnary: "#FF5D68"
    },
    purple: {
        primary: "#F3F3F9",
        secondary: "#CBCBF2",
        tertiary: "#CBCBF2",
        quartery: "#8F8EE4",
        quinary: "#F3F3F9",
        hexnary: "#9846FB"
    },
    blue: {
        primary: "#CBCBF2",
        secondary: "#9846FB",
        tertiary: "#CBCBF2",
        quartery: "#8F8EE4",
        quinary: "#CBCBF2",
        hexnary: "#CBCBF2"
    },
    green: {
        primary: "#CBCBF2",
        secondary: "#9846FB",
        tertiary: "#CBCBF2",
        quartery: "#8F8EE4",
        quinary: "#CBCBF2",
        hexnary: "#CBCBF2"
    },
    orange: {
        primary: "#CBCBF2",
        secondary: "#9846FB",
        tertiary: "#CBCBF2",
        quartery: "#8F8EE4",
        quinary: "#CBCBF2",
        hexnary: "#CBCBF2"
    },
    teal: {
        primary: "#CBCBF2",
        secondary: "#9846FB",
        tertiary: "#CBCBF2",
        quartery: "#8F8EE4",
        quinary: "#CBCBF2",
        hexnary: "#CBCBF2"
    }
} as const;

type GradientPreset = keyof typeof gradientPresets;

interface ProjectCardProps {
    title?: string;
    description?: string;
    technologies?: string[];
    coverImage?: string;
    gradientColor?: GradientPreset;
}

const defaultTechnologies = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"];

export function ProjectCard({
    title,
    description,
    coverImage,
    technologies = defaultTechnologies,
    gradientColor = 'kanok'
}: ProjectCardProps) {
    const colors = gradientPresets[gradientColor];
    const [showAllBadges, setShowAllBadges] = useState(false);
    const hasMoreBadges = technologies.length > 4;
    const visibleBadges = showAllBadges ? technologies : technologies.slice(0, 4);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-[var(--card-project-bg)] shadow-white/40 rounded-3xl gap-3 flex flex-col overflow-hidden w-[372px] h-[500px]">
            {/* Gradient overlays */}


            <div 
                className="absolute top-[210px] left-[50px] w-[540px] h-[540px] rotate-[120deg] blur-[70px] rounded-full pointer-events-none "
                style={{
                    background: `radial-gradient( ${colors.quinary} 20%, ${colors.hexnary} 80%)`
                }}
            />
                        <div 
                className="absolute top-[220px] left-[30px] w-[410px] h-[408px] rotate-[70deg] blur-[70px] rounded-full pointer-events-none bg-blend-color-dodge"
                style={{
                    background: `radial-gradient(${colors.tertiary} 10%, ${colors.quartery} 30%)`
                }}
            />
            <div 
                className="absolute top-[260px] left-[0px] w-[210px] h-[210px] rotate-[70deg] blur-[120px] rounded-full pointer-events-none bg-blend-color-dodge" 
                style={{
                    background: `radial-gradient(${colors.primary} 100%, ${colors.secondary} 30%)`
                }}
            />

            {/* Cover Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center">
                <Image
                    src={coverImage ?? "/default-cover.png"}
                    alt="Project Cover"
                    width={305}
                    height={302}
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
                                    label={showAllBadges ? "Show Less" : `+ ${defaultTechnologies.length - 4} More`}
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
