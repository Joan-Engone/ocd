import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "StudioLive Pro — TikTok LIVE gérés à distance",
  description:
    "Animateurs certifiés et régie broadcast cloud pour vos TikTok LIVE Shopping, sans studio.",
};

// The ONLY layout file: <html>, <body>, Header and Footer for every page.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} ${mono.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <Header />
        <main className="w-full pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}