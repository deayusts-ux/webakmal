import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Montserrat, Lato } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Premium Batik Portfolio - Modern Fusion | Akmal Faiz",
    description: "I believe in myself to become a better person and always self-evaluate.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${playfair.variable} ${montserrat.variable} ${lato.variable} dark`}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white overflow-x-hidden bg-background-dark text-slate-100">
                <div className="megamendung-hero-bg"></div>
                <div className="relative flex h-auto flex-col flex-grow w-full z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
