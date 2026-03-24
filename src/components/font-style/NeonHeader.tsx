"use client";

export function NeonHeader({ firstText, lastText }: { firstText: string, lastText: string }) {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center w-full">
            <span className="text-(--shared-label-primary) w-full">{firstText} </span>
            <span className="w-full bg-linear-to-r from-[#FF8660] via-[#AB75C4] to-[#7C80E9] bg-clip-text text-transparent">{lastText}</span>
        </h1>
    );
}
