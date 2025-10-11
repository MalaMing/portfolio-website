import { educationExperienceData, ASSETS } from "@/data";

export default function EducationBox() {
    const education = educationExperienceData[0];

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center mb-[20px]">
                <div className="text-black-theme-white flex flex-row gap-[10px] items-center">
                    <img className="w-[46px] h-[55px]" src={education.logo} alt={education.company} />
                    <p className="text-lg font-bold">{education.company}</p>
                </div>
                <div className="text-black-theme-whereGrey text-base font-semibold">{education.duration}</div>
            </div>
            <div>
                <p className="text-black-theme-white text-base font-semibold">{education.title}</p>
                <p className="text-base text-black-theme-whereGrey">{education.body}</p>
            </div>
        </div>
    );
}