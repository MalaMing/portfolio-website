"use client";

import { BodyTextSecondary } from "@/components/font-style/Body-Secondary";
import { HeadeSecondary } from "@/components/font-style/Header-Secondary";
import { ProjectWithPagination } from "@/components/group/ProjectWithPagination";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProjectsPage() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
        setIsFocused(false);
    };

    return (
        <motion.div
            id="projects"
            className="flex flex-col gap-12 min-h-screen bg-[var(--bg-secondary)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="flex flex-col gap-12 mx-auto w-full max-w-screen-xl px-18 py-22"
            >
                <div className="flex flex-col items-start w-full gap-6">
                    <HeadeSecondary text={"Projects"} />
                    <div className="flex flex-row gap-3 justify-between w-full flex-wrap">
                        <BodyTextSecondary text="you can see my past projects here." />
                        <InputGroup className="w-full sm:w-[340px] max-w-full">
                            <InputGroupInput
                                placeholder="Search projects..."
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputGroupAddon>
                                <SearchIcon />
                            </InputGroupAddon>
                            {isFocused && (
                                <InputGroupAddon
                                    align="inline-end"
                                    className="cursor-pointer"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        handleClear();
                                    }}
                                >
                                    <X color="var(--search-state-typing-icon)" />
                                </InputGroupAddon>
                            )}
                        </InputGroup>
                    </div>
                </div>
                <ProjectWithPagination searchValue={searchValue} />
            </motion.div>
        </motion.div>
    );
}
