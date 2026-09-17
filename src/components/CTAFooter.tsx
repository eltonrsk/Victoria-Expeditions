import { Mail, Phone, MapPin, Compass, Send } from 'lucide-react';
import { ctaContent, navLinks } from '@/data/content';
import { Reveal } from '@/components/Reveal';

const footerLinks = {
  Explore: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Destinations', href: '#destinations' },
  ],
  Service: [
    { label: 'Private Safaris', href: '#experiences' },
    { label: 'Kilimanjaro Treks', href: '#experiences' },
    { label: 'Zanzibar Retreats', href: '#experiences' },
    { label: 'Photography Tours', href: '#experiences' },
  ],
};

const contactInfo = [
  { icon: MapPin, label: 'Seth Benjamin road, Silk club Building, PO. Box 14875, 23102, Tanzania, East Africa' },
  { icon: Phone, label: '+255 754 479 990' },
  { icon: Phone, label: '+255 767 288 740' },
  { icon: Mail, label: 'info@victoriaexpeditions.com' },
];

export function CTAFooter() {
  return (
    <>
      {/* CTA section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ctaContent.image}
            alt="Elephants at sunset in the African savanna"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sand-950/80 via-sand-950/65 to-sand-950/85" />
        </div>

        <div className="container-wide relative z-10 section-padding">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-accent-400">Begin Your Journey</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
              {ctaContent.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 text-shadow-lg sm:text-lg">
              {ctaContent.subtitle}
            </p>

            {/* Form */}
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 backdrop-blur-md outline-none transition-all duration-300 focus:border-accent-400/60 focus:bg-white/15"
              />
              <button type="submit" className="btn-primary flex-none">
                <Send className="h-4 w-4" />
                Get Started
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">
              No spam — just expert safari insights and tailored itineraries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sand-950 pt-16 pb-8">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="h-12"
                  style={{
                    width: 160,
                    backgroundColor: '#E19926',
                    WebkitMaskImage: 'url(/assets/new%20V-logos/victoria%20dark%20BG%20logo.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'left center',
                    maskImage: 'url(/assets/new%20V-logos/victoria%20dark%20BG%20logo.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                  }}
                />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-400">
                Unrivaled private safaris, Kilimanjaro treks, and Zanzibar retreats. Experience the
                pinnacle of African exploration with custodians of a rich tradition.
              </p>
              <div className="mt-6 space-y-2.5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-sand-400">
                      <Icon className="h-4 w-4 flex-none text-primary-500" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide-lg text-white">
                Explore
              </h4>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.Explore.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-sand-400 transition-colors hover:text-primary-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide-lg text-white">
                Service
              </h4>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.Service.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-sand-400 transition-colors hover:text-primary-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide-lg text-white">
                Quick Navigation
              </h4>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-sand-400 transition-colors hover:text-primary-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-xs text-sand-500">
                2026 Victoria Expeditions. All rights reserved.
              </p>
              <p className="text-xs text-sand-500">
                Crafted with passion for the wild.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
