import { SubHeader } from "../font-style/SubHeader";
import { ExperienceGroup } from "../group/Experience";

const experienceData = [
  {
    company: "Kasetsart University",
    duration: "June 2022 - Present",
    title: "GPA 3.36",
    body: "During my studies, I was a member of the Computer Science committee for 3 years. I helped organize activities like Python and calculus workshops, assisted with Open House, and welcomed first-year students. I also worked with the media and PR team to promote faculty events and took part in projects for each course.",
    logo: "/images/logo/education/ku_logo.png"
  }
];

export function EducationExperience({title}: {title: string}) {
  return (
    <div className="flex flex-col gap-8">
        <SubHeader text={title} />
        <ExperienceGroup data={experienceData}/>
    </div>
  );
}