import DesktopImage from "@/components/screen/DesktopImage";
import { generateScreenPaths, ASSETS } from "@/data";

const images = generateScreenPaths(ASSETS.projects.prism.screens, 6);

export default function PRISMScreen() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {images.map((img, idx) => (
                <DesktopImage key={idx} imgSrc={img} />
            ))}
        </div>
    );
}