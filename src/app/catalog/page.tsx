import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Recent drops, shorts, and experiments from Framewave Studio.",
  openGraph: {
    title: "Catalog — Framewave Studio",
    description: "Recent drops, shorts, and experiments.",
    images: ["/og.png"],
  },
};

export default function CatalogPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Catalog</h1>
      <p className="text-white/70 mt-2">Recent drops & experiments.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} desc={p.description} tags={p.tags} />
        ))}
      </div>
    </div>
  );
}

