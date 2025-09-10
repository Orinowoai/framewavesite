import Image from "next/image";

export default function ProjectCard({ title, desc, tags = [] as string[] }: { title: string; desc: string; tags?: string[] }) {
	return (
		<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
			<div className="relative aspect-video mb-3 overflow-hidden rounded bg-white/5">
				<Image src="/window.svg" alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
			</div>
			<h3 className="font-semibold">{title}</h3>
			<p className="text-white/70 text-sm">{desc}</p>
			<div className="mt-3 flex flex-wrap gap-2">
				{tags.map((t) => (
					<span key={t} className="text-xs rounded bg-white/10 px-2 py-1 text-white/80">{t}</span>
				))}
			</div>
			<div className="mt-3">
				<a href="#" className="inline-block text-black bg-[#22D3EE] px-3 py-1 rounded">View</a>
			</div>
		</div>
	);
}
