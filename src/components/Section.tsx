import { ReactNode } from "react";

export default function Section({ className = "", children }: { className?: string; children: ReactNode }) {
	return (
		<section className={`py-12 md:py-16 ${className}`}>
			<div className="container">{children}</div>
		</section>
	);
}
