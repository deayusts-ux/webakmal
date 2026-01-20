import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BentoHero from "@/components/about/BentoHero";
import BentoPhilosophy from "@/components/about/BentoPhilosophy";
import BentoStory from "@/components/about/BentoStory";
import BentoTimeLocation from "@/components/about/BentoTimeLocation";
import BentoStats from "@/components/about/BentoStats";
import BentoStack from "@/components/about/BentoStack";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="layout-container flex h-full grow flex-col pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                        <BentoHero />
                        <BentoPhilosophy />
                        <BentoStory />
                        <BentoTimeLocation />
                        <BentoStats />
                        <BentoStack />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
