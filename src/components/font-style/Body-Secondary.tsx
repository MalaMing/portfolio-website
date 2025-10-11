"use client";

export function BodyTextSecondary({ text }: { text: string }) {
    return (
        <p className="md:text-2xl text-lg font-medium text-[var(--tabs-normal-state-default-label)] text-center">{text}</p>
    );
}
