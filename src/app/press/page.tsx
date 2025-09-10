export default function PressPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl md:text-4xl font-black">Press</h1>
      <p className="text-white/70 mt-2">Press kit and media resources.</p>
      <div className="mt-8">
        <a 
          href="/press/framewave_press_one_pager.pdf" 
          className="inline-block rounded-md bg-[#F97316] text-black font-semibold px-4 py-2 hover:bg-[#F97316]/90 transition"
          download
        >
          Download Press Kit (PDF)
        </a>
      </div>
    </div>
  );
}
