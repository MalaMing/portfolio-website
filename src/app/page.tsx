"use client"; // ต้องใส่เพราะใช้ animation ฝั่ง client

import { Button } from "@/components/Button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import { NeonHeader } from "@/components/font-style/NeonHeader";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import { UXUIGroup } from "@/components/group/UXUI-group";
import { EducationExperience} from "@/components/section/EducationExperience";
import { WorkExperience } from "@/components/section/WorkExperience";
import { TabsSection } from "@/components/Tabs";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Section Home */}
      <motion.div
        id="home"
        className="flex flex-col gap-4 items-center justify-center h-screen pt-44 pb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <NeonHeader firstText="Hello, I'm" lastText="Phunyisa" />
        <Image src="/images/profile.png" width={760} height={760} alt="" />
        <div className="flex flex-col items-center justify-center gap-12 max-w-[760px]">
          <BodyText text="I’m a computer science student at Kasetsart University with a passion for UI design and front-end development." />
          <div className="flex flex-col items-center justify-center gap-12">
            <NeonText text="let's get intouch" />
            <div className="flex flex-row gap-3">
              <Button label="Download Resume" type="primaryBorder" />
              <Button label="Download CV" type="primaryBorder" />
            </div>
          </div>
        </div>
      </motion.div>
     {/* Section About */}
<motion.div
  id="about"
  className="p-24 flex flex-col gap-24 items-center justify-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  transition={{ staggerChildren: 0.3, delayChildren: 0.1 }}
>
  <Header text="About" />

  <motion.div
    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 1 } } }}
    className="flex flex-row text-base text-start flex-wrap w-full gap-24 justify-center"
  >
    <p className="max-w-[450px]">
      <span className="text-[var(--shared-label-primary)] font-semibold">I love creating designs that are easy to use and friendly for everyone.</span>
      <span className="text-[var(--shared-label-secondary)] font-medium">My interest started when I worked on</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> UI Design</span>
      <span className="text-[var(--shared-label-secondary)] font-medium"> for projects and</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> front-end development.</span>
      <span className="text-[var(--shared-label-secondary)] font-medium"> It helped me see how small details come together to create the bigger picture and how they impact the</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> user experience.</span>
    </p>
    <p className="max-w-[450px]">
      <span className="text-[var(--shared-label-secondary)] font-medium">I’ve learned</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> TypeScript, JavaScript, and CSS/HTML</span>
      <span className="text-[var(--shared-label-secondary)] font-medium"> to make my designs work for users. I’ve also worked with</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> Java for back-end development.</span>
      <span className="text-[var(--shared-label-secondary)] font-medium"> My knowledge in</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> UX/UI design</span>
      <span className="text-[var(--shared-label-secondary)] font-medium"> helps me improve my</span>
      <span className="text-[var(--shared-label-primary)] font-semibold"> front-end skills.</span>
    </p>
  </motion.div>

  {/* Work Experience */}
  <motion.div
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
    className="flex flex-col gap-12"
  >
    <WorkExperience title="Work Experience" />
  </motion.div>

  {/* Education Experience */}
  <motion.div
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
    className="flex flex-col gap-12"
  >
    <EducationExperience title="Education" />
  </motion.div>
</motion.div>

<motion.div
  id="skills"
  className="flex flex-col p-24 gap-24"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }} 
  transition={{ staggerChildren: 0.3 }}
>
  <Header text="Skills" />

  {/* Coding */}
  <motion.div
    className="flex flex-col gap-32 "
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }}
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
    </div>
  );
}
