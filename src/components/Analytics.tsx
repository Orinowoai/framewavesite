"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    _gaInit?: boolean;
  }
}

function AnalyticsInner() {
  const GA = process.env.NEXT_PUBLIC_GA_ID || "G-PLACEHOLDER";
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!GA) return;
    if (!window._gaInit) {
      const s = document.createElement("script");
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA}`;
      s.async = true;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]){ window.dataLayer.push(args); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA, { send_page_view: false });
      window._gaInit = true;
    }
    window.gtag?.("event", "page_view", {
      page_path: pathname + (search?.toString() ? `?${search.toString()}` : ""),
    });
  }, [pathname, search, GA]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
