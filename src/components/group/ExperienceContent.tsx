"use client";

export function ExperienceContent({ company, duration, title, body, logo }: { company: string, duration: string, title: string, body: string, logo: string }) {
    return (
        <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex flex-col sm:flex-row justify-between sm:content-center gap-2 sm:gap-0">
                <div className="flex flex-col md:flex-row gap-2 sm:gap-2.5 items-center">
                    <img src={logo} alt={`${company} logo`} className="w-[46px] h-[56px] sm:w-[46px] sm:h-[56px] object-contain self-center" />
                    <h3 className="text-lg md:text-xl font-bold text-[var(--shared-label-primary)] text-center">{company}</h3>
                </div>
                <div className="flex items-center sm:items-start w-full sm:w-auto justify-center sm:justify-end">
                    <p className="text-base md:text-lg font-semibold text-[var(--shared-label-secondary)]">{duration}</p>
                </div>
            </div>
            <p className="text-base md:text-lg font-semibold text-[var(--shared-label-primary)] text-center sm:text-left">{title}</p>
            <p className="text-base md:text-lg font-normal text-[var(--shared-label-secondary)]">{body}</p>
        </div>
    );
}