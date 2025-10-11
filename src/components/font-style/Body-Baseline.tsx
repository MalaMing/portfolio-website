"use client";

export function BodyBaseline({ text }: { text: string }) {
    return (
        <p className="text-xl font-medium text-[var(--shared-label-secondary)] text-wrap">{text}</p>
    );
}
