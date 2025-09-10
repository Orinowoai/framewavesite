import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ServicesPage() {
	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">Services</h1>
			<p className="text-white/70 mb-6">Strategy, production, and distribution for mobile-native stories.</p>
			<div className="grid md:grid-cols-4 gap-4">
				<Card title="AI-First Animation">
					<ul className="list-disc list-inside text-white/80">
						<li>Design systems for worlds</li>
						<li>Style tuning & continuity</li>
						<li>Toolchains that scale</li>
					</ul>
				</Card>
				<Card title="Micro-Drama">
					<ul className="list-disc list-inside text-white/80">
						<li>30–120s arcs</li>
						<li>Hook-first scripting</li>
						<li>Native sound design</li>
					</ul>
				</Card>
				<Card title="Series & Shorts">
					<ul className="list-disc list-inside text-white/80">
						<li>Pilots & motion comics</li>
						<li>Music visuals</li>
						<li>Packaging & thumbnails</li>
					</ul>
				</Card>
				<Card title="Direct-to-Fan">
					<ul className="list-disc list-inside text-white/80">
						<li>Membership & drops</li>
						<li>BTS & livestreams</li>
						<li>Fan votes</li>
					</ul>
				</Card>
			</div>
			<div className="mt-8"><Button href="/contact">Book a call</Button></div>
		</Section>
	);
}
