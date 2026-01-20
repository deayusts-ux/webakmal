export default function BentoStack() {
    const stack = [
        { name: "HTML5", icon: "html", color: "orange" },
        { name: "Tailwind", icon: "css", color: "blue" },
        { name: "JavaScript", icon: "javascript", color: "yellow" },
        { name: "React", icon: "code", color: "cyan" },
        { name: "Figma", icon: "design_services", color: "purple" },
        { name: "Node.js", icon: "terminal", color: "emerald" },
        { name: "Spline", icon: "view_in_ar", color: "pink" },
    ];

    // Colors mapping for Tailwind classes
    const colors: Record<string, string> = {
        orange: "text-orange-500 border-orange-500/20 bg-orange-500/10 group-hover/tech:border-orange-500",
        blue: "text-blue-500 border-blue-500/20 bg-blue-500/10 group-hover/tech:border-blue-500",
        yellow: "text-yellow-500 border-yellow-500/20 bg-yellow-500/10 group-hover/tech:border-yellow-500",
        cyan: "text-cyan-500 border-cyan-500/20 bg-cyan-500/10 group-hover/tech:border-cyan-500",
        purple: "text-purple-500 border-purple-500/20 bg-purple-500/10 group-hover/tech:border-purple-500",
        emerald: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10 group-hover/tech:border-emerald-500",
        pink: "text-pink-500 border-pink-500/20 bg-pink-500/10 group-hover/tech:border-pink-500",
    };

    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 md:col-span-3 lg:col-span-4 p-0 overflow-hidden flex items-center h-24 relative border-t border-slate-700/50">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/80 to-transparent z-20 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="flex gap-16 animate-marquee whitespace-nowrap pl-4 items-center">
                {/* Double the list for seamless loop */}
                {[...stack, ...stack].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 group/tech">
                        <div
                            className={`size-10 rounded-xl flex items-center justify-center border transition-colors ${colors[tech.color]}`}
                        >
                            <span className={`material-symbols-outlined ${colors[tech.color].split(" ")[0]}`}>
                                {tech.icon}
                            </span>
                        </div>
                        <span className="text-lg font-bold text-slate-300 group-hover/tech:text-white transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
