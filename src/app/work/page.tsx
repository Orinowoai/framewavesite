"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

const items = Array.from({ length: 9 }).map((_, i) => ({
	id: i + 1,
	slug: i < 2 ? ["neon-rebellion", "peacealova"][i] : `project-${i + 1}`,
	title: i < 2 ? ["Neon Rebellion", "Peacealova"][i] : `Project ${i + 1}`,
	desc: "Short description of the piece.",
}));

export default function WorkPage() {
	const [active, setActive] = useState<typeof items[number] | null>(null);

	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">Work</h1>
			<p className="text-white/70 mb-6">Selected pieces and experiments.</p>
			<div className="grid md:grid-cols-3 gap-4">
				{items.map((it) => (
					<button key={it.slug} onClick={() => setActive(it)} className="text-left w-full">
						<Card>
							<div className="mb-3 aspect-video rounded bg-white/5" />
							<h3 className="font-bold">{it.title}</h3>
							<p className="text-white/70 text-sm">{it.desc}</p>
						</Card>
					</button>
				))}
			</div>
			<div className="mt-6 text-sm text-white/60">Prefer deep links? Explore <Link className="underline" href="/catalog">the full catalog</Link>.</div>

			<Modal open={!!active} onClose={() => setActive(null)}>
				{active && (
					<div>
						<div className="aspect-video rounded bg-white/5 mb-4" />
						<h3 className="text-xl font-bold">{active.title}</h3>
						<p className="text-white/70 mb-3">{active.desc}</p>
						<Link href={`/work/${active.slug}`} className="inline-block text-black bg-[#22D3EE] px-3 py-1 rounded">Open project page</Link>
					</div>
				)}
			</Modal>
		</Section>
	);
}
