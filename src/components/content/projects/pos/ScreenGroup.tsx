import DesktopImage from "@/components/screen/DesktopImage";
import MobileImage from "@/components/screen/MobileImage";

const desktopImages: string[] = [];
for (let i = 1; i <= 8; i++) {
    desktopImages.push(`/images/projects/POS/screen/${i}.png`);
}
const mobileImages: string[] = [];
for (let i = 9; i <= 12; i++) {
    mobileImages.push(`/images/projects/POS/screen/${i}.png`);
}

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