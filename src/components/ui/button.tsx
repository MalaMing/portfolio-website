"use client"

import { motion } from "framer-motion"

export function Button({
    className = "",
    label,
    leftIcon,
    onClick,
    type = "primaryBorder",
}: {
    className?: string
    label?: string
    leftIcon?: React.ReactNode
    onClick?: () => void
    type?: "primary" | "primaryBorder" | "special"
}) {
    const classMap = {
        primary: {
            default: "bg-[var(--button-primary-state-default)]",
            hovered: "hover:bg-[var(--button-primary-state-hovered)]",
            iconColorDefault: "text-[var(--button-primary-shared-icon)]",
            textColorDefault: "text-[var(--button-primary-shared-text)]",
        },
        primaryBorder: {
            default: "bg-transparent border border-[#FFFFFF] text-[#FFFFFF]",
            iconColorDefault: "text-[#FFFFFF]",
            hovered: "hover:bg-[#303037] hover:border-[#303037]",
            iconColorHovered: "hover:text-[#F8F8F8]",
            selected: "bg-[#303037] border-[#303037] text-[#F8F8F8]",
            iconColorSelected: "text-[#F8F8F8]",
            selectedHovered:
                "hover:bg-[#303037] hover:border-[#303037] hover:text-[#D7D7D7]",
            iconColorSelectedHovered: "hover:text-[#D7D7D7]",
        },
        special: {
            default:
                "bg-gradient-to-r from-[var(--button-special-state-default-level-1)] via-[var(--button-special-state-default-level-2)] to-[var(--button-special-state-default-level-3)]",
            hovered:
                "bg-gradient-to-r from-[var(--button-special-state-hovered-level-1)] via-[var(--button-special-state-hovered-level-2)] to-[var(--button-special-state-hovered-level-3)] hover:opacity-90",
            iconColorDefault: "text-[var(--button-special-shared-icon)]",
            textColorDefault: "text-[var(--button-special-shared-text)]",
        },
    }

    return (
        <motion.button
            whileHover={{
                scale: 1.04,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className={[
                "mx-auto px-6 py-2 text-lg font-normal rounded-[var(--button-shared-radius)] inline-flex items-center justify-center gap-2 transition-colors duration-200",
                classMap[type].iconColorDefault,
                "iconColorHovered" in classMap[type]
                    ? classMap[type].iconColorHovered
                    : "",
                "iconColorSelected" in classMap[type]
                    ? classMap[type].iconColorSelected
                    : "",
                "iconColorSelectedHovered" in classMap[type]
                    ? classMap[type].iconColorSelectedHovered
                    : "",
                classMap[type].default,
                classMap[type].hovered,
                "selected" in classMap[type] ? classMap[type].selected : "",
                "selectedHovered" in classMap[type] ? classMap[type].selectedHovered : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            onClick={onClick}
        >
            {leftIcon && (
                <span
                    className="material-symbols-rounded"
                    style={{ fontSize: "var(--font-size-lg)" }}
                >
                    {leftIcon}
                </span>
            )}
            {label}
        </motion.button>
    )
}
