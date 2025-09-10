import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import LogoCloud from "@/components/LogoCloud";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";


export default function Home() {
  const features = [
    { title: "Micro-Drama", body: "30–120s arcs engineered for vertical screens." },
    { title: "Series & Shorts", body: "From pilots to motion comics and music-driven visuals." },
    { title: "Direct-to-Fan", body: "Membership, drops, BTS, and votes on what we build next." },
  ];

  const testimonials = [
    { quote: "A new language for cinematic storytelling.", author: "Creative Director", role: "Global Brand" },
    { quote: "Fast, bold, and native to the feed.", author: "Head of Social", role: "Publisher" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Framewave Studio",
            url: "https://framewave.studio",
          }),
        }}
      />
      <Hero />
      <div className="container grid md:grid-cols-3 gap-4 pb-12">
        {features.map((f) => (
          <FeatureCard key={f.title} title={f.title} body={f.body} />
        ))}
      </div>
      <LogoCloud />
      <div className="container grid md:grid-cols-2 gap-4 pb-20">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} quote={t.quote} author={t.author} role={t.role} />
        ))}
      </div>
      <CTA />
    </>
  );
}