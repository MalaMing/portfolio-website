import { Button } from "@/components/Button";
import { BodyText } from "@/components/font-style/Body";
import { NeonHeader } from "@/components/font-style/NeonHeader";
import NeonText from "@/components/font-style/NeonText";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col gap-4 items-center justify-center h-screen pt-44 pb-24 ">
      <NeonHeader firstText="Hello, I'm" lastText="Phunyisa" />
    <Image
            src="/images/profile.png"
            width={760}
            height={760}
            alt=""
          />
    <div className="flex flex-col items-center justify-center gap-12 max-w-[760px]">
      <BodyText text="I’m a computer science student at Kasetsart University with a passion for UI design and front-end development." />
      <div className="flex flex-col items-center justify-center gap-12">
      <NeonText text="let's get intouch" />
      <div className="flex flex-row gap-3">
        <Button
          label="Download Resume"
          type="primaryBorder"
        />
        <Button
          label="Download CV"
          type="primaryBorder"
        />
      </div>
      </div>
    </div>
    </div>
    <div></div>
    </div>
  );
}
