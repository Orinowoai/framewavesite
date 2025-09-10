export default function Footer() {
	return (
		<footer className="bg-black text-white/80">
			<div className="container py-10 text-sm flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} Framewave Studio</p>
				<a href="mailto:info@framewave.studio" className="underline">info@framewave.studio</a>
			</div>
		</footer>
	);
}
