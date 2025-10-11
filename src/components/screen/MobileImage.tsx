"use client";

import Image from 'next/image';

interface MobileScreenProps {
    imgSrc?: string;
}

export default function MobileImage({ imgSrc }: MobileScreenProps) {
    if (!imgSrc) return null;
    return (
        <Image
            src={imgSrc}
            alt="Mobile Device"
            style={{ width: '100%', height: 'auto' }}
            width={193}
            height={354}
        />
    );
}
