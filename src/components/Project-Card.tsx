import { Badge } from "./badge";

export function ProjectCard(){
    return (
        <div className="bg-[var(--card-project-bg)  shadow-white/40 radius-3xl gap-3 flex flex-col ">
        <p className="text-2xl font-semibold text-[var(--card-project-label-title)]">Title</p>
        <div className="flex flex-col gap-3">
            <p className="text-base font-normal text-[var(--card-project-label-body)]">body</p>
            <div className="flex flex-row gap-2">
                <Badge label="TypeScript" size="xs" type = "primary" />
                <Badge label="TypeScript" size="xs" type = "primary" />
                <Badge label="TypeScript"  size="xs" type = "primary" />
            </div>
        </div>
        </div>
    );

}