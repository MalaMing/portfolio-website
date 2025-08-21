"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import PathDrawing from "@/components/Animation";
import { Button } from "@/components/Button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import { NeonHeader } from "@/components/font-style/NeonHeader";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import { UXUIGroup } from "@/components/group/UXUI-group";
import { EducationExperience } from "@/components/section/EducationExperience";
import { WorkExperience } from "@/components/section/WorkExperience";
import { TabsSection } from "@/components/Tabs";
import Image from "next/image";
import { HeadeSecondary } from "@/components/font-style/Header-Secondary";
import { BodyTextSecondary } from "@/components/font-style/Body-Secondary";
import { ProjectCardGroup } from "@/components/group/Project";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

 

  // รอ PathDrawing จบก่อนแสดงเนื้อหา
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative cursor-auto">
      {!showContent ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <PathDrawing />
        </div>
      ) : (
        <>

          {/* Section Home */}
          <motion.div
            id="home"
            className="flex flex-col gap-16 items-center justify-center pt-22 pb-24 px-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <NeonHeader firstText="Hello, I'm" lastText="Phunyisa" />
            <div className="flex flex-col items-center content-center gap-2">
              <Image src="/images/profile.png" width={480} height={480} alt="" />
              <div className="flex flex-col items-center justify-center gap-10 max-w-[760px]">
                <BodyText text="I’m a computer science student at Kasetsart University with a passion for UI design and front-end development." />
                <div className="flex flex-col items-center justify-center gap-12">
                  <NeonText text="let's get intouch" />
                  <div className="flex flex-row gap-3">
                    <Button label="Download Resume" type="primaryBorder" />
                    <Button label="Download CV" type="primaryBorder" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

                    <motion.div
            id="projects"
              className="flex flex-col gap-32 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
          {/* Section Projects */}
          <motion.div
            className="flex flex-col gap-6 px-24 py-34  bg-[var(--bg-secondary)]  align-middle "
          >
            <div className="flex flex-col gap-6 items-start">
              <HeadeSecondary text={"Projects"} />
              <BodyTextSecondary text="you can see my past projects here." />
            </div>
            <ProjectCardGroup />

            </motion.div>

        </motion.div>


          {/* Section About */}
          <motion.div
            id="about"
            className="p-24 flex flex-col gap-30 items-center justify-center"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
          >
            <Header text="About" />

            <motion.div
              className="flex flex-row text-xl text-start flex-wrap w-full justify-between"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="max-w-[600px]">
                <span className="text-[var(--shared-label-primary)] font-semibold">
                  "I love creating designs that are easy to use and friendly for everyone.
                </span>
                <span className="text-[var(--shared-label-secondary)] font-medium">
                  {" "}My interest started when I worked on
                </span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> UI Design</span>
                <span className="text-[var(--shared-label-secondary)] font-medium"> for projects and</span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> front-end development.</span>
                <span className="text-[var(--shared-label-secondary)] font-medium">
                  {" "}It helped me see how small details come together to create the bigger picture and how they impact the
                </span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> user experience."</span>
              </p>
              <p className="max-w-[600px]">
                <span className="text-[var(--shared-label-secondary)] font-medium">"I’ve learned</span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> TypeScript, JavaScript, and CSS/HTML</span>
                <span className="text-[var(--shared-label-secondary)] font-medium">
                  {" "}to make my designs work for users. I’ve also worked with
                </span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> Java for back-end development.</span>
                <span className="text-[var(--shared-label-secondary)] font-medium"> My knowledge in</span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> UX/UI design</span>
                <span className="text-[var(--shared-label-secondary)] font-medium"> helps me improve my</span>
                <span className="text-[var(--shared-label-primary)] font-semibold"> front-end skills."</span>
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <WorkExperience title="Work Experience" />
            </motion.div>

            {/* Education Experience */}
            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <EducationExperience title="Education" />
            </motion.div>
          </motion.div>

          {/* Section Skills */}
          <motion.div
            id="skills"
            className="flex flex-col p-24 gap-16"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.3 }}
          >
            <Header text="Skills" />

            <motion.div
              className="flex flex-col gap-32 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-12">
                <SubHeader text="Coding" />
                <TabsSection />
              </div>

              <div className="flex flex-col gap-12">
                <SubHeader text="UX/UI" />
                <UXUIGroup />
              </div>
            </motion.div>
          </motion.div>

      </>
      )}
    </div>
  );
}
