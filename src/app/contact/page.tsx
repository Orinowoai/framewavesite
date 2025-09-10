import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Press, partnerships, and general inquiries.",
  openGraph: {
    title: "Contact — Framewave Studio",
    description: "Press, partnerships, and general inquiries.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Contact</h1>
      <p className="text-white/70 mt-2">
        Press & partnerships: <a href="mailto:info@framewave.studio" className="underline">info@framewave.studio</a>
      </p>
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="mt-8 max-w-xl space-y-4"
        aria-label="Contact form"
      >
        {/* TODO: Replace with first-party endpoint when ready */}
        <input className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="name" placeholder="Name" required />
        <input className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="email" type="email" placeholder="Email" required />
        <textarea className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="message" placeholder="Your message" rows={6} required />
        <button className="btn-primary" type="submit">Send</button>
      </form>
    </div>
  );
}
