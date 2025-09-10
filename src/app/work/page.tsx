import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";

const items = Array.from({ length: 9 }).map((_, i) => ({
	id: i + 1,
	slug: i < 2 ? ["neon-rebellion", "peacealova"][i] : `project-${i + 1}`,
	title: i < 2 ? ["Neon Rebellion", "Peacealova"][i] : `Project ${i + 1}`,
	desc: "Short description of the piece.",
}));

export default function WorkPage() {
	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">Work</h1>
			<p className="text-white/70 mb-6">Selected pieces and experiments.</p>
			<div className="grid md:grid-cols-3 gap-4">
				{items.map((it) => (
					<Card key={it.slug}>
						<div className="mb-3 aspect-video rounded bg-white/5" />
						<h3 className="font-bold">{it.title}</h3>
						<p className="text-white/70 text-sm mb-3">{it.desc}</p>
						<Link href={`/work/${it.slug}`} className="inline-block text-black bg-[#22D3EE] px-3 py-1 rounded">View</Link>
					</Card>
				))}
			</div>
		</Section>
	);
}
