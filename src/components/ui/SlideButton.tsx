"use client";

interface SlideButtonProps {
    icon: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export function SlideButton({
    icon,
    onClick,
    disabled = false,
    className = "",
}: SlideButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-9 h-9 flex items-center justify-center bg-(--button-secondary-state-default) text-(--button-secondary-shared-icon) hover:bg-(--button-secondary-state-hovered) rounded-(--button-shared-radius) transition disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-(--button-secondary-disabled-disabled) ${className}`}
        >
            <span className="material-symbols-rounded">{icon}</span>
        </button>
    );
}
