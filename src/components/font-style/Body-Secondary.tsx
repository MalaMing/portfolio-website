"use client";

export function BodyTextSecondary({ text }: { text: string }) {
    return (
        <p className="md:text-xl text-lg font-medium text-(--tabs-normal-state-default-label) text-center">{text}</p>
    );
}
