"use client";

export default function NeonText({ text }: { text: string }) {
    return (
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--shared-label-primary)] justify-center text-center" style={{ textShadow: '0px -2px 5.8px #FF8660, 0px 4px 7px #7C80E9' }}
        >{text}</p>
    );
}