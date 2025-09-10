import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description: "Download the Framewave Studio press kit and media resources.",
  openGraph: {
    title: "Press — Framewave Studio",
    description: "Press kit and media resources.",
    images: ["/og.png"],
  },
};

export default function PressPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Press</h1>
      <p className="text-white/70 mt-2">Download the one-page press kit PDF. A placeholder is generated if missing.</p>
      <div className="mt-8">
        <a
          href="/press-kit.pdf"
          className="inline-block rounded-md bg-[#F97316] text-black font-semibold px-4 py-2 hover:bg-[#F97316]/90 transition"
          download
        >
          Download Press Kit (PDF)
        </a>
      </div>
    </div>
  );
}
