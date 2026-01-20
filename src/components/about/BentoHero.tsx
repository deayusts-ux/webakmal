export default function BentoHero() {
    return (
        <div className="glass-panel-dark glow-avatar-card rounded-[32px] col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-0 bg-[url('/AKMAL%20FAIZ%203x4.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="mb-auto flex justify-between items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                            Open for Work
                        </span>
                    </div>
                    <div className="size-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                        <span className="material-symbols-outlined -rotate-45">
                            arrow_forward
                        </span>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 leading-tight">
                    Akmal Faiz
                </h1>
                <p className="text-slate-300 text-lg max-w-md font-light">
                    Digital Artisan &amp; Frontend Architect crafting immersive web
                    experiences from Jakarta.
                </p>
            </div>
        </div>
    );
}
