"use client";

import MobileImage from "@/components/screen/MobileImage";
import { generateScreenPaths, ASSETS } from "@/data";

const images = generateScreenPaths(ASSETS.projects.kanok.screens, 24);

export default function KanokScreen() {
    return (
        <div className="flex flex-wrap gap-4 w-full justify-center items-center">
            {images.map((img, idx) => (
                <div key={idx} className="w-[193px]">
                    <MobileImage imgSrc={img} />
                </div>
            ))}
        </div>
    );
}