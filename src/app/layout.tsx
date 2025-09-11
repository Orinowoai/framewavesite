import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Open_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/Analytics";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: 'swap',
  preload: true,
});

const openSans = Open_Sans({ 
  subsets: ["latin"], 
  variable: "--font-open-sans",
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://framewave.studio"),
  title: {
    default: "Framewave Studio | Award-Winning Video Production",
    template: "%s | Framewave Studio",
  },
  description: "Award-winning video production company creating compelling brand stories and marketing videos for enterprise clients. Full-service video marketing solutions that drive results.",
  keywords: [
    "video production",
    "brand storytelling",
    "marketing videos",
    "corporate videos",
    "video marketing",
    "professional video production",
    "brand films",
    "commercial video production",
    "video content creation",
    "enterprise video"
  ],
  authors: [{ name: "Framewave Studio" }],
  creator: "Framewave Studio",
  publisher: "Framewave Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Professional Video Production | Framewave Studio",
    description: "Creating compelling video content for brands that demand excellence. Award-winning video production services for enterprise clients.",
    url: "https://framewave.studio",
    siteName: "Framewave Studio",
    images: [
      { 
        url: "/og-image.jpg", 
        width: 1200, 
        height: 630,
        alt: "Framewave Studio - Professional Video Production"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: { 
    card: "summary_large_image",
    title: "Professional Video Production | Framewave Studio",
    description: "Creating compelling video content for brands that demand excellence",
    images: ["/og-image.jpg"],
    creator: "@framewavestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { 
    canonical: "https://framewave.studio" 
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/montserrat.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/open-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFB347" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-neutral-cream text-neutral-charcoal font-open-sans">
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Framewave Studio",
              url: "https://framewave.studio",
              logo: "https://framewave.studio/logo.png",
              description: "Professional video production company specializing in brand storytelling and marketing videos",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Creative Avenue",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90210",
                addressCountry: "US"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-VIDEO-PRO",
                contactType: "customer service",
                email: "hello@framewave.studio"
              },
              sameAs: [
                "https://www.linkedin.com/company/framewave-studio",
                "https://www.instagram.com/framewavestudio",
                "https://www.youtube.com/@framewavestudio"
              ],
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              industry: "Video Production",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 34.0522,
                  longitude: -118.2437
                },
                geoRadius: "50000"
              }
            }),
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://framewave.studio/#organization",
              name: "Framewave Studio",
              image: "https://framewave.studio/logo.png",
              telephone: "+1-555-VIDEO-PRO",
              email: "hello@framewave.studio",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Creative Avenue",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90210",
                addressCountry: "US"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0522,
                longitude: -118.2437
              },
              url: "https://framewave.studio",
              priceRange: "$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Video Production Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Brand Storytelling Videos",
                      description: "Compelling brand narratives that connect with audiences"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Marketing Videos",
                      description: "High-converting videos that drive sales and engagement"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Corporate Videos",
                      description: "Professional documentation and brand films"
                    }
                  }
                ]
              }
            }),
          }}
        />
        
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}