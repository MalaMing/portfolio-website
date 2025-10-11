"use client";

import { Header } from "../font-style/Header";
import { motion } from "motion/react";

interface FooterProps {
    icon : string;
}

export function Footer() {
    return (
        <footer id="contact" className="flex flex-col p-24 bg-[var(--footer-bg)] border-t-1 border-[var(--divider-level-2)] gap-8 items-center">
            <Header text="Contact"/>
            <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2 justify-center ">
                <motion.div 
                className="flex flex-col gap-2.5 items-center"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                <button className="w-[70px] h-[70px] items-center justify-center"
                    onClick={() => window.open("https://github.com/MalaMing")}>
                    <span className="icon-[mdi--github]" style={{ width: "48px", height: "48px", color: "var(--icon-primary)" }}></span>
                </button>
                </motion.div>
                <motion.div 
                className="flex flex-col gap-2.5 items-center"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                <button className="w-[70px] h-[70px] items-center justify-center"
                    onClick={() => window.open("https://www.linkedin.com/in/phunyisa-tanyapong-109395336")}>
                    <span className="icon-[streamline-logos--linkedin-logo-block]" style={{ width: "48px", height: "48px", color: "var(--icon-primary)" }}></span>
                </button>
                </motion.div>
                <motion.div 
                className="flex flex-col gap-2.5 items-center"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                <button className="w-[70px] h-[70px] items-center justify-center"
                    onClick={() => window.open("https://www.behance.net/your-profile")}>
                    <span className="icon-[wpf--behance]" style={{ width: "48px", height: "48px", color: "var(--icon-primary)" }}></span>
                </button>
                </motion.div>
            </div>
            <div className="font-normal text-base text-[var(--footer-label-body)]">
                Email: phunyisa.tanyapong@gmail.com
            </div>
            </div>
        </footer>
    );
}