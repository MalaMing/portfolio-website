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
            className={`w-9 h-9 flex items-center justify-center bg-[var(--button-secondary-state-default)] text-[var(--button-secondary-shared-icon)] hover:bg-[var(--button-secondary-state-hovered)] rounded-[var(--button-shared-radius)] transition disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[var(--button-secondary-disabled-disabled)] ${className}`}
        >
            <span className="material-symbols-rounded">{icon}</span>
        </button>
    );
}
