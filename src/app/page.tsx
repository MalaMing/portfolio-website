"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import { NeonHeader } from "@/components/font-style/NeonHeader";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import { UXUIGroup } from "@/components/group/UXUI-group";
import { EducationExperience } from "@/components/section/EducationExperience";
import { WorkExperience } from "@/components/section/WorkExperience";
import { TabsSection } from "@/components/group/TabsContent";
import Image from "next/image";
import { HeadeSecondary } from "@/components/font-style/Header-Secondary";
import { BodyTextSecondary } from "@/components/font-style/Body-Secondary";
import { ProjectCardGroup } from "@/components/group/Project";
import { ASSETS } from "@/data";

export default function Home() {
  return (
    <div className="relative cursor-auto max-md:pt-20">
          <motion.div
           id="home"
            className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-8 md:px-12 lg:px-18"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <NeonHeader firstText="Hello, I'm" lastText="Phunyisa" />
            <div className="flex flex-col items-center content-center gap-4">
              <div className="relative flex flex-col md:w-[460px] md:h-[460px] w-[250px] h-[250px]">
                <Image src={ASSETS.profile.image} fill alt="" draggable="false" />
              </div>
              <div className="flex flex-col items-center justify-center gap-10 max-w-[760px]">
                <BodyText text="I’m a computer science student at Kasetsart University with a passion for UI design and front-end development." />
                <div className="flex flex-col items-center justify-center gap-12">
                  <NeonText text="let's get intouch" />
                  <div className="flex flex-col md:flex-row gap-4">
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
            <motion.div
              className="flex flex-col gap-8 md:gap-12 md:px-18 px-8 py-24 align-middle"
            >
              <div className="flex flex-col gap-6 items-center md:items-start">
                <HeadeSecondary text={"Projects"} />
                <BodyTextSecondary text="you can see my past projects here." />
              </div>
              <ProjectCardGroup />
            </motion.div>
          </motion.div>


          <motion.div
            id="about"
            className="py-18 px-8 flex flex-col gap-12 md:gap-24 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Header text="About" />

            <motion.div
              className="flex flex-row text-xl gap-2 max-md:text-base text-start flex-wrap w-full justify-between"
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

            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <WorkExperience title="Work Experience" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <EducationExperience title="Education" />
            </motion.div>
          </motion.div>

          <motion.div
            id="skills"
            className="flex flex-col py-18 px-8 gap-10"
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
              <div className="flex flex-col gap-6 md:gap-12">
                <SubHeader text="Coding" />
                <TabsSection />
              </div>

              <div className="flex flex-col gap-12">
                <SubHeader text="UX/UI" />
                <UXUIGroup />
              </div>
            </motion.div>
          </motion.div>


          <div className="flex flex-col md:px-18 md:py-52 py-18 px-8">
            <p className="md:text-xl text-lg text-[var(--shared-label-primary)] font-normal text-center">“Through these projects, 
              I gained hands-on experience in UX/UI design and development, focusing on user needs, teamwork, and clear communication. This portfolio highlights my user-centered design skills and eagerness to grow through future creative projects.”</p>
          </div>
          </div>
  );
}
