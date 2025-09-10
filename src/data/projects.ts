export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Neon Rebellion — Ep.1",
    description:
      "Pilot micro-drama set in a synth-lit mega-city. Neon never scared.",
    tags: ["Micro-Drama", "2D+3D", "Cyberpunk"],
  },
  {
    title: "Peacealova — Teaser",
    description:
      "Geo-political sci‑fi saga across nations and alien contact protocols.",
    tags: ["Teaser", "Sci‑Fi", "Worldbuilding"],
  },
  {
    title: "Flux Chorus — Visualizer",
    description:
      "Music-driven animation exploring rhythm as character and scene cuts.",
    tags: ["Visualizer", "Music", "Motion Design"],
  },
  {
    title: "Skyward Motel — Short",
    description:
      "An 8-minute noir short above the clouds—strangers trading memories.",
    tags: ["Short", "Noir", "Drama"],
  },
  {
    title: "Pilot Lab — Motion Comic",
    description:
      "Hybrid motion comic pipeline for fast iteration and audience votes.",
    tags: ["Series", "Motion Comic", "Prototype"],
  },
  {
    title: "Backlot BTS — Drops",
    description:
      "Weekly behind-the-scenes: prompts, rigs, paintovers, and breakdowns.",
    tags: ["BTS", "Community", "Process"],
  },
];


