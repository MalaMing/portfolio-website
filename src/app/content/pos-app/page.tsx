"use client";

import { Button } from "@/components/Button";
import KanokScreen from "@/components/content/projects/kanok/ScreenGroup";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import { SubHeader } from "@/components/font-style/SubHeader";
import Line from "@/components/Line";
import DesktopScreen from "@/components/screen/DesktopScreen";
import MobileImage from "@/components/screen/MobileImage";
import MobileScreen from "@/components/screen/MobileScreen";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";
import PRISMScreen from "@/components/content/projects/prism/ScreenGroup";
import EventBookScreen from "@/components/content/projects/event-book/ScreenGroup";
import POSScreen from "@/components/content/projects/pos/ScreenGroup";

export default function POSAppContent() {
    return (
        <ContentTemplate
            title="BUFFET POS"
            description="buffet restaurant management application"
            coverImage="/images/projects/POS/cover-page.png"
            logoImage="/images/projects/POS/logo.png"
            technologies={["Figma", "UI", "Prototype", "TypeScript", "Go Fiber", "POS", "Food", "Development"]}
            firstText="Buffet Restaurant Management"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-row w-full gap-8 items-center justify-between">
                    <div className="flex-1 flex justify-center">
                        <DesktopScreen
                            videoSrc="https://youtu.be/vfhrZ6_JZqs"
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <MobileScreen
                            videoSrc="/videos/pos/1.mp4"
                        />
                    </div>
                </div>
                <BodyText text="A system for small buffet restaurants with features for table management, ordering, order tracking, payment, membership, and best-selling items display." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-row gap-2 w-full justify-between">
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full">
                            <SubHeader text="General User" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Order Food" />
                                <BodyBaseline text="• Add items to cart" />
                                <BodyBaseline text="• View order history" />
                            </div>
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2 py-4 pl-4 w-full">
                            <SubHeader text="Admin" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Log in" />
                                <BodyBaseline text="• Add Menu" />
                                <BodyBaseline text="• Reserve tables for customers" />
                                <BodyBaseline text="• View customer order details" />
                                <BodyBaseline text="• Process payments and print receipts" />
                                <BodyBaseline text="• View all order history" />
                                <BodyBaseline text="• Manage table information and per-person pricing" />
                                <BodyBaseline text="• Add Membership" />
                                <BodyBaseline text="• Food Overage Fee Calculator" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Button
                    type="special"
                    label="GitHub"
                    leftIcon="code"
                    onClick={() => window.open("https://github.com/472-S-BuffetPOS-6510451077/buffet-pos-frontend", "_blank")}
                />
                <div className="flex flex-col gap-4">
                    <POSScreen />
                </div>

            </div>
        </ContentTemplate>
    );
}
