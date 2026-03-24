"use client";

export function SubHeader({ text, className }: { text: string; className?: string } ) {
    return (
        <header>
            <h2 className={`text-xl sm:text-3xl font-bold text-(--shared-label-primary) ${className || ''}`}>{text}</h2>
        </header>
    );
}