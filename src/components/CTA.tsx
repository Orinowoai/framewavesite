import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-black">Ready to collaborate?</h2>
        <p className="text-white/70 mt-2">Press, partnerships, and commissions welcome.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/catalog" className="btn-primary">Watch the catalog</Link>
          <Link href="/press" className="btn-secondary">Press kit</Link>
        </div>
      </div>
    </section>
  );
}


