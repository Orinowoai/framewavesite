import Image from "next/image";

export default function LogoCloud() {
  const logos = ["/next.svg", "/vercel.svg", "/globe.svg", "/window.svg"]; // placeholder assets
  return (
    <div className="container py-10 md:py-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
        {logos.map((src, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <Image src={src} alt="client" width={120} height={24} className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}


