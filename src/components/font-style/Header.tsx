"use client";

export function Header({ text, className }: { text: string; className?: string }) {
    return (
        <header>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-(--shared-label-primary) ${className || 'text-center'}`}>{text}</h1>
        </header>
    );
}