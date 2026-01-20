import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="layout-container flex h-full grow flex-col pt-28">
                <Hero />
                <SocialLinks />
                <div className="px-4 md:px-40 flex justify-center mb-16">
                    <div className="w-full max-w-[960px] flex items-center gap-4">
                        <div className="h-px bg-slate-800 flex-grow"></div>
                        <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                            Services
                        </span>
                        <div className="h-px bg-slate-800 flex-grow"></div>
                    </div>
                </div>
                <Services />
                <Footer />
            </main>
        </>
    );
}
