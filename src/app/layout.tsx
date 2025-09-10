import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://framewave.studio" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#0B0F14] text-[#F8FAFC] font-inter">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Framewave Studio",
              url: "https://framewave.studio",
              sameAs: [
                "https://tiktok.com/@framewave.studio"
              ],
              logo: "/og.png"
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}