import Image from 'next/image';
import { ASSETS } from '@/data';

interface MobileScreenProps {
  videoSrc?: string;
}

export default function MobileScreen({ videoSrc }: MobileScreenProps) {

  return (
    <div className="relative border w-[214px] h-[433px] flex flex-col items-center justify-center rounded-4xl  overflow-hidden">
      <Image src={ASSETS.screen.mobile} alt="Mobile Device" fill />
      <div className="flex justify-center items-center w-full h-full py-2 px-2">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="border h-full w-full object-fill"
        />
      </div>
    </div>
  );
}