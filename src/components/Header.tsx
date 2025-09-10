import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-[#0B0F14] text-[#F8FAFC] sticky top-0 z-50 border-b border-white/10">
			<div className="container flex h-14 items-center justify-between">
				<Link href="/" className="font-bold tracking-tight">Framewave Studio</Link>
				<nav className="flex gap-5 text-sm">
					<Link href="/">Home</Link>
					<Link href="/catalog">Catalog</Link>
					<Link href="/press">Press</Link>
					<Link href="/contact" className="rounded px-3 py-1 bg-[#22D3EE] text-black font-semibold">Contact</Link>
				</nav>
			</div>
		</header>
	);
}
