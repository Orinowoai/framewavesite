import Section from "@/components/Section";
import Card from "@/components/Card";

export default function AboutPage() {
	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">About</h1>
			<p className="text-white/80 max-w-3xl">We craft cinematic stories for the mobile era. Weekly drops, bold worlds, direct-to-fan. Human direction + generative tools—crafted for the scroll.</p>
			<div className="grid md:grid-cols-3 gap-4 mt-8">
				<Card title="Values">
					<ul className="list-disc list-inside text-white/80">
						<li>Bold, original taste</li>
						<li>Mobile-first craft</li>
						<li>Transparent making</li>
						<li>Direct to fan</li>
					</ul>
				</Card>
			</div>
		</Section>
	);
}
