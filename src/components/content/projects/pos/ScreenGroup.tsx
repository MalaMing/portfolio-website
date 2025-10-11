"use client";

import DesktopImage from "@/components/screen/DesktopImage";
import MobileImage from "@/components/screen/MobileImage";
import { generateScreenPaths, ASSETS } from "@/data";

const desktopImages = Array.from({ length: 8 }, (_, i) => ASSETS.projects.pos.screens(i + 1));
const mobileImages = Array.from({ length: 4 }, (_, i) => ASSETS.projects.pos.screens(i + 9));

export default function POSScreen() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center place-items-center">
                {desktopImages.map((img, idx) => (
                    <DesktopImage key={idx} imgSrc={img} />
                ))}
            </div>
            <div className="flex flex-wrap gap-4 w-full justify-center items-center">
                {mobileImages.map((img, idx) => (
                    <div key={idx} className="w-[193px]">
                        <MobileImage imgSrc={img} />
                    </div>
                ))}
            </div>
        </div>
    );
}