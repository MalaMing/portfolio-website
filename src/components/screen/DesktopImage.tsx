import Image from 'next/image';

interface DesktopScreenProps {
    imgSrc?: string;
}

export default function DesktopImage({ imgSrc }: DesktopScreenProps) {
    if (!imgSrc) return null;
    return (
        <Image
            src={imgSrc}
            alt="Desktop Device"
            style={{ width: '100%', height: 'auto' }}
            width={472}
            height={331}
            className="object-contain rounded-[18px]"
        />
    );
}
