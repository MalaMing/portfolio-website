"use client";

export function BodyText({ text }: { text: string }) {
    return (
        <p className="text-base sm:text-lg md:text-xl lg:text-xl font-medium text-[var(--shared-label-secondary)] text-center">{text}</p>
    );
}
