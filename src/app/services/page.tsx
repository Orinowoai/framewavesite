import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ServicesPage() {
	return (
		<Section>
			<h1 className="text-3xl md:text-4xl font-black mb-2">Services</h1>
			<p className="text-white/70 mb-6">Strategy, production, and distribution for mobile-native stories.</p>
			<div className="grid md:grid-cols-3 gap-4">
				<Card title="Strategy">
					<ul className="list-disc list-inside">
						<li>Story design</li>
						<li>Vertical arcs</li>
						<li>Audience development</li>
					</ul>
				</Card>
				<Card title="Production">
					<ul className="list-disc list-inside">
						<li>Scripting</li>
						<li>Shoots & motion design</li>
						<li>Edit</li>
					</ul>
				</Card>
				<Card title="Distribution">
					<ul className="list-disc list-inside">
						<li>Social packaging</li>
						<li>Drops</li>
						<li>Direct-to-fan</li>
					</ul>
				</Card>
			</div>
			<div className="mt-8"><Button href="/contact">Book a call</Button></div>
		</Section>
	);
}
