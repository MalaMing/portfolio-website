export function Button({
    className = "",
    label,
    leftIcon,
    onClick,
    type = "primaryBorder",
}:{
    className?: string;
    label?: string;
    leftIcon?: React.ReactNode;
    onClick?: () => void;
    type?: 'primary' | 'primaryBorder' | 'special';
}) {
    const classMap = {
        primary: {
            default: 'bg-white',
            hovered: 'hover:bg-[#F8F8F8]',
            iconColorDefault: 'text-[var(--button-primary-shared-icon)]', // Added icon color for primary button
            textColorDefault: 'text-[var(--button-primary-shared-text)]', // Added text color for primary button
        },
        primaryBorder: {
            default: 'bg-transparent border border-white text-white',
            iconColorDefault: 'text-white',

            hovered: 'hover:bg-white/20 border-1 border-white',
            iconColorHovered: 'hover:text-white',

            selected: 'bg-[#F8F8F8] text-[#161617] ',
            iconColorSelected: 'text-[#161617]',

            selectedHovered: 'hover:bg-[#F8F8F8] text-[#161617] ',
            iconColorSelectedHovered: 'hover:text-[#161617]',
        },
        special: {
            default: 'bg-gradient-to-r from-[var(--button-special-state-default-level-1)] via-[var(--button-special-state-default-level-2)] to-[var(--button-special-state-default-level-3)]',
            hovered: 'bg-gradient-to-r from-[var(--button-special-state-hovered-level-1)] via-[var(--button-special-state-hovered-level-2)] to-[var(--button-special-state-hovered-level-3)] hover:opacity-80',
            iconColorDefault: 'text-[var(--button-special-shared-icon)]', // Added icon color for primary button
            textColorDefault: 'text-[var(--button-special-shared-text)]', // Added text color for primary button

        }
    }

    return (
        <button
            className={[
                // Base styles
                'px-6 py-1.5 text-lg font-normal rounded-[var(--button-shared-radius)] inline-flex items-center justify-center gap-2 transition-all duration-200',
                classMap[type].iconColorDefault,
                'iconColorHovered' in classMap[type] ? classMap[type].iconColorHovered : '',
                'iconColorSelected' in classMap[type] ? classMap[type].iconColorSelected : '',
                'iconColorSelectedHovered' in classMap[type] ? classMap[type].iconColorSelectedHovered : '',
                ,classMap[type].default,classMap[type].hovered,
                // Optional classes
                'selected' in classMap[type] ? classMap[type].selected : '',
                'selectedHovered' in classMap[type] ? classMap[type].selectedHovered : '',
                className
            ].filter(Boolean).join(' ')}
            onClick={onClick}
        >
            {leftIcon && <span className="material-symbols-rounded" style={{ fontSize: "--var(--font-size-lg)" }}>{leftIcon}</span>}
            {label}
        </button>
    );
}