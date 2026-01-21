"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Moments() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen w-full relative bg-void text-silver-dim font-gallery-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
            {/* Background Gradients */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 50% 0%, #1f2937 0%, #000000 45%),
                        radial-gradient(circle at 80% 80%, #111827 0%, #000000 30%)
                    `,
                }}
            ></div>

            {/* Header */}
            <header className="relative z-20 w-full px-8 py-10 md:px-24 lg:px-40 flex flex-col md:flex-row items-center justify-between sticky top-0 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4 text-silver mb-4 md:mb-0">
                    <h1 className="text-xl md:text-2xl font-gallery-display font-light tracking-[0.2em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        Just My Moment
                    </h1>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-silver-dim hover:text-white font-gallery-display font-light text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    >
                        Portofolio
                    </Link>
                    <Link
                        href="#"
                        className="text-silver-dim hover:text-white font-gallery-display font-light text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    >
                        Moments
                    </Link>
                    <Link
                        href="/about"
                        className="text-silver-dim hover:text-white font-gallery-display font-light text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    >
                        About
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMenuOpen ? "close" : "sort"}
                    </span>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
                        <nav className="flex flex-col gap-6 items-center">
                            <Link
                                href="/"
                                className="text-silver-dim hover:text-white font-gallery-display font-light text-sm uppercase tracking-[0.25em] transition-all"
                            >
                                Portofolio
                            </Link>
                            <Link
                                href="#"
                                className="text-white font-gallery-display font-medium text-sm uppercase tracking-[0.25em] transition-all"
                            >
                                Moments
                            </Link>
                            <Link
                                href="/about"
                                className="text-silver-dim hover:text-white font-gallery-display font-light text-sm uppercase tracking-[0.25em] transition-all"
                            >
                                About
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            <main className="relative z-10 flex-grow px-4 md:px-12 lg:px-24 py-16 md:py-24 flex justify-center w-full overflow-hidden">
                <div className="max-w-7xl w-full flex flex-col gap-24 md:gap-40">
                    {/* Article 1 */}
                    <article className="group relative flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-28">
                        <div className="w-full lg:w-1/2 relative transition-all duration-1000 ease-out">
                            <div className="w-full overflow-hidden rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] relative group-hover:shadow-[0_40px_80px_-15px_rgba(255,255,255,0.05)] transition-shadow duration-700">
                                <img
                                    alt="Misty mountain landscape with fog rolling over pine trees"
                                    className="w-full h-auto grayscale-[0.2] contrast-125 hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 hover:opacity-100"
                                    src="/IMG_4977.JPG"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-8 left-0 right-0 text-center font-gallery-display font-light tracking-[0.2em] text-white/80 uppercase text-sm">
                                    Pejumis Camp
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-8 md:p-16 rounded-[2rem] text-center">
                                <div className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full">
                                    <span className="text-xs font-gallery-display font-medium tracking-[0.3em] uppercase text-white/90">
                                        RAMBAK BEACH
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-gallery-display font-extralight text-white mb-8 tracking-wide leading-tight">
                                    Short <br />
                                    <span className="font-normal italic font-serif">
                                        Story
                                    </span>
                                </h2>
                                <div className="h-px bg-silver-gradient w-[60%] mx-auto my-8"></div>
                                <div className="font-gallery-sans font-light text-silver-dim space-y-6 leading-relaxed text-lg tracking-wide">
                                    <p>
                                        sekelompok orang orang yang mempunyai nama grub PEJUMIS berasal dari singkatan "Pemuda Jujur dan Manis" yang berisi remaja dari sekolah yang berbeda beda.
                                    </p>
                                    <p>
                                        foto diambil ketika sedang ngecamp.kilas balik malam kena gigit ages subuh kena hujan badai tidur sambil kaki kena genangan air dan pagi pagi ngopi pas ujan,di lanjutkan mandi cuy main ama gelombang gede mana admin terpental gara 3 gelombang gede sekaligus,sempat terjadi masalah hilang barang sewaan untung  orang nya baik dan masalah ga bawa nasi. dah tu aja dah malas bat ngetik
                                    </p>
                                </div>
                                <div className="mt-10 flex justify-center items-center gap-3 text-white/40 group-hover:text-white/80 transition-colors duration-500">
                                    <span className="material-symbols-outlined text-xl font-light">
                                        share
                                    </span>
                                    <span className="text-xs font-gallery-display tracking-widest uppercase">
                                        Share Story
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article className="group relative flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16 lg:gap-28">
                        <div className="w-full lg:w-1/2 relative transition-all duration-1000 ease-out">
                            <div className="w-full overflow-hidden rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] relative group-hover:shadow-[0_40px_80px_-15px_rgba(255,255,255,0.05)] transition-shadow duration-700">
                                <img
                                    alt="Bustling outdoor market with colorful spices and people"
                                    className="w-full h-auto grayscale-[0.2] contrast-125 hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 hover:opacity-100"
                                    src="/WhatsApp Image 2026-01-21 at 11.55.53.jpeg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-0 right-0 text-center font-gallery-display font-light tracking-[0.2em] text-white/80 uppercase text-sm">
                                    RENOVASI
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-8 md:p-16 rounded-[2rem] text-center">
                                <div className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full">
                                    <span className="text-xs font-gallery-display font-medium tracking-[0.3em] uppercase text-white/90">
                                        RENOVASI
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-gallery-display font-extralight text-white mb-8 tracking-wide leading-tight">
                                    Short <br />
                                    <span className="font-normal italic font-serif">
                                        Story
                                    </span>
                                </h2>
                                <div className="h-px bg-silver-gradient w-[60%] mx-auto my-8"></div>
                                <div className="font-gallery-sans font-light text-silver-dim space-y-6 leading-relaxed text-lg tracking-wide">
                                    <p>
                                        kawan smp yang paling sering kumpul dan paling enak di ajak bercanda banyak ceritanya cuman susah bat yak di ajak kumpul karna beda sekolah semua njir mana ada yang di palembang lagi kalo mau ngumpul ada aja tiba tiba ada yang ga bisa,seru lah pokonya kalo ngumpul ada banyak aja yg mau di cerita.kwkw dah gatau lagi ngetik apa
                                    </p>
                                </div>
                                <div className="mt-10 flex justify-center items-center gap-3 text-white/40 group-hover:text-white/80 transition-colors duration-500">
                                    <span className="material-symbols-outlined text-xl font-light">
                                        share
                                    </span>
                                    <span className="text-xs font-gallery-display tracking-widest uppercase">
                                        Share Story
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Article 3 */}
                    <article className="group relative flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-28">
                        <div className="w-full lg:w-1/2 relative transition-all duration-1000 ease-out">
                            <div className="w-full overflow-hidden rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] relative group-hover:shadow-[0_40px_80px_-15px_rgba(255,255,255,0.05)] transition-shadow duration-700">
                                <img
                                    alt="Akmal Kecik Photo"
                                    className="w-full h-auto grayscale-[0.2] contrast-125 hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90 hover:opacity-100"
                                    src="/WhatsApp Image 2026-01-21 at 13.30.14.jpeg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70"></div>
                                <div className="absolute bottom-8 left-0 right-0 text-center font-gallery-display font-light tracking-[0.2em] text-white/80 uppercase text-sm">
                                    Akmal Kecik
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-8 md:p-16 rounded-[2rem] text-center">
                                <div className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full">
                                    <span className="text-xs font-gallery-display font-medium tracking-[0.3em] uppercase text-white/90">
                                        MATRAS BEACH
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-gallery-display font-extralight text-white mb-8 tracking-wide leading-tight">
                                    Akmal <br />
                                    <span className="font-normal italic font-serif">
                                        Kecik
                                    </span>
                                </h2>
                                <div className="h-px bg-silver-gradient w-[60%] mx-auto my-8"></div>
                                <div className="font-gallery-sans font-light text-silver-dim space-y-6 leading-relaxed text-lg tracking-wide">

                                </div>
                                <div className="mt-10 flex justify-center items-center gap-3 text-white/40 group-hover:text-white/80 transition-colors duration-500">
                                    <span className="material-symbols-outlined text-xl font-light">
                                        share
                                    </span>
                                    <span className="text-xs font-gallery-display tracking-widest uppercase">
                                        Share Story
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </main>

            <footer className="relative z-10 w-full py-20 text-center border-t border-white/5 bg-black">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-white/60">
                        <span className="material-symbols-outlined text-3xl font-thin tracking-widest">
                            hotel_class
                        </span>
                    </div>
                    <p className="font-gallery-display font-light tracking-[0.3em] uppercase text-white/40 text-sm">
                        Minimalist Just My Moment
                    </p>
                    <div className="h-px w-20 bg-silver-gradient"></div>
                    <div className="text-xs font-gallery-sans text-white/20 tracking-widest">
                        © 2023 CURATED ELEGANCE.
                    </div>
                </div>
            </footer>
        </div>
    );
}
