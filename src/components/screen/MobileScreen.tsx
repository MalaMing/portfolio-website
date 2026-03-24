"use client";

import Image from 'next/image';
import { ASSETS } from '@/data';

interface MobileScreenProps {
  videoSrc?: string;
}

export default function MobileScreen({ videoSrc }: MobileScreenProps) {

  return (
    <div className="relative border w-53.5 h-108.25 flex flex-col items-center justify-center rounded-4xl  overflow-hidden">
      <Image src={ASSETS.screen.mobile} alt="Mobile Device" fill />
      <div className="flex justify-center items-center w-full h-full py-2 px-2">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="border h-full w-full object-fill"
        />
      </div>
    </div>
  );
}