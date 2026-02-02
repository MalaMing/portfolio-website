export interface ExperienceData {
  company: string;
  duration: string;
  title: string;
  body: string;
  logo: string;
}

export const workExperienceData: ExperienceData[] = [
  {
    company: "Blendata (Spin-off from G-Able Pub Co., Ltd)",
    duration: "Nov 2025 - Feb 2026",
    title: "UXUI Designer (Intern)",
    body: "Gained experience in Data Product workflows, conducting research to identify solutions and improve each feature. Redesigned assigned features and delivered them to the Developer team for implementation.",
    logo: "/images/logo/work/blendata_logo.png",
  },
  {
    company: "Sertis Co., Ltd.",
    duration: "May 2025 - Oct 2025",
    title: "UXUI Designer (Intern)",
    body: "Designed reusable UI components with interactive states and Hi-Fi designs using consistent tokens (color, type, spacing). Applied and documented tokens in Figma, collaborated with developers to validate them in Storybook, and created business flows supporting the BD team. Gained experience in scalable design systems and real-world workflows, contributing to feature development through the full UX/UI process by researching, user flow, and refining user-centered solutions with the team.",
    logo: "/images/logo/work/sertis_logo.avif",
  },

];

export const educationExperienceData: ExperienceData[] = [
  {
    company: "Kasetsart University",
    duration: "June 2022 - Present",
    title: "GPA 3.39",
    body: "During my studies, I was a member of the Computer Science committee for 3 years. I helped organize activities like Python and calculus workshops, assisted with Open House, and welcomed first-year students. I also worked with the media and PR team to promote faculty events and took part in projects for each course.",
    logo: "/images/logo/education/ku_logo.png",
  },
];
