import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const pressKitPath = path.join(publicDir, "press-kit.pdf");

if (!fs.existsSync(pressKitPath)) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  const black = rgb(0.043, 0.059, 0.078);
  const accent = rgb(0.976, 0.451, 0.086);
  const white = rgb(0.973, 0.98, 0.988);

  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const font = await pdf.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: height - 140, width, height: 140, color: black });
  page.drawText("FRAMEWAVE STUDIO — PRESS KIT", { x: 36, y: height - 80, size: 18, color: white, font: fontBold });
  page.drawText("Cinematic stories for the mobile era.", { x: 36, y: height - 105, size: 12, color: white, font });

  let y = height - 170;
  const lines = [
    "AI-first animation studio making micro-drama, shorts, and pilots.",
    "Direct-to-fan drops, BTS, and worldbuilding in public.",
    "Press & partnerships: info@framewave.studio",
    "Web: https://framewave.studio",
  ];
  lines.forEach((l) => {
    page.drawText(`• ${l}`, { x: 44, y, size: 11, color: black, font });
    y -= 16;
  });

  page.drawText("Generated placeholder — replace with your designed PDF.", { x: 36, y: 60, size: 10, color: accent, font });

  const bytes = await pdf.save();
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(pressKitPath, bytes);
  console.log("✅ Press kit created at /public/press-kit.pdf");
} else {
  console.log("ℹ️ Using existing /public/press-kit.pdf");
}

