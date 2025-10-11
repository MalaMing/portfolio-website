import { SubHeader } from "../font-style/SubHeader";
import { ExperienceGroup } from "../group/Experience";
import { educationExperienceData } from "@/data";

export function EducationExperience({title}: {title: string}) {
  return (
    <div className="flex flex-col gap-8">
        <SubHeader text={title} />
        <ExperienceGroup data={educationExperienceData}/>
    </div>
  );
}