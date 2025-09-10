export default function Feature({ title, body }: { title: string; body: string }) {
	return (
		<div className="rounded-lg border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.06] transition">
			<h3 className="text-lg font-bold">{title}</h3>
			<p className="text-white/70 mt-2">{body}</p>
		</div>
	);
}
