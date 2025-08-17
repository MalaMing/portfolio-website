
const Links = [
    { text: "Home" },
    { text: "About" },
    { text: "Skills" },
    { text: "Projects" },
    { text: "Contact" }
];




export default function Navbar() {
    return (
        <nav className="py-6 px-24 bg-[var(--topbar-bg)] shadow-sm border-1 border-t-transparent border-x-transparent border-[var(--topbar-divider-border)] sticky top-0 ">
            <ul className="flex flex-row gap-5 justify-end text-sm font-normal">
                {Links.map((link, index) => (
                    <li
                        key={index}
                        className="text-[var(--topbar-label-state-default)] hover:text-[var(--topbar-label-state-hovered)] transition"
                    >
                        {link.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
