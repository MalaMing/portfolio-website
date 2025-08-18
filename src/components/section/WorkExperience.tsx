import { SubHeader } from "../font-style/SubHeader";
import { ExperienceGroup } from "../group/Experience";

const experienceData = [
  {
    company: "Sertis Co., Ltd.",
    duration: "May 2025 - Present",
    title: "UXUI Designer",
    body: "Designed reusable UI components with interactive states and Hi-Fi designs using consistent tokens (color, type, spacing). Applied and documented tokens in Figma, collaborated with developers to validate them in Storybook, and created business flows to support the BD team. Gained experience in scalable design systems and real-world workflows.",
    logo: "/images/logo/work/sertis_logo.avif"
  }
];

export function WorkExperience({title}: {title: string}) {
  return (
    <div className="flex flex-col gap-8">
        <SubHeader text={title} />
        <ExperienceGroup data={experienceData}/>
    </div>
  );
}