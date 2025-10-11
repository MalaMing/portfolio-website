"use client";

export function Title({ text }: { text: string }) {
    return (
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--shared-label-primary)]">{text}</p>
    );
}
