const Links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
];

export default function Navbar() {
  return (
    <nav className="py-6 px-24 bg-[var(--topbar-bg)] shadow-sm border-1 border-t-transparent border-x-transparent border-[var(--topbar-divider-border)] sticky top-0 z-50">
      <ul className="flex flex-row gap-5 justify-end text-sm font-normal">
        {Links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-[var(--topbar-label-state-default)] hover:text-[var(--topbar-label-state-hovered)] transition"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
