import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-auto border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="px-4 py-8 flex flex-col md:flex-row items-center justify-between max-w-[960px] mx-auto gap-4">
                <p className="text-slate-500 text-sm">© 2024 Akmal Faiz.</p>
                <div className="flex gap-4">
                    <Link
                        className="text-slate-500 hover:text-white transition-colors"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-lg">mail</span>
                    </Link>
                    <Link
                        className="text-slate-500 hover:text-white transition-colors"
                        href="#"
                    >
                        <span className="material-symbols-outlined text-lg">
                            alternate_email
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
