"use client";

import { Button } from "@/components/ui/button";
import SCBReScreen from "@/components/content/projects/scb-re/ScreenGroup";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import MobileScreen from "@/components/screen/MobileScreen";
import ContentTemplate from "@/components/section/ContentTemplate";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ASSETS } from "@/data";

export default function SCBAppContent() {
    return (
        <ContentTemplate
            title="SCB Mobile Banking"
            description="redesign- mobile banking app"
            coverImage={ASSETS.projects.scbRe.coverPage}
            logoImage={ASSETS.projects.scbRe.logo}
            technologies={["Figma", "UX/UI", "Mobile Banking"]}
            firstText="Mobile Banking Home Screen"
            lastText="Redesign"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center">
                    <MobileScreen
                        videoSrc={ASSETS.projects.scbRe.videos[1]}
                    />
                    <MobileScreen
                        videoSrc={ASSETS.projects.scbRe.videos[2]}
                    />
                </div>
                <BodyText text="Home screen design for quick balance check, scan to pay, and everyday actions." />
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
                            <SubHeader text="Customer" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Show Account Balance&Number" />
                                <BodyBaseline text="• Quick Actions" />
                                <BodyBaseline text="• My Favorites" />
                                <BodyBaseline text="• Recent Transactions" />
                                <BodyBaseline text="• Navigation Bar" />
                                <BodyBaseline text="•AI Chat" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Button
                    type="special"
                    label="Portfolio"
                    leftIcon = {<Icon icon="mage:behance" />}
                    onClick={() => window.open("https://www.behance.net/gallery/232670993/Redesign-Mobile-Banking-Application-Homescreen", "_blank")}
                />
                <div className="flex flex-col gap-18">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 items-center justify-center"
                    >
                        <NeonText text="Developer | UX/UI : @mingmmie, @HOMIEZ09" />
                    </motion.div>
                    <SCBReScreen />
                </div>
            </div>
        </ContentTemplate>
    );
}
