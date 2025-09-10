export default function FeatureCard({ title, body, ctaHref, ctaLabel }: { title: string; body: string; ctaHref?: string; ctaLabel?: string }) {
	return (
		<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.06] transition">
			<h3 className="text-lg font-bold">{title}</h3>
			<p className="text-white/70 mt-2">{body}</p>
			{ctaHref && ctaLabel ? (
				<a href={ctaHref} className="inline-block mt-3 rounded-md bg-[#22D3EE] text-black font-semibold px-3 py-1">{ctaLabel}</a>
			) : null}
		</div>
	);
}
