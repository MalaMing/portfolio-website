"use client";

import Image from "next/image";
import { Header } from "../font-style/Header";
import { BodyText } from "../font-style/Body";
import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { ProjectCardGroup } from "../group/Project";
import { NeonHeader } from "../font-style/NeonHeader";
import { HeadeSecondary } from "../font-style/Header-Secondary";
import { BodyTextSecondary } from "../font-style/Body-Secondary";

interface ContentTemplateType {
    title: string;
    description: string;
    coverImage: string;
    logoImage: string;
    technologies: string[];
    children: React.ReactNode;
    firstText?: string;
    lastText?: string;
}


export default function ContentTemplate({
    title,
    description,
    coverImage,
    logoImage,
    technologies,
    children,
    firstText,
    lastText,
}: Readonly<ContentTemplateType>) {
    const [showAllBadges, setShowAllBadges] = useState(false);

    const hasMoreBadges = technologies.length > 4;
    const visibleBadges = showAllBadges ? technologies : technologies.slice(0, 4);
    return (
        <main className="min-h-screen">
            <motion.section
                className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-[460px] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image src={coverImage} alt={title} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover z-0" draggable="false" />
            </motion.section>

            <motion.div
                className="mt-10 w-full flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-18"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Image src={logoImage} alt={title} width={244} height={244} className="object-contain" draggable="false" />
                </motion.div>
                <motion.div
                    className="flex flex-col gap-2 items-center justify-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Header text={title} />
                    <BodyText text={description} />
                </motion.div>
                <motion.div
                    className="flex flex-row gap-2 flex-wrap w-full max-w-[760px] items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
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
                </motion.div>
                </div>
                <motion.div
                    className="pt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <NeonHeader firstText={firstText ?? ""} lastText={lastText ?? ""} />
                </motion.div>
            </motion.div>

            <motion.div
                className="pt-20 px-18"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>

            <motion.div
                className="w-screen relative left-1/2 right-1/2 -mx-[50vw] flex flex-col bg-[var(--bg-secondary)] gap-8 md:gap-10 py-18 align-middle">
                <div className="flex flex-col gap-8 md:gap-10 md:px-18 px-8 py-24 align-middle w-full" >
                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <HeadeSecondary text={"Projects"} />
                        <BodyTextSecondary text="you can see my past projects here." />
                    </div>
                    <ProjectCardGroup />
                </div>
            </motion.div>
        </main>
    );
}
