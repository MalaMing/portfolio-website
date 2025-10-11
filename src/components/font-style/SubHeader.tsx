"use client";

export function SubHeader({ text }: { text: string }) {
    return (
        <header>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--shared-label-primary)]">{text}</h2>
        </header>
    );
}