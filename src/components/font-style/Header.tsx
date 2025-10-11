"use client";

export function Header({ text }: { text: string }) {
    return (
        <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--shared-label-primary)] text-center">{text}</h1>
        </header>
    );
}