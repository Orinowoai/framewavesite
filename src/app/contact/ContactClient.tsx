"use client";

import { useState } from "react";

export default function ContactClient() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    if (res.ok) setStatus("Thanks — we’ll be in touch.");
    else setStatus("Something went wrong. Try again.");
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Contact</h1>
      <p className="text-white/70 mt-2">
        Press & partnerships: <a href="mailto:info@framewave.studio" className="underline">info@framewave.studio</a>
      </p>
      <p className="text-white/70">
        TikTok: <a className="underline" href="https://tiktok.com/@framewave.studio" target="_blank" rel="noreferrer"> @framewave.studio</a>
      </p>

      <form action={onSubmit} className="mt-8 max-w-xl space-y-4">
        <input className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="name" placeholder="Name" required />
        <input className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="email" type="email" placeholder="Email" required />
        <textarea className="w-full rounded border border-white/10 bg-white/[0.02] p-3" name="message" placeholder="Your message" rows={6} required />
        <button className="rounded bg-[#22D3EE] text-black font-semibold px-4 py-2" type="submit">Send</button>
        {status ? <p className="text-white/70">{status}</p> : null}
      </form>
    </div>
  );
}


