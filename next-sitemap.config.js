/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://framewave.studio",
  generateRobotsTxt: true,
  outDir: "public",
  priority: 0.7,
  changefreq: "weekly",
  exclude: ["/api/*"],
};

