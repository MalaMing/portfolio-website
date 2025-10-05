import MobileImage from "@/components/screen/MobileImage";

const images: string[] = [];
for (let i = 1; i <= 2; i++) {
    images.push(`/images/projects/scb_re/screen/${i}.png`);
}

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