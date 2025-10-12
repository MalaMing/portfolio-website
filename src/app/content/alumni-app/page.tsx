"use client";

import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import Line from "@/components/ui/Line";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";
import DesktopScreen from "@/components/screen/DesktopScreen";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AlumniScreen from "@/components/content/projects/csas/ScreenGroup";
import { ASSETS } from "@/data";

export default function AlumniAppContent() {
    return (
        <ContentTemplate
            title="CSAS"
            description="computer science alumni system"
            coverImage={ASSETS.projects.alumni.coverPage}
            logoImage={ASSETS.projects.alumni.logo}
            technologies={["Figma", "UI", "Prototype", "Education"]}
            firstText="CS Alumni System"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center">
                    <DesktopScreen
                        videoSrc="https://youtu.be/qrV7uX_E1tI"
                    />
                </div>
                <BodyText text="This project is part of the System Analysis course and was used for the midterm exam. The task was to analyze user problems and requirements within 24 hours. The project involved creating business flows, use case diagrams, UI designs, sequence diagrams, and class diagrams." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-col md:flex-row gap-2 justify-between w-full">
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full overflow-y-auto justify-center items-center">
                            <Image src={ASSETS.projects.alumni.content.fullLogo} alt="feature" width={330} height={250} className="rounded-lg" />
                            <BodyText text="looks unique but incorporates unity through circular, interconnected elements." />
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full overflow-y-auto justify-center items-center">
                            <Image src={ASSETS.projects.alumni.content.color} alt="feature" width={330} height={250} className="rounded-lg" />
                            <BodyText text="This color is calming, created by combining the university's green and the department's colors." />
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full overflow-y-auto justify-center items-center">
                            <Image src={ASSETS.projects.alumni.content.typography} alt="feature" width={330} height={250} className="rounded-lg" />
                            <BodyText text="A Poppins font that is easy to read and comfortable on the eyes." />
                        </div>


                    </div>
                </motion.div>
                <div className="mx-auto">
                    <Button
                        type="special"
                        label="Prototype"
                        leftIcon={<Icon icon="gg:figma" />}
                        onClick={() => window.open("https://www.figma.com/proto/X7M0q5QO5rAsGb0yQWpeBb/UXUI---CSAlumni?page-id=0%3A1&node-id=20-44130&viewport=-3092%2C3640%2C0.16&t=sbxo6vOXfC2QBCXa-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A44130&show-proto-sidebar=1", "_blank")}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <AlumniScreen />
                </div>

            </div>
        </ContentTemplate>
    );
}
