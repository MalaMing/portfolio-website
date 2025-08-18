"use client"

import { motion, Variants } from "motion/react"

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.6
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, duration: 1.6, ease: "easeInOut" },
                opacity: { delay, duration: 0.8, ease: "easeOut" },
            },
        }
    },
}

export default function MinimalCircles() {
    return (
        <motion.svg
            width="900"
            height="400"
            viewBox="0 0 900 400"
            initial="hidden"
            animate="visible"
            style={image}
        >
            {[250, 450, 650].map((cx, i) => (
                <g key={i}>
                    <circle
                        cx={cx}
                        cy={170}
                        r={115}
                        stroke="#ddd"
                        strokeWidth={0.5}
                        fill="none"
                        opacity={0.25}
                    />
                    <circle
                        cx={cx}
                        cy={170}
                        r={85}
                        stroke="#eee"
                        strokeWidth={0.5}
                        fill="none"
                        opacity={0.2}
                    />
                </g>
            ))}

            <motion.circle
                cx="250"
                cy="170"
                r="100"
                stroke="url(#grad1)"
                strokeWidth={20}
                style={shape}
                variants={draw}
                custom={0}
            />
            <motion.circle
                cx="450"
                cy="170"
                r="100"
                stroke="url(#grad2)"
                strokeWidth={20}
                style={shape}
                variants={draw}
                custom={1}
            />
            <motion.circle
                cx="650"
                cy="170"
                r="100"
                stroke="url(#grad3)"
                strokeWidth={20}
                style={shape}
                variants={draw}
                custom={2}
            />

            <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF8660" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#FF8660" stopOpacity="0.6" />
                </linearGradient>

                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5638A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F5638A" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C80E9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7C80E9" stopOpacity="0.6" />
                </linearGradient>

            </defs>
        </motion.svg>
    )
}

/** Styles */
const image: React.CSSProperties = {
    maxWidth: "75vw",
    display: "block",
    margin: "0 auto",
}

const shape: React.CSSProperties = {
    strokeLinecap: "round",
    fill: "transparent",
    opacity: 0.95,
}
