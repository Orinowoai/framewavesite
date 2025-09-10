import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Framewave Studio handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Privacy Policy</h1>
      <p className="text-white/70 mt-4 max-w-3xl">
        We respect your privacy. We collect only the information necessary to operate our site and
        communicate with you. We do not sell your data. For any questions, contact
        <a className="underline ml-1" href="mailto:info@framewave.studio">info@framewave.studio</a>.
      </p>
    </div>
  );
}


