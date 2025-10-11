export function Title({ text }: { text: string }) {
    return (
        <p className="text-2xl font-semibold text-[var(--shared-label-primary)]">{text}</p>
    );
}
