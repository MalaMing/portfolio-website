export default function EducationBox() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center mb-[20px]">
                <div className="text-black-theme-white flex flex-row gap-[10px] items-center">
                    <img className="w-[46px] h-[55px]  " src="/images/ku_logo.png" alt="image" />
                    <p className="text-lg font-bold ">Kasetsart University</p>
                </div>
                <div className="text-black-theme-whereGrey text-base font-semibold"> June 2022 - Present</div>
            </div>
            <div>
                <p className="text-black-theme-white text-base font-semibold"> GPA 3.26</p>
                <p className="text-base text-black-theme-whereGrey">During my studies, I was a member of the Computer Science committee for 3 years. I helped organize activities like Python and calculus workshops, assisted with Open House, and welcomed first-year students. I also worked with the media and PR team to promote faculty events and took part in projects for each course.</p>
            </div>
        </div>
    );
}