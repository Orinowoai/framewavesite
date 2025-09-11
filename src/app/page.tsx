import Link from "next/link";
import { ChevronRightIcon, CheckIcon, StarIcon, PlayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function LandingPage() {
  const services = [
    {
      icon: "🎬",
      title: "Brand Storytelling",
      description: "Compelling narratives that connect with your audience and build emotional connections.",
      benefit: "Higher brand affinity",
      accentColor: "bg-red-500"
    },
    {
      icon: "📈",
      title: "Marketing Videos",
      description: "High-converting videos that drive sales, leads, and measurable business results.",
      benefit: "Increased conversions",
      accentColor: "bg-orange-500"
    },
    {
      icon: "🏢",
      title: "Corporate Videos",
      description: "Professional documentation, training videos, and internal communications.",
      benefit: "Enhanced credibility",
      accentColor: "bg-blue-500"
    },
    {
      icon: "🎨",
      title: "Animation & Motion Graphics",
      description: "Complex concepts made clear with professional animation and visual effects.",
      benefit: "Clear communication",
      accentColor: "bg-green-500"
    },
    {
      icon: "📱",
      title: "Social Media Content",
      description: "Platform-optimized content designed for maximum engagement and reach.",
      benefit: "Viral potential",
      accentColor: "bg-purple-500"
    },
    {
      icon: "🎯",
      title: "Event Coverage",
      description: "Professional documentation of conferences, product launches, and special events.",
      benefit: "Lasting memories",
      accentColor: "bg-yellow-500"
    }
  ];

  const testimonials = [
    {
      quote: "Framewave Studio increased our video engagement by 340% and generated $2.3M in additional revenue through their strategic video marketing approach.",
      author: "Sarah Chen",
      role: "VP Marketing, Nexus Digital Solutions",
      rating: 5
    },
    {
      quote: "The quality of their work is exceptional. They transformed our brand story into something truly compelling that resonates with our customers.",
      author: "Marcus Rodriguez",
      role: "Creative Director, Summit Capital Advisors",
      rating: 5
    },
    {
      quote: "Working with Framewave was seamless from start to finish. They delivered exactly what we needed, on time and within budget.",
      author: "Alex Kim",
      role: "Marketing Manager, Meridian Health Partners",
      rating: 5
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Storytelling Campaign",
      client: "Nexus Digital Solutions",
      category: "Brand Videos",
      results: "340% engagement increase"
    },
    {
      id: 2,
      title: "Product Launch Video",
      client: "Summit Capital Advisors",
      category: "Marketing",
      results: "$2.3M revenue generated"
    },
    {
      id: 3,
      title: "Corporate Training Series",
      client: "Meridian Health Partners",
      category: "Corporate",
      results: "98% completion rate"
    }
  ];

  const stats = [
    { number: "500+", label: "Videos Produced" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Client Revenue Generated" },
    { number: "15+", label: "Industry Awards" }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most projects are completed within 4-8 weeks, depending on complexity. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you work with clients outside of Los Angeles?",
      answer: "Yes! We work with clients worldwide. We can travel for shoots or work remotely, depending on your project needs. Many of our clients are based outside of California."
    },
    {
      question: "What is included in your video production services?",
      answer: "Our full-service approach includes concept development, scriptwriting, filming, editing, motion graphics, color correction, sound design, and final delivery in all required formats."
    },
    {
      question: "How do you ensure brand consistency?",
      answer: "We work closely with your brand guidelines and marketing team to ensure every video aligns with your brand voice, visual identity, and messaging strategy."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 via-orange-100/20 to-yellow-100/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-sm font-semibold mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                Award-Winning Video Production Studio
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We Turn Your{" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Brand Story
                </span>{" "}
                Into Compelling Videos
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Award-winning video production that drives results. From concept to delivery, we create videos that captivate audiences and grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="mailto:hello@framewave.studio?subject=Free Strategy Call - Framewave Studio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get Free Strategy Call
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
                
                <Link 
                  href="/work" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  View Our Portfolio
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 text-gray-600 text-sm">
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                  24/7 support
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                  Guaranteed results
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <PlayIcon className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-gray-900 font-semibold">Watch Our Work</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
              {["StreamVault Media", "Magical Moments Studios", "Premier Entertainment Group", "Horizon Film Studios", "Nexus Digital Solutions", "Summit Capital Advisors"].map((brand) => (
                <div key={brand} className="text-gray-800 font-semibold text-sm text-center">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Full-Service Video Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From brand storytelling to marketing campaigns, we deliver video content that drives measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${service.accentColor} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-orange-500 text-sm font-semibold">{service.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Work That Drives Results
            </h2>
            <p className="text-xl text-gray-600">
              See how we&apos;ve helped brands achieve their goals through compelling video content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                    <PlayIcon className="w-6 h-6 text-orange-500 ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.client}</p>
                <div className="text-green-500 text-sm font-semibold">{item.results}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/work" className="inline-flex items-center px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200">
              View All Projects
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-orange-500">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-900 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 mt-1">*Fictional testimonial for demonstration</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Compelling Video Content?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create videos that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="mailto:hello@framewave.studio?subject=Free Strategy Call - Framewave Studio"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Free Strategy Call
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <Link 
              href="/work" 
              className="text-blue-500 hover:text-orange-500 font-semibold text-lg transition-colors"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-600 text-center max-w-4xl mx-auto">
            This portfolio contains both real client work (used with permission) and fictional concept projects. All fictional companies and testimonials are created solely for demonstration purposes and do not represent actual clients or endorsements. Any resemblance to actual companies is purely coincidental.
          </p>
        </div>
      </section>
    </main>
  );
}