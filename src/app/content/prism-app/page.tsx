"use client";

import { Button } from "@/components/Button";
import KanokScreen from "@/components/content/projects/kanok/ScreenGroup";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import Line from "@/components/Line";
import DesktopScreen from "@/components/screen/DesktopScreen";
import MobileImage from "@/components/screen/MobileImage";
import MobileScreen from "@/components/screen/MobileScreen";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import PRISMScreen from "@/components/content/projects/prism/ScreenGroup";

export default function PRISMAppContent() {
    return (
        <ContentTemplate
            title="PRISM"
            description="smart inventory & sale forecast application"
            coverImage="/images/projects/prism/cover-page.png"
            logoImage="/images/projects/prism/logo.png"
            technologies={["Figma", "UX/UI", "Prototype", "Business Management"]}
            firstText="Business Management"
            lastText="Application"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-row w-full gap-24 items-center justify-center">
                    <DesktopScreen
                        videoSrc="https://www.youtube.com/embed/7QlgXy7o3JI"
                    />
                </div>
                <BodyText text="A Business Management App that helps you manage stock and sales from all platforms in one place. With AI-powered forecasting to keep your business ahead." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 py-4 pr-4">
                            <SubHeader text="Ownership" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sales dashboard with daily, monthly, and yearly overview" />
                                <BodyBaseline text="• Track earnings, expenses, orders, and units sold" />
                                <BodyBaseline text="• AI predictions for inventory, earnings, revenue, and expenses" />
                                <BodyBaseline text="• Best-selling products and sales channel insights" />
                                <BodyBaseline text="• Low stock alerts and demand trend analysis" />
                                <BodyBaseline text="• Centralized product posting across platforms" />
                                <BodyBaseline text="• Smart price and demand suggestions" />
                                <BodyBaseline text="• Inventory tracking with manual/onsite sales import" />
                                <BodyBaseline text="• Sales and order overview with growth trends" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Button
                    type="special"
                    label="Portfolio"
                    leftIcon={<Icon icon="mage:behance" />}
                    onClick={() => window.open("https://www.behance.net/gallery/232667945/PRISM-Smart-Inventory-Sale-Forecast", "_blank")}
                />
                <div className="flex flex-col gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 items-center justify-center"
                >
            </motion.div>
                <PRISMScreen />
                </div>

            </div>
        </ContentTemplate>
    );
}
