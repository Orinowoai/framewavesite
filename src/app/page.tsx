import Link from "next/link";
import { ChevronRightIcon, PlayIcon, CheckIcon, StarIcon } from "@heroicons/react/24/solid";

export default function LandingPage() {
  const features = [
    {
      icon: "🎬",
      title: "Micro-Drama Series",
      description: "30-120 second cinematic stories engineered for vertical screens and social feeds.",
      benefit: "Higher engagement rates"
    },
    {
      icon: "🚀",
      title: "AI-Powered Production",
      description: "Human direction meets generative tools for faster, bolder creative output.",
      benefit: "10x faster production"
    },
    {
      icon: "👥",
      title: "Direct-to-Fan Platform",
      description: "Membership tiers, exclusive drops, and community-driven content decisions.",
      benefit: "Sustainable revenue"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Every frame optimized for the scroll, swipe, and share generation.",
      benefit: "Native social experience"
    }
  ];

  const testimonials = [
    {
      quote: "Framewave redefined what's possible in mobile storytelling. Our engagement rates increased 340%.",
      author: "Sarah Chen",
      role: "Creative Director, Global Brand",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "Finally, content that feels native to the feed. Our audience can't get enough.",
      author: "Marcus Rodriguez",
      role: "Head of Social, Publisher",
      avatar: "MR",
      rating: 5
    },
    {
      quote: "The AI integration is seamless. We're producing 10x more content with the same team.",
      author: "Alex Kim",
      role: "Production Manager, Studio",
      avatar: "AK",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does the AI-powered production work?",
      answer: "Our proprietary AI tools handle technical production while human directors focus on creative vision. This hybrid approach delivers cinematic quality at social media speed."
    },
    {
      question: "What platforms do you support?",
      answer: "We optimize for TikTok, Instagram Reels, YouTube Shorts, and emerging vertical video platforms. Content is automatically formatted for each platform's specifications."
    },
    {
      question: "How much does it cost to get started?",
      answer: "We offer flexible pricing starting at $2,999/month for small teams, with enterprise solutions available. Contact us for a custom quote based on your content needs."
    },
    {
      question: "Can I maintain creative control?",
      answer: "Absolutely. Our AI handles the technical heavy lifting while you maintain full creative direction. Every piece goes through human review and approval."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              AI-First Animation Studio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Cinematic stories for the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                mobile era
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Weekly drops, bold worlds, direct-to-fan. Human direction + generative tools—crafted for the scroll.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/catalog" 
                className="group bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold px-8 py-4 rounded-xl text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
              >
                Watch the Catalog
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/press" 
                className="group border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Press Kit
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-slate-400 text-sm">
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                24/7 support
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-8">Trusted by leading brands</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["Netflix", "Disney", "Warner Bros", "Universal"].map((brand) => (
                <div key={brand} className="text-2xl font-bold text-white/40">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why choose Framewave?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge AI with human creativity to deliver content that performs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 text-sm font-semibold">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              What our clients say
            </h2>
            <p className="text-xl text-slate-300">
              Real results from real brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-slate-300 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to revolutionize your content?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the future of mobile storytelling. Start your first project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold px-8 py-4 rounded-xl text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center"
            >
              Start Your Project
              <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/catalog" 
              className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors"
            >
              View our work →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about working with us
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Framewave Studio",
            url: "https://framewave.studio",
            description: "AI-powered animation studio creating cinematic stories for the mobile era",
            sameAs: [
              "https://tiktok.com/@framewave.studio"
            ],
            logo: "https://framewave.studio/og.png",
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@framewave.studio",
              contactType: "customer service"
            },
            offers: {
              "@type": "Offer",
              description: "AI-powered animation and micro-drama production services",
              priceRange: "$2999+"
            }
          }),
        }}
      />
    </main>
  );
}