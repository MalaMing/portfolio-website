import DesktopImage from "@/components/screen/DesktopImage";

const images: string[] = [];
for (let i = 1; i <= 6; i++) {
    images.push(`/images/projects/prism/screen/${i}.png`);
}

export default function PRISMScreen() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {images.map((img, idx) => (
                <DesktopImage key={idx} imgSrc={img} />
            ))}
        </div>
    );
}