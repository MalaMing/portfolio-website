import MobileImage from "@/components/screen/MobileImage";
import { generateScreenPaths, ASSETS } from "@/data";

const images = generateScreenPaths(ASSETS.projects.scbRe.screens, 2);

export default function SCBReScreen() {
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