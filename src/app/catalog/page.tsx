export default function CatalogPage() {
  const items = [
    { t: "Neon Rebellion — Ep.1", d: "Pilot. \"Neon never scared… because Neon is a G, yaaa.\"", url: "#" },
    { t: "Peacealova — Teaser", d: "Geo-political sci-fi saga across nations and aliens.", url: "#" },
  ];
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Catalog</h1>
      <p className="text-white/70 mt-2">Recent drops & experiments.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {items.map((it) => (
          <a key={it.t} href={it.url} className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06]">
            <h3 className="font-bold">{it.t}</h3>
            <p className="text-white/70">{it.d}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

