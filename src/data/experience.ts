export interface ExperienceData {
  company: string;
  duration: string;
  title: string;
  body: string;
  logo: string;
}

export const workExperienceData: ExperienceData[] = [
  {
    company: "Sertis Co., Ltd.",
    duration: "May 2025 - Present",
    title: "UXUI Designer",
    body: "Designed reusable UI components with interactive states and Hi-Fi designs using consistent tokens (color, type, spacing). Applied and documented tokens in Figma, collaborated with developers to validate them in Storybook, and created business flows to support the BD team. Gained experience in scalable design systems and real-world workflows.",
    logo: "/images/logo/work/sertis_logo.avif",
  },
];

export const educationExperienceData: ExperienceData[] = [
  {
    company: "Kasetsart University",
    duration: "June 2022 - Present",
    title: "GPA 3.36",
    body: "During my studies, I was a member of the Computer Science committee for 3 years. I helped organize activities like Python and calculus workshops, assisted with Open House, and welcomed first-year students. I also worked with the media and PR team to promote faculty events and took part in projects for each course.",
    logo: "/images/logo/education/ku_logo.png",
  },
];
