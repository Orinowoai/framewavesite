export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-28">
        <p className="uppercase tracking-widest text-[#22D3EE]/80 text-xs mb-3">AI-First Animation</p>
        <h1 className="text-4xl md:text-6xl font-dmsans font-black leading-tight">
          Cinematic stories for the <span className="text-[#F97316]">mobile era</span>.
        </h1>
        <p className="text-white/70 max-w-2xl mt-5">
          Weekly drops, bold worlds, direct-to-fan. Human direction + generative tools—crafted for the scroll.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/catalog" className="rounded-md bg-[#F97316] text-black font-semibold px-4 py-2">Watch the catalog</a>
          <a href="/press" className="rounded-md border border-white/20 px-4 py-2">Press kit</a>
        </div>
      </div>

      <div className="container grid md:grid-cols-3 gap-4 pb-20">
        {[
          { title: "Micro-Drama", body: "30–120s arcs engineered for vertical screens." },
          { title: "Series & Shorts", body: "From pilots to motion comics and music-driven visuals." },
          { title: "Direct-to-Fan", body: "Membership, drops, BTS, and votes on what we build next." },
        ].map((c) => (
          <div key={c.title} className="rounded-lg border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.06] transition">
            <h3 className="text-lg font-bold">{c.title}</h3>
            <p className="text-white/70 mt-2">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}