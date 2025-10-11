"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Links = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "/#about" },
    { text: "Skills", href: "/#skills" },
    { text: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="py-3 px-4 sm:py-4 sm:px-6 md:px-12 lg:px-18 bg-[var(--topbar-bg)] shadow-sm border-1 border-t-transparent border-x-transparent border-[var(--topbar-divider-border)] fixed top-0 z-50 w-full">
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[var(--topbar-label-state-default)] hover:text-[var(--topbar-label-state-hovered)] transition p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-row gap-4 lg:gap-6 justify-end text-sm font-normal">
                {Links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="text-[var(--topbar-label-state-default)] hover:text-[var(--topbar-label-state-hovered)] transition"
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--topbar-bg)] border-b border-[var(--topbar-divider-border)] shadow-lg">
                    <ul className="flex flex-col py-4">
                        {Links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="block px-6 py-3 text-base font-normal text-[var(--topbar-label-state-default)] hover:text-[var(--topbar-label-state-hovered)] hover:bg-[var(--color-primary-opacity-level-3)] transition"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
