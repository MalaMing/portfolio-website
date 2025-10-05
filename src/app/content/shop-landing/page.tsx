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
import { Badge } from "@/components/badge";
import CMCSScreen from "@/components/content/projects/alumni/ScreenGroup";
import DesktopImage from "@/components/screen/DesktopImage";

const DesignProcess: { label: string}[] = [
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

export default function ShopLandingAppContent() {
    return (
        <ContentTemplate
            title="mmonika website"
            description="second-handed  clothes landing page"
            coverImage="/images/projects/shop_landing/cover-page.png"
            logoImage="/images/projects/shop_landing/logo.png"
            technologies={["HTML", "CSS", "Javascript", "Fashion", "Development"]}
            firstText="Second-Handed"
            lastText="Website"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-row w-full gap-24 items-center justify-center">
                    <DesktopImage
                        imgSrc="/images/projects/shop_landing/screen/1.png"
                    />
                </div>
                <BodyText text="A practice project to design and develop a short landing page for promoting a second-hand shop." />
                <Button
                    type="special"
                    label="Website"
                    leftIcon="code"
                    onClick={() => window.open("https://malaming.github.io/mmonikastore-website/", "_blank")}
                />
                <div className="flex flex-col gap-4">
                </div>

            </div>
        </ContentTemplate>
    );
}
