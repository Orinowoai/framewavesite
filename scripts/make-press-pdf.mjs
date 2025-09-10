import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

const pdf = await PDFDocument.create();
const page = pdf.addPage([595.28, 841.89]); // A4
const { width, height } = page.getSize();
const black = rgb(0.043, 0.059, 0.078);
const violet = rgb(0.486, 0.227, 0.929);
const orange = rgb(0.976, 0.451, 0.086);
const white = rgb(0.973, 0.98, 0.988);

const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);
const font = await pdf.embedFont(StandardFonts.Helvetica);

// header bar
page.drawRectangle({ x: 0, y: height - 120, width, height: 120, color: black });

// title
page.drawText("FRAMEWAVE STUDIO — PRESS ONE-PAGER", {
  x: 36, y: height - 70, size: 16, color: white, font: fontBold,
});
page.drawText("AI-powered animation & micro-drama for the mobile era.", {
  x: 36, y: height - 95, size: 11, color: white, font,
});

// sections helper
let y = height - 150;
function section(title, lines) {
  page.drawText(title, { x: 36, y, size: 13, color: violet, font: fontBold });
  y -= 18;
  lines.forEach((l) => {
    page.drawText(`• ${l}`, { x: 44, y, size: 11, color: black, font });
    y -= 14;
  });
  y -= 6;
}

// content
section("WHY NOW", [
  "Mobile-native audiences prefer 30–180s narrative beats.",
  "AI tools compress production time from months to days.",
  "Direct-to-fan subscriptions fund rapid iteration and community IP.",
]);

section("FORMATS", [
  "Micro-dramas (30–120s)",
  "Animated shorts (2–8 min)",
  "Series pilots & motion comics",
  "Music-driven visualizers",
]);

section("RECENT / UPCOMING", [
  "Neon Rebellion — \"Neon never scared… because Neon is a G, yaaa.\"",
  "Peacealova — geo-political sci-fi saga",
  "Weekly BTS and maker prompts",
]);

section("BUSINESS MODEL", [
  "Membership (early access, BTS, votes)",
  "Pay-per-view bundles",
  "Merch & limited posters",
  "Licensing & brand integrations",
]);

page.drawText("Press & partnerships: info@framewave.studio Web: https://framewave.studio", {
  x: 36, y: 60, size: 10, color: orange, font,
});

const bytes = await pdf.save();
const outDir = path.join(process.cwd(), "public", "press");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "framewave_press_one_pager.pdf"), bytes);
console.log("✅ Press PDF created at /public/press/framewave_press_one_pager.pdf");

