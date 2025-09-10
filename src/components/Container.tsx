import { ReactNode } from "react";

export default function Container({ className = "", children }: { className?: string; children: ReactNode }) {
	return <div className={`container px-4 ${className}`}>{children}</div>;
}
