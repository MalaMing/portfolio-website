export function BodyText({ text }: { text: string }) {
    return (
        <p className="text-2xl font-medium text-[var(--shared-label-secondary)] text-center">{text}</p>
    );
}
