"use client";

export function HeadeSecondary({ text, className }: { text: string, className?: string }) {
    return (
        <header>
<h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--shared-label-secondary)] ${className ?? ""}`}>{text}</h1>        </header>
    );
}