"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
];

export default function Header() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
                {/* Site name */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                    murtadhamr.com
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm transition-opacity hover:opacity-70 ${pathname === link.href || pathname.startsWith(link.href + "/")
                                ? "font-medium text-[var(--foreground)]"
                                : "text-[var(--muted)]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="rounded-md p-2 text-[var(--muted)] transition-colors hover:bg-[var(--card-bg)] hover:text-[var(--foreground)]"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        {theme === "light" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="rounded-md p-2 text-[var(--muted)] hover:text-[var(--foreground)]"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                        )}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-md p-2 text-[var(--muted)] hover:text-[var(--foreground)]"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="border-t border-[var(--border)] px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm transition-opacity hover:opacity-70 ${pathname === link.href || pathname.startsWith(link.href + "/")
                                    ? "font-medium text-[var(--foreground)]"
                                    : "text-[var(--muted)]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
