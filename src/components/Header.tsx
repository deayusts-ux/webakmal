"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-0 flex justify-center pt-4">
            <header className="w-full max-w-[960px] relative flex items-center justify-between px-6 py-3 rounded-full nav-glass mx-4">
                <div className="flex items-center gap-3 relative z-50">
                    <div className="size-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">diamond</span>
                    </div>
                    <span className="text-white text-xl font-serif font-bold tracking-tight">
                        Akmal Faiz<span className="text-primary">.</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Portfolio", path: "/" },
                        { name: "Services", path: "#" },
                        { name: "About", path: "/about" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`text-sm font-medium transition-colors ${isActive(item.path) && item.path !== "#"
                                ? "text-white font-bold"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
                        Contact
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden relative z-50 text-white p-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
                        <div className="h-10"></div> {/* Spacer for header height */}
                        <nav className="flex flex-col gap-4">
                            {[
                                { name: "Portfolio", path: "/" },
                                { name: "Services", path: "#" },
                                { name: "About", path: "/about" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium py-2 border-b border-slate-800/50 ${isActive(item.path) && item.path !== "#"
                                        ? "text-white font-bold"
                                        : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <button className="w-full bg-white text-slate-900 px-5 py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all">
                            Contact Me
                        </button>
                    </div>
                )}
            </header>
        </div>
    );
}

