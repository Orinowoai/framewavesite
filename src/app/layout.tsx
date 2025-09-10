import type { Metadata } from "next";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });

export const metadata: Metadata = {
  title: "Framewave Studio — AI Animation for the Mobile Era",
  description: "AI-powered animation & micro-drama built for phones. Weekly drops, bold stories, direct-to-fan.",
  metadataBase: new URL("https://framewave.studio"),
  openGraph: {
    title: "Framewave Studio",
    description: "AI-powered animation & micro-drama built for phones. Weekly drops, bold stories.",
    url: "https://framewave.studio",
    siteName: "Framewave Studio",
    images: ["/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@framewave.studio" },
};

function Navbar() {
  return (
    <header className="bg-[#0B0F14] text-[#F8FAFC] sticky top-0 z-50 border-b border-white/10">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">Framewave<span className="text-[#F97316]">.</span>studio</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/catalog">Catalog</Link>
          <Link href="/press">Press</Link>
          <Link href="/contact" className="rounded px-3 py-1 bg-[#F97316] text-black font-semibold">Join</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="container py-10 text-sm flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p>© MMXX — Framewave Studio.</p>
        <div className="flex gap-4">
          <a href="https://tiktok.com/@framewave.studio" target="_blank">TikTok</a>
          <a href="mailto:info@framewave.studio">info@framewave.studio</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmsans.variable}`}>
      <body className="bg-[#0B0F14] text-[#F8FAFC] font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}