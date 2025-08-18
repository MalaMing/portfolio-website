export function ExperienceContent({company, duration, title, body, logo }: {company: string, duration: string, title: string, body: string, logo: string}){
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between content-center">
                <div className="flex flex-row gap-2.5 items-center">
                <img src={logo} alt={`${company} logo`} className="w-[46px] h-[56px] object-contain self-center" />
                <h3 className="text-lg font-bold text-[var(--shared-label-primary)] ">{company}</h3>
                </div>
            <div className="flex items-center">
                <p className="text-base font-semibold text-[var(--shared-label-secondary)]">{duration}</p>
            </div>
            </div>
            <p className="text-base font-semibold text-[var(--shared-label-primary)] ">{title}</p>
            <p className="text-base font-normal text-[var(--shared-label-secondary)]">{body}</p>
        </div>
    );
}