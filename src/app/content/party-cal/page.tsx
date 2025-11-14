"use client";

import { Button } from "@/components/ui/button";
import PartyCalculatorScreen from "@/components/content/projects/party_cal/ScreenGroup";
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

export default function PartyCalContent() {
    return (
        <ContentTemplate
            title="Party Cal"
            description="party food calculator"
            coverImage={ASSETS.projects.partyCal.coverPage}
            logoImage={ASSETS.projects.partyCal.logo}
            technologies={["Figma", "UX/UI", "Next.js", "Food", "Development"]}
            firstText="Party Food Calculator"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center">
                    <MobileScreen
                        videoSrc={ASSETS.projects.partyCal.videos[1]}
                    />
                </div>
                <BodyText text="A small project app created to solve the problem of group dining by helping with food ordering and fair bill-splitting." />
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
                                <BodyBaseline text="• Add members to a group" />
                                <BodyBaseline text="• Add, edit, and delete dishes (main/custom)" />
                                <BodyBaseline text="• Split dishes among selected members" />
                                <BodyBaseline text="• View full table summary" />
                                <BodyBaseline text="• Checkout with PromptPay for payments" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="mx-auto">
                <Button
                    type="special"
                    label="Try it out"
                    leftIcon= "mobile_2"
                    onClick={() => window.open("https://party-calculator.vercel.app/", "_blank")}
                />
                </div>
                <div className="flex flex-col gap-18">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 items-center justify-center"
                    >
                    </motion.div>
                    <PartyCalculatorScreen />
                </div>
            </div>
        </ContentTemplate>
    );
}
