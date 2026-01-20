"use client";

import { useEffect, useState } from "react";

export default function BentoTimeLocation() {
    const [time, setTime] = useState("00:00");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-GB", {
                timeZone: "Asia/Jakarta",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 p-6 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
                <div className="p-2 bg-slate-800/50 rounded-full text-slate-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">public</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-green-400 uppercase">
                        Bangka Belitung
                    </span>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-4xl font-serif font-bold text-white tracking-tight">
                    {mounted ? time : "--:--"}
                </div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                    Local Time (WIB)
                </div>
            </div>
        </div>
    );
}
