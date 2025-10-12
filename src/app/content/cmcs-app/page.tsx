"use client";

import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import DesktopScreen from "@/components/screen/DesktopScreen";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import CMCSScreen from "@/components/content/projects/alumni/ScreenGroup";
import { ASSETS } from "@/data";

const DesignProcess: { label: string }[] = [
    { label: "UX research" },
    { label: "Competitive analysis" },
    { label: "Persona" },
    { label: "User journey" },
    { label: "User flow" },
    { label: "Information architecture" },
    { label: "Wireframe" },
    { label: "High-fidelity" },
    { label: "Prototype" },
    { label: "Usability testing" },
];

export default function CMCSAppContent() {
    return (
        <ContentTemplate
            title="CMCS"
            description="china management clinic system"
            coverImage={ASSETS.projects.cmcs.coverPage}
            logoImage={ASSETS.projects.cmcs.logo}
            technologies={["Figma", "UX/UI", "Prototype", "Health"]}
            firstText="China Management Clinic System"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center">
                    <DesktopScreen
                        videoSrc="https://youtu.be/DKrjlgM5iz8"
                    />
                </div>
                <BodyText text="A web application project for a UX/UI course, where I was the lead UX/UI designer. I created the design system and led the design process in all stages, gaining experience in planning, time management, and beginning my journey in user experience design." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 items-center justify-center w-[600px] mx-auto"
                >
                    <NeonText text="UX/UI Design Process" />

                    <div className="flex flex-row gap-3 flex-wrap justify-center">
                        {DesignProcess.map((item, index) => (
                            <Badge key={index} label={item.label} size="md" />
                        ))}
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-col gap-2 py-4 pr-4">
                            <SubHeader text="Employee" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sign up/Log in" />
                                <BodyBaseline text="• Add / Remove / Edit employee list" />
                                <BodyBaseline text="• Schedule appointments for the day" />
                                <BodyBaseline text="• Record patient history and treatment details" />
                                <BodyBaseline text="• Record medication history for patients" />
                                <BodyBaseline text="• View patient treatment history" />
                                <BodyBaseline text="• Print payment receipts" />
                                <BodyBaseline text="• Manage inventory of equipment and medication" />
                                <BodyBaseline text="• Add / Edit / Remove treatment types" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="mx-auto">
                <Button
                    type="special"
                    label="Portfolio"
                    leftIcon={<Icon icon="mage:behance" />}
                    onClick={() => window.open("https://www.behance.net/gallery/211537903/CMCS-clinic-management-system", "_blank")}
                />
                </div>
                <div className="flex flex-col gap-4">

                    <CMCSScreen />
                </div>

            </div>
        </ContentTemplate>
    );
}
