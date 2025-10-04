"use client";

import { BodyTextSecondary } from "@/components/font-style/Body-Secondary";
import { HeadeSecondary } from "@/components/font-style/Header-Secondary";
import { ProjectCardGroup } from "@/components/group/Project";
import { ProjectWithPagination } from "@/components/group/ProjectWithPagination";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleClear = () => {
        setSearchValue("");
        setIsFocused(false);
    }

    return (
        <motion.div
            id="projects"
            className="flex flex-col gap-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* Section Projects */}
            <motion.div
                className="flex flex-col gap-6 px-24 py-34  bg-[var(--bg-secondary)]  align-middle "
            >
                <div className="flex flex-col items-start">
                    <HeadeSecondary text={"Projects"} />
                    <div className="flex flex-row justify-between w-full items-center">
                        <BodyTextSecondary text="you can see my past projects here." />
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <InputGroup className="w-[340px]">
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
                            {/* filter */}
                        </div>
                    </div>
                    {/* TODO: Filter */}
                    {/* <div className="border w-full mt-8 mb-12">
                        Filter...
                    </div> */}
                </div>
                <ProjectWithPagination searchValue={searchValue} />
            </motion.div>
        </motion.div>
    );
}
