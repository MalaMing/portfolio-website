"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import DesktopImage from "@/components/screen/DesktopImage";
import MobileImage from "@/components/screen/MobileImage";
import ContentTemplate from "@/components/section/ContentTemplate";
import { motion } from "motion/react";
import { ASSETS } from "@/data";
import { SubHeader } from "@/components/font-style/SubHeader";

export default function SignLanguageAppContent() {
    return (
        <ContentTemplate
            title="Sign Translate"
            description="sign translate application"
            coverImage={ASSETS.projects.sign_lan.coverPage}
            logoImage={ASSETS.projects.sign_lan.logo}
            technologies={["Figma", "UX/UI", "Next.js", "Health", "Development"]}
            firstText="Text to Sign Language Translation"
            lastText="Project"
        >
            <div className="flex flex-col gap-20 mb-20">
                <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-center">
                    <div className="flex justify-center shrink-0 w-full h-full md:w-auto">
                        <DesktopImage
                            imgSrc={ASSETS.projects.sign_lan.screens(1)}
                        />
                    </div>
                    <div className="flex justify-center w-full md:h-96 h-auto md:w-auto rounded-[18px]">
                        <DesktopImage
                            imgSrc={ASSETS.projects.sign_lan.screens(2)}
                        />
                    </div>
                </div>
                
                <BodyText text="This study presents the development of an artificial intelligence (AI) prototype designed to translate Thai text and speech into Thai Sign Language (TSL) structures to support daily communication for the deaf and hard-of-hearing community in Thailand, incorporating the use of design tokens and a design system to ensure consistency and scalability in the user interface." />
                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <SubHeader text="E-Poster" className="md:text-left md:text-2xl text-center" />
                    <div className="flex w-full justify-center">
                        <Image
                            src={ASSETS.projects.sign_lan.screens(4)}
                            alt="E-Poster"
                            width={1200}
                            height={1200}
                            className="w-2xl h-auto rounded-xl object-contain shadow-md"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="flex flex-col gap-8"
                >
                    <SubHeader text="UI Components" className="md:text-left md:text-2xl text-center" />
                    <div className="flex w-full justify-center">
                        <Image
                            src={ASSETS.projects.sign_lan.screens(7)}
                            alt="UI Components"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl object-contain shadow-md"
                            loading="lazy"
                        />
                    </div>
                </motion.div>


                <div className="mx-auto mt-10">
                    <Button
                        type="special"
                        label="Website"
                        leftIcon="language"
                        onClick={() => window.open("https://tsl-translator.vercel.app/", "_blank")}
                    />
                </div>
            </div>
        </ContentTemplate>
    );
}
