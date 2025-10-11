
export function Badge({
    label,
    iconLeft,
    iconRight,
    type = "primary",
    size = "md",
    onClick,
}: {
    label?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    size: "xs" | "md";
    type?: "primary" | "secondary";
    onClick?: () => void;

}) {
    const classMap = {
        primary: "bg-transparent text-[var(--badge-color-label)] border-[var(--badge-color-border)]",
        primaryIcon: "text-[var(--badge-color-label)]",
        secondary: "bg-[var(--chip-bg)] text-[var(--chip-label)] border-[var(--chip-border)]",
        secondaryIcon: "text-[var(--chip-icon)]",
    };
    const sizeMap = {
        xs: "text-xs font-normal",
        md: "text-base font-normal"
    };

    return (
        <div className={`shadow-white/40 rounded-[var(--badge-border-radius)] border-[0.5px] flex flex-row gap-1.5 px-2.5 py-0.5 ${classMap[type]} ${sizeMap[size]}`} onClick={onClick}>
            {iconLeft && (
                <span className={`material-symbols-rounded `}>
                    {iconLeft}
                </span>
            )}
            {label && <span>{label}</span>}
            {iconRight && (
                <span className={`material-symbols-rounded `}>
                    {iconRight}
                </span>
            )}

        </div>
    );
}