import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-0 flex justify-center pt-4">
            <header className="w-full max-w-[960px] flex items-center justify-between px-6 py-3 rounded-full nav-glass mx-4">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-lg">diamond</span>
                    </div>
                    <span className="text-white text-xl font-serif font-bold tracking-tight">
                        Akmal Faiz<span className="text-primary">.</span>
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {["Portfolio", "Services", "About"].map((item) => (
                        <Link
                            key={item}
                            href={item === "About" ? "/about" : "#"}
                            className={`text-sm font-medium transition-colors ${item === "About" ? "text-white" : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
                <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">
                    Contact
                </button>
            </header>
        </div>
    );
}
