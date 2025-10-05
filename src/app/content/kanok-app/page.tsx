"use client";

import { Button } from "@/components/Button";
import KanokScreen from "@/components/content/projects/kanok/ScreenGroup";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import Line from "@/components/Line";
import MobileImage from "@/components/screen/MobileImage";
import MobileScreen from "@/components/screen/MobileScreen";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";

export default function KanokAppContent() {
    return (
        <ContentTemplate
            title="Kanok App"
            description="custom tailoring shop"
            coverImage="/images/projects/kanok/cover-page.png"
            logoImage="/images/projects/kanok/logo.png"
            technologies={["Figma", "UX/UI", "React Native", "Expo", "Go Fiber", "E-Commerce", "Fashion", "Development"]}
            firstText="Tailor Management System"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-row w-full gap-24 items-center justify-center">
                    <MobileScreen
                        videoSrc="/videos/kanok/1.mp4"
                    />
                    <MobileScreen
                        videoSrc="/videos/kanok/2.mp4"
                    />
                    <MobileScreen
                        videoSrc="/videos/kanok/3.mp4"
                    />
                </div>
                <BodyText text="An e-commerce application for custom clothing orders. Developed from a System Analysis course project involving shop interviews, system planning, analysis, design, and development." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full">
                            <SubHeader text="Customer" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sign up/Log in" />
                                <BodyBaseline text="• Add/Edit Address" />
                                <BodyBaseline text="• Place custom clothing orders" />
                                <BodyBaseline text="• Make payments" />
                                <BodyBaseline text="• Cancel orders" />
                                <BodyBaseline text="• View order history" />
                                <BodyBaseline text="• Track order status" />
                            </div>
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2 p-4 w-full">
                            <SubHeader text="Shop Owner" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sign up/Log in" />
                                <BodyBaseline text="• Add/Edit Address" />
                                <BodyBaseline text="• Receive orders and provide pricing" />
                                <BodyBaseline text="• Cancel orders" />
                                <BodyBaseline text="• Create tailor accounts" />
                                <BodyBaseline text="• Assign delivery dates and select tailor for tasks" />
                                <BodyBaseline text="• Track Tailor work status" />
                                <BodyBaseline text="• Track delivery status" />
                                <BodyBaseline text="• Update tracking numbers" />
                                <BodyBaseline text="• Add / Remove / Edit materials and patterns" />
                            </div>
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2  py-4 pl-4 w-full">
                            <SubHeader text="Tailor" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sign up/Log in" />
                                <BodyBaseline text="• Add/Edit Address" />
                                <BodyBaseline text="• Receive assigned tasks from the shop owner" />
                                <BodyBaseline text="• Track work progress" />
                                <BodyBaseline text="• Track delivery status" />
                                <BodyBaseline text="• Update work status" />
                                <BodyBaseline text="• Update tracking numbers" />
                            </div>
                            <div />
                        </div>
                    </div>
                </motion.div>
                <Button
                    type="special"
                    label="Demo Video"
                    leftIcon="movie"
                    onClick={() => window.open("https://www.youtube.com/watch?v=w4qy4m1k2XQ", "_blank")}
                />
                <div className="flex flex-col gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 items-center justify-center"
                >
                    <p className="text-5xl font-bold text-[(--var(shared/label/primary))]">40+ app screens</p>
                    <NeonText text="Three roles in one application" />
                </motion.div>
                <KanokScreen />
                </div>
            </div>
        </ContentTemplate>
    );
}
