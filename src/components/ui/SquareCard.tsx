"use client";

import { motion } from "motion/react";
import { Title } from "../font-style/Title";

export function SquareCard({ icon, title, body }: { icon: string, title: string, body: string }) {
    return (
        <motion.div
            whileHover={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300 }}

        >
            <div className="w-[372px]">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-9 px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-9 rounded-[var(--card-uxui-radius)] bg-[var(--card-uxui-bg)] w-full h-[300px]">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--card-uxui-icon-logo-bg)]">
                        <span className="material-symbols-rounded text-[40px] sm:text-[48px]" style={{ color: "var(--card-uxui-icon-logo-icon)" }}>{icon}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Title text={title} />
                        <p className="text-base font-normal text-[var(--card-uxui-label-body)]">{body}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}