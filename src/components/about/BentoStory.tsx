export default function BentoStory() {
    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 md:col-span-2 p-8 flex flex-col justify-start relative overflow-hidden group min-h-[200px]">
            <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                    A Short Story About Myself
                </h2>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300 font-light leading-relaxed">
                    <p>
                        Write your story here...
                    </p>
                </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
        </div>
    );
}
