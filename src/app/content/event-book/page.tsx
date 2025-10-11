"use client";

import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import { BodyBaseline } from "@/components/font-style/Body-Baseline";
import { Header } from "@/components/font-style/Header";
import { SubHeader } from "@/components/font-style/SubHeader";
import Line from "@/components/ui/Line";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "framer-motion";
import EventBookScreen from "@/components/content/projects/event-book/ScreenGroup";
import { ASSETS } from "@/data";

export default function EventBookAppContent() {
    return (
        <ContentTemplate
            title="PLASOM REUNION"
            description="event booking application"
            coverImage={ASSETS.projects.eventBook.coverPage}
            logoImage={ASSETS.projects.eventBook.logo}
            technologies={["Figma", "UI", "Java", "JavaFX", "CSS", "Booking", "Development"]}
            firstText="Event Booking Application"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <BodyText text="An app for managing event reservations, creating events, and joining activities. Developed as a Software Construction course project, where I designed the entire system." />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <Header text="Features" />
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-col gap-2 py-4 pr-4 w-full">
                            <SubHeader text="General User" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Sign up/Log in" />
                                <BodyBaseline text="• Edit personal information" />
                                <BodyBaseline text="• Create events" />
                                <BodyBaseline text="• Join events" />
                                <BodyBaseline text="• Manage created events (e.g., ban users, assign roles, create calendars)" />
                                <BodyBaseline text="• Chat with event members" />
                                <BodyBaseline text="• Display online status of team members" />
                                <BodyBaseline text="• View a list of all events" />
                            </div>
                        </div>
                        <Line />
                        <div className="flex flex-col gap-2 py-4 pl-4 w-full">
                            <SubHeader text="Admin" />
                            <div className="flex flex-col gap-1 items-baseline">
                                <BodyBaseline text="• Log in" />
                                <BodyBaseline text="• Ban members from accessing the system" />
                                <BodyBaseline text="• Monitor member activity and system usage" />
                                <BodyBaseline text="• View member information" />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Button
                    type="special"
                    label="GitHub"
                    leftIcon="code"
                    onClick={() => window.open("https://github.com/MalaMing/Event-Booking-Application", "_blank")}
                />
                <div className="flex flex-col gap-4">
                    <EventBookScreen />
                </div>

            </div>
        </ContentTemplate>
    );
}
