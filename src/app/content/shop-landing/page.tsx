"use client";

import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import ContentTemplate from "@/components/section/ContentTemplate";
import DesktopImage from "@/components/screen/DesktopImage";
import { motion } from "framer-motion";
import { ASSETS } from "@/data";

export default function ShopLandingAppContent() {
    return (
        <ContentTemplate
            title="mmonika website"
            description="second-handed  clothes landing page"
            coverImage={ASSETS.projects.shopLanding.coverPage}
            logoImage={ASSETS.projects.shopLanding.logo}
            technologies={["HTML", "CSS", "Javascript", "Fashion", "Development"]}
            firstText="Second-Handed"
            lastText="Website"
        >
            <motion.div
                className="flex flex-col gap-20 mb-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <DesktopImage
                        imgSrc={ASSETS.projects.shopLanding.screens(1)}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <BodyText text="A practice project to design and develop a short landing page for promoting a second-hand shop." />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row w-full gap-12 md:gap-18 items-center justify-center"
                >
                    <Button
                        type="special"
                        label="Website"
                        leftIcon="code"
                        onClick={() => window.open("https://malaming.github.io/mmonikastore-website/", "_blank")}
                    />
                </motion.div>
                <div className="flex flex-col gap-4">
                </div>
            </motion.div>
        </ContentTemplate>
    );
}
