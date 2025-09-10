import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://framewave.studio"),
  title: {
    default: "Framewave Studio — Cinematic stories for the mobile era.",
    template: "%s | Framewave Studio",
  },
  description:
    "Weekly drops, bold worlds, direct-to-fan. Human direction + generative tools—crafted for the scroll.",
  openGraph: {
    title: "Framewave Studio",
    description:
      "AI-powered animation & micro-drama built for phones. Weekly drops, bold stories.",
    url: "https://framewave.studio",
    siteName: "Framewave Studio",
    images: ["/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@framewave.studio" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#0B0F14] text-[#F8FAFC] font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}