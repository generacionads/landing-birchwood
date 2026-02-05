import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-lato",
});

export const metadata: Metadata = {
    title: "Birchwood Dental - Dental Implants",
    description: "Birchwood Dental Redesign",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-GB">
            <body className={`${lato.variable} font-sans bg-slate-50 text-slate-800 antialiased selection:bg-brand-200 selection:text-brand-900`}>
                {children}
            </body>
        </html>
    );
}
