import Link from "next/link";

export default function Hero() {
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
          <Link href="/catalog" className="rounded-md bg-[#F97316] text-black font-semibold px-4 py-2">Watch the catalog</Link>
          <Link href="/press" className="rounded-md border border-white/20 px-4 py-2">Press kit</Link>
        </div>
      </div>
    </section>
  );
}


