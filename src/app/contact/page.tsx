export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">Let&apos;s create something cinematic</h1>
      <p className="opacity-80 mb-6">
        Tell us about your project and goals. We&apos;ll reply within 24 hours.
      </p>
      <form
        action="mailto:info@framewave.studio"
        method="post"
        encType="text/plain"
        className="grid gap-4"
      >
        <input required name="name" placeholder="Your name" className="border rounded px-3 py-2" />
        <input required type="email" name="email" placeholder="Your email" className="border rounded px-3 py-2" />
        <textarea required name="message" placeholder="Project brief" rows={6} className="border rounded px-3 py-2" />
        <button className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded">Send</button>
      </form>
      <p className="mt-6 text-sm opacity-70">
        Prefer email? <a className="underline" href="mailto:info@framewave.studio">info@framewave.studio</a>
      </p>
    </main>
  );
}
