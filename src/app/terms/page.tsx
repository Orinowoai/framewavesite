import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Framewave Studio.",
};

export default function TermsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Terms of Service</h1>
      <p className="text-white/70 mt-4 max-w-3xl">
        By using this site, you agree to act lawfully and respect intellectual property. Content is
        provided as-is without warranties. These terms may change over time. For questions, email
        <a className="underline ml-1" href="mailto:info@framewave.studio">info@framewave.studio</a>.
      </p>
    </div>
  );
}


