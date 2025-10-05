import MobileImage from "@/components/screen/MobileImage";

const images: string[] = [];
for (let i = 1; i <= 10; i++) {
    images.push(`/images/projects/party_cal/screen/${i}.png`);
}

export default function PartyCalculatorScreen() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
            {images.map((img, idx) => (
                <MobileImage key={idx} imgSrc={img} />
            ))}
        </div>
    );
}