export default function BentoStats() {
    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                5+
            </h4>
            <p className="text-sm text-slate-400">
                Years of Design
                <br />
                Excellence
            </p>
        </div>
    );
}
