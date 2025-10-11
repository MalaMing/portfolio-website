import { SubHeader } from "../font-style/SubHeader";
import { ExperienceGroup } from "../group/Experience";
import { workExperienceData } from "@/data";

export function WorkExperience({title}: {title: string}) {
  return (
    <div className="flex flex-col gap-8">
        <SubHeader text={title} />
        <ExperienceGroup data={workExperienceData}/>
    </div>
  );
}