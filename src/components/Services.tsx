export default function Services() {
    return (
        <div className="px-4 md:px-40 flex justify-center pb-24">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group flex flex-1 gap-4 rounded-2xl glass-panel-dark p-8 flex-col cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-white">
                                brush
                            </span>
                        </div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors z-10">
                            <span className="material-symbols-outlined text-2xl">brush</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-2 z-10">
                            <h2 className="text-white text-xl font-serif font-bold leading-tight">
                                Brand Identity
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Comprehensive visual systems that tell your unique story.
                            </p>
                        </div>
                    </div>
                    <div className="group flex flex-1 gap-4 rounded-2xl glass-panel-dark p-8 flex-col cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-white">
                                code
                            </span>
                        </div>
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors z-10">
                            <span className="material-symbols-outlined text-2xl">code</span>
                        </div>
                        <div className="flex flex-col gap-2 mt-2 z-10">
                            <h2 className="text-white text-xl font-serif font-bold leading-tight">
                                Web Development
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Performant, accessible, and stunning frontend implementation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
