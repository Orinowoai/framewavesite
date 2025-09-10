/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://framewave.studio",
  generateRobotsTxt: false,
  priority: 0.7,
  changefreq: "weekly",
  exclude: ["/api/*"],
};

