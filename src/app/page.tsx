import { Button } from "@/components/Button";
import { BodyText } from "@/components/font-style/Body";
import { Header } from "@/components/font-style/Header";
import { NeonHeader } from "@/components/font-style/NeonHeader";
import NeonText from "@/components/font-style/NeonText";
import { SubHeader } from "@/components/font-style/SubHeader";
import { EducationExperience} from "@/components/section/EducationExperience";
import { WorkExperience } from "@/components/section/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col gap-4 items-center justify-center h-screen pt-44 pb-24 ">
      <NeonHeader firstText="Hello, I'm" lastText="Phunyisa" />
    <Image
            src="/images/profile.png"
            width={760}
            height={760}
            alt=""
          />
    <div className="flex flex-col items-center justify-center gap-12 max-w-[760px]">
      <BodyText text="I’m a computer science student at Kasetsart University with a passion for UI design and front-end development." />
      <div className="flex flex-col items-center justify-center gap-12">
      <NeonText text="let's get intouch" />
      <div className="flex flex-row gap-3">
        <Button
          label="Download Resume"
          type="primaryBorder"
        />
        <Button
          label="Download CV"
          type="primaryBorder"
        />
      </div>
      </div>
    </div>
    </div>
    <div className="p-24 flex flex-col gap-16 items-center justify-center">
      <Header text="About" />
      <div className="flex flex-row text-base justify-between text-start flex-wrap w-full">
        <p className="w-[514px]"> 
          <span className="text-[var(--shared-label-primary)] font-semibold">I love creating designs that are easy to use and friendly for everyone.</span>
          <span className="text-[var(--shared-label-secondary)] font-medium">My interest started when I worked on</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> UI Design</span>
          <span className="text-[var(--shared-label-secondary)] font-medium"> for projects and</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> front-end development.</span>
          <span className="text-[var(--shared-label-secondary)] font-medium"> It helped me see how small details come together to create the bigger picture and how they impact the</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> user experience.</span>
        </p>
         <p className="w-[514px]"> 
          <span className="text-[var(--shared-label-secondary)] font-medium">I’ve learned</span>
          <span className="text-[var(--shared-label-primary)] font-semibold">TypeScript, JavaScript, and CSS/HTML</span>
          <span className="text-[var(--shared-label-secondary)] font-medium"> to make my designs work for users. I’ve also worked with</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> Java for back-end development.</span>
          <span className="text-[var(--shared-label-secondary)] font-medium"> My knowledge in</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> UX/UI design</span>
          <span className="text-[var(--shared-label-secondary)] font-medium"> helps me improve my</span>
          <span className="text-[var(--shared-label-primary)] font-semibold"> front-end skills.</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <EducationExperience title="Education" />
        <WorkExperience title="Work Experience" />
      </div>
    </div>
    </div>
  );
}
