"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const pathname = usePathname();
    const clickSoundRef = useRef<HTMLAudioElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Playback failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    const playClickSound = () => {
        if (clickSoundRef.current) {
            clickSoundRef.current.currentTime = 0;
            clickSoundRef.current.play().catch(e => console.error("Click sound failed:", e));
        }
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navItems = [
        { name: "Portfolio", path: "/" },
        { name: "Moments", path: "/moments" },
        { name: "About", path: "/about" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-0 flex justify-center pt-4">
            <header className="w-full max-w-[960px] relative flex items-center justify-between px-6 py-3 rounded-full nav-glass mx-4 transition-all duration-300">
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
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={playClickSound}
                            className={`text-sm font-medium transition-colors ${isActive(item.path)
                                ? "text-white font-bold"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Music Control */}
                    <button
                        onClick={toggleMusic}
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 transition-all group ml-2"
                    >
                        <div className="relative w-4 h-4 flex items-center justify-center">
                            {isPlaying ? (
                                <div className="flex gap-[1px] items-end h-3">
                                    <div className="w-[2px] bg-white animate-[music-bar_0.8s_ease-in-out_infinite] h-full"></div>
                                    <div className="w-[2px] bg-white animate-[music-bar_1.2s_ease-in-out_infinite] h-2/3"></div>
                                    <div className="w-[2px] bg-white animate-[music-bar_1.0s_ease-in-out_infinite] h-full"></div>
                                </div>
                            ) : (
                                <span className="material-symbols-outlined text-lg text-white/50 group-hover:text-white transition-colors">play_arrow</span>
                            )}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
                            {isPlaying ? "On" : "Off"}
                        </span>
                    </button>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden relative z-50 text-white p-1"
                    onClick={() => {
                        playClickSound();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
                        <div className="h-10"></div>
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => {
                                        playClickSound();
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-lg font-medium py-2 border-b border-slate-800/50 ${isActive(item.path)
                                        ? "text-white font-bold"
                                        : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Music Control */}
                            <button
                                onClick={toggleMusic}
                                className="mt-2 flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-3 transition-all"
                            >
                                <div className="relative w-5 h-5 flex items-center justify-center">
                                    {isPlaying ? (
                                        <div className="flex gap-[2px] items-end h-4">
                                            <div className="w-[2.5px] bg-white animate-[music-bar_0.8s_ease-in-out_infinite] h-full"></div>
                                            <div className="w-[2.5px] bg-white animate-[music-bar_1.2s_ease-in-out_infinite] h-2/3"></div>
                                            <div className="w-[2.5px] bg-white animate-[music-bar_1.0s_ease-in-out_infinite] h-full"></div>
                                        </div>
                                    ) : (
                                        <span className="material-symbols-outlined text-xl text-white">play_arrow</span>
                                    )}
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest text-white">
                                    Background Music: {isPlaying ? "On" : "Off"}
                                </span>
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            <audio ref={audioRef} loop src="/bg-music.mp3" />
            <audio ref={clickSoundRef} src="/click-sound.mp3" />

            <style jsx global>{`
                @keyframes music-bar {
                    0%, 100% { height: 4px; }
                    50% { height: 16px; }
                }
            `}</style>
        </div>
    );
}
