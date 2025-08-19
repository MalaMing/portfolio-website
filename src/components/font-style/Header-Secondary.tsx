export function HeadeSecondary({ text, className }: { text: string, className?: string }) {
    return (
        <header>
<h1 className={`text-5xl font-bold text-[var(--shared-label-secondary)] ${className ?? ""}`}>{text}</h1>        </header>
    );
}