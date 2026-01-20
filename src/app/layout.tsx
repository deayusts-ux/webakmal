import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
    title: "Premium Batik Portfolio - Modern Fusion | Akmal Faiz",
    description: "Merging traditional aesthetics with modern digital interfaces.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${playfair.variable} dark`}>
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
