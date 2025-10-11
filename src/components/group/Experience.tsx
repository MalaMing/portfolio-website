"use client";

import { ExperienceContent } from "./ExperienceContent";

export function ExperienceGroup({ data }: { data: Array<{ company: string, duration: string, title: string, body: string, logo: string }> }) {

    return (
        <>
            {data.map((item, idx) => (
                <ExperienceContent
                    key={idx}
                    company={item.company}
                    duration={item.duration}
                    title={item.title}
                    body={item.body}
                    logo={item.logo}
                />
            ))}
        </>
    );
}