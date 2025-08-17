export function NeonHeader({ firstText, lastText }: { firstText: string, lastText: string }) {
    return (
        <h1 className="text-5xl font-extrabold">
            <span className="text-[var(--shared-label-primary)]">{firstText} </span>
            <span className="bg-gradient-to-r from-[#FF8660] via-[#AB75C4] to-[#7C80E9] bg-clip-text text-transparent">{lastText}</span>
        </h1>
    );
}
