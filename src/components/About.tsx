import { Check } from 'lucide-react';
import { aboutContent } from '@/data/content';
import { Reveal } from '@/components/Reveal';

const highlights = [
  'Safe, authentic, and transformative journeys',
  'Veteran guides with deep local knowledge',
  'Tailored itineraries for every traveller',
];

export function About() {
  return (
    <section id="about" className="section-padding bg-sand-50">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal variant="left" className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-sand-900/20">
              <img
                src={aboutContent.image}
                alt="Maasai cultural experience in Tanzania"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-44 overflow-hidden rounded-xl border-4 border-sand-50 shadow-xl sm:w-56 lg:-right-8">
              <img
                src={aboutContent.secondaryImage}
                alt="Maasai people in traditional attire"
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-2xl bg-primary-500/10 lg:-left-8 lg:-top-8 lg:h-40 lg:w-40" />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal variant="right">
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-sand-900 sm:text-4xl md:text-5xl">
            {aboutContent.title}
          </h2>
          <div className="divider-gold mt-6" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-sand-700 sm:text-lg">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-secondary-500/15 text-secondary-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-medium text-sand-800">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a href="#experiences" className="btn-ghost">
              View Our Experiences
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
