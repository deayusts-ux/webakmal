export default function Hero() {
    return (
        <div className="px-4 md:px-40 flex justify-center py-12">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-col items-center text-center gap-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 glow-avatar-blue">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        'url("/WhatsApp%20Image%202026-01-19%20at%2012.58.25.jpeg")',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="space-y-4 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
                                Open for Commission
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight tracking-tight text-white">
                            Fusion of Art <br />&amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
                                Code
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            I believe in myself to become a better person and always self-evaluate.
                        </p>
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button className="flex items-center gap-2 bg-primary text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            View Portfolio
                        </button>
                        <button className="flex items-center gap-2 bg-slate-800/50 text-white border border-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all">
                            <span className="material-symbols-outlined text-sm">download</span>{" "}
                            CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
