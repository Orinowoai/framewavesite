import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Brand Storytelling', href: '/services#brand-storytelling' },
      { name: 'Marketing Videos', href: '/services#marketing-videos' },
      { name: 'Corporate Videos', href: '/services#corporate-videos' },
      { name: 'Animation & Motion Graphics', href: '/services#animation' },
      { name: 'Social Media Content', href: '/services#social-media' },
      { name: 'Event Coverage', href: '/services#event-coverage' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/work' },
      { name: 'Process', href: '/process' },
      { name: 'Contact', href: '/contact' },
      { name: 'Press Kit', href: '/press' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/framewave-studio', icon: 'LinkedIn' },
    { name: 'Instagram', href: 'https://www.instagram.com/framewavestudio', icon: 'Instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@framewavestudio', icon: 'YouTube' },
    { name: 'Twitter', href: 'https://twitter.com/framewavestudio', icon: 'Twitter' }
  ];

  return (
    <footer className="bg-neutral-charcoal text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image 
                src="/logo.svg" 
                alt="Framewave Studio" 
                width={200} 
                height={50} 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-light text-sm leading-relaxed mb-6">
              Award-winning video production company creating compelling brand stories and marketing videos for enterprise clients.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-light">123 Creative Avenue</p>
              <p className="text-neutral-light">Los Angeles, CA 90210</p>
              <p className="text-neutral-light">+1 (555) VIDEO-PRO</p>
              <a 
                href="mailto:hello@framewave.studio" 
                className="text-primary-orange hover:text-primary-yellow transition-colors"
              >
                hello@framewave.studio
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-light hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-light hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-light hover:text-primary-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-montserrat font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-light/10 hover:bg-primary-orange/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold">{social.icon[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-light/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-light">
              © {currentYear} Framewave Studio. All rights reserved.
            </div>
            
            <div className="text-xs text-neutral-light text-center max-w-2xl">
              This portfolio contains both real client work (used with permission) and fictional concept projects. 
              All fictional companies and testimonials are created solely for demonstration purposes and do not represent actual clients or endorsements.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
