type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; name: string };

export function Input({ label, name, className = "", ...props }: InputProps) {
	return (
		<label className="block text-sm mb-3">
			{label ? <span className="mb-1 block text-white/80">{label}</span> : null}
			<input name={name} className={`w-full rounded border border-white/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[#22D3EE] ${className}`} {...props} />
		</label>
	);
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; name: string };

export function Textarea({ label, name, className = "", ...props }: TextareaProps) {
	return (
		<label className="block text-sm mb-3">
			{label ? <span className="mb-1 block text-white/80">{label}</span> : null}
			<textarea name={name} className={`w-full rounded border border-white/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-[#22D3EE] ${className}`} {...props} />
		</label>
	);
}
