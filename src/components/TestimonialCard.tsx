type Props = {
  quote: string;
  author: string;
  role?: string;
};

export default function TestimonialCard({ quote, author, role }: Props) {
  return (
    <figure className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <blockquote className="text-white/90">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-white/60">
        <span className="font-semibold text-white/80">{author}</span>
        {role ? <span className="text-white/50"> — {role}</span> : null}
      </figcaption>
    </figure>
  );
}


