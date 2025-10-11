"use client";

import MobileImage from "@/components/screen/MobileImage";
import { generateScreenPaths, ASSETS } from "@/data";

const images = generateScreenPaths(ASSETS.projects.partyCal.screens, 10);

export default function PartyCalculatorScreen() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
            {images.map((img, idx) => (
                <MobileImage key={idx} imgSrc={img} />
            ))}
        </div>
    );
}