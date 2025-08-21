import { Header } from "../font-style/Header";

export function Footer() {
    return (
        <footer className="flex flex-col p-24 bg-[var(--footer-bg)] border-t-1 border-[var(--divider-level-2)] gap-9">
            <Header text="Contact"/>
            <div>
                <div></div>
                <div></div>
            </div>

        </footer>
    );
}