import { px } from 'motion';
import Image from 'next/image';

interface MobileScreenProps {
  videoSrc?: string;
}

export default function MobileScreen({ videoSrc }: MobileScreenProps) {

  return (
    <div className="relative border w-[214px] h-[433px] flex flex-col items-center justify-center rounded-4xl  overflow-hidden">
      <Image src="/images/screen/mobile-screen.png" alt="Mobile Device" fill />
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