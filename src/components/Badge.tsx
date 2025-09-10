export default function Badge({ children }: { children: React.ReactNode }) {
	return <span className="text-xs rounded bg-white/10 px-2 py-1 text-white/80">{children}</span>;
}
