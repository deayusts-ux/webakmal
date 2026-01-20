export default function BentoPhilosophy() {
    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 md:col-span-1 lg:col-span-2 row-span-1 p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-slate-800/30">
                <span className="material-symbols-outlined text-[180px]">
                    format_quote
                </span>
            </div>
            <div className="relative z-10">
                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                    Philosophy
                </h2>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-slate-200">
                    "I blend the intricate patterns of{" "}
                    <span className="italic text-primary">traditional art</span> with the
                    precision of modern code."
                </p>
            </div>
        </div>
    );
}
