import Section from "@/components/Section";
import Card from "@/components/Card";

export default function AboutPage() {
	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">About</h1>
			<p className="text-white/80 max-w-3xl">We craft cinematic stories for the mobile era. Weekly drops, bold worlds, direct-to-fan. Human direction + generative tools—crafted for the scroll.</p>
			<div className="grid md:grid-cols-3 gap-4 mt-8">
				<Card title="Mission">
					<p className="text-white/80">Bring studio-quality storytelling to phones without losing soul or speed.</p>
				</Card>
				<Card title="Story">
					<p className="text-white/80">Founded by filmmakers and designers exploring how AI augments taste, not replaces it. We ship weekly, learn in public, and build with fans.</p>
				</Card>
				<Card title="Values">
					<ul className="list-disc list-inside text-white/80">
						<li>Bold, original taste</li>
						<li>Mobile-first craft</li>
						<li>Transparent making</li>
						<li>Direct to fan</li>
					</ul>
				</Card>
			</div>
			<div className="mt-8 grid md:grid-cols-3 gap-4">
				<Card title="Team">
					<ul className="space-y-1 text-white/80">
						<li>Director — Human + model wrangler</li>
						<li>Designer — Motion + worldbuilding</li>
						<li>Producer — Drops + partnerships</li>
					</ul>
				</Card>
			</div>
		</Section>
	);
}
