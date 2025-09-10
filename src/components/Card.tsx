import { ReactNode } from "react";

export default function Card({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
	return (
		<div className={`rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition ${className}`}>
			{title ? <h3 className="font-bold text-lg mb-2">{title}</h3> : null}
			<div className="text-white/80 text-sm leading-relaxed">{children}</div>
		</div>
	);
}
