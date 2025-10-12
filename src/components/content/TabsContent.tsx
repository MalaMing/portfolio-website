
"use client";

import { motion } from "framer-motion";

interface TabsItemProps {
  icon: string;
  label: string;
}

export function TabsItem({ icon, label }: TabsItemProps) {
  return (
    <motion.div 
      className="flex flex-col gap-2.5 items-center"
      whileHover={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className={icon} style={{ width: "52px", height: "52px", color: "var(--icon-primary)" }}></span>
      <p className="text-base font-normal text-[var(--shared-label-primary)]">{label}</p>
    </motion.div>
  );
}