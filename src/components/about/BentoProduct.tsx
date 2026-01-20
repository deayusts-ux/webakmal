export default function BentoProduct() {
    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 row-span-2 p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-5 z-20">
                <div className="size-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">
                        shopping_bag
                    </span>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center py-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 z-0"></div>
                <div className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 z-10">
                    <span className="material-symbols-outlined text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-pink-400">
                        palette
                    </span>
                    <div className="absolute -bottom-4 -right-4 size-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-xs">-20%</span>
                    </div>
                </div>
            </div>
            <div className="z-10 mt-4 space-y-3">
                <div>
                    <h3 className="text-lg font-bold text-white">Megamendung UI</h3>
                    <p className="text-slate-400 text-xs mt-1">
                        Premium Figma Kit &amp; React Components.
                    </p>
                </div>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2">
                    <span>Purchase</span>
                    <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                        $29
                    </span>
                </button>
            </div>
        </div>
    );
}
