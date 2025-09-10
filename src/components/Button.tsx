import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export default function Button({ href, children, className = "", ...props }: { href?: string; children: React.ReactNode; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
	if (href) {
		return (
			<Link href={href} className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-[#22D3EE] text-black hover:bg-[#22D3EE]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22D3EE] ${className}`}>
				{children}
			</Link>
		);
	}
	return (
		<button {...props} className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium bg-[#22D3EE] text-black hover:bg-[#22D3EE]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22D3EE] ${className}`}>{children}</button>
	);
}
