import { motion } from "motion/react";
import { Title } from "../font-style/Title";

export function SquareCard({ icon, title, body }: { icon: string, title: string, body: string }) {
    return (
        <motion.div
            whileHover={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex flex-col gap-9 px-8 py-9 rounded-[var(--card-uxui-radius)] bg-[var(--card-uxui-bg)] w-[380px] h-[268px] ">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--card-uxui-icon-logo-bg)]">
                    <span className="material-symbols-rounded" style={{ width: "48", height: "48", color: "var(--card-uxui-icon-logo-icon)" }}>{icon}</span>
                </div>
                <div>
                    <Title text={title} />
                    <p className="text-base font-normal text-[var(--card-uxui-label-body)]">{body}</p>
                </div>
            </div>
        </motion.div>
    );
}