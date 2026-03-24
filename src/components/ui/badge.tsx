"use client";

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
        primary: "bg-transparent text-(--badge-color-label) border-(--badge-color-border)",
        primaryIcon: "text-(--badge-color-label)",
        secondary: "bg-(--chip-bg) text-(--chip-label) border-(--chip-border)",
        secondaryIcon: "text-(--chip-icon)",
    };
    const sizeMap = {
        xs: "text-xs font-normal",
        md: "text-base font-normal"
    };

    return (
        <div className={`shadow-white/40 rounded-(--badge-border-radius) border-[0.5px] flex flex-row gap-1.5 px-2.5 py-0.5 ${classMap[type]} ${sizeMap[size]}`} onClick={onClick}>
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