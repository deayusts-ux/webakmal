import Link from "next/link";

export default function BentoMoments() {
    return (
        <Link href="/moments" className="group">
            <div className="glass-panel-dark rounded-[32px] col-span-1 md:col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden h-full min-h-[180px]">
                <div
                    className="absolute inset-0 bg-[url('/IMG_4977.JPG')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="mb-auto flex justify-end">
                        <div className="size-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-all">
                            <span className="material-symbols-outlined -rotate-45 text-xl">
                                arrow_forward
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1">
                            Gallery
                        </h2>
                        <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                            Moments
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}
