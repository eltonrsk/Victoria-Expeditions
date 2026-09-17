import { ArrowUpRight } from 'lucide-react';
import { specializations } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Specializations() {
  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Specializations</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-sand-900 sm:text-4xl md:text-5xl">
            The Pillars of African Exploration
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand-600 sm:text-lg">
            Curated for the extraordinary. Each journey is a chapter — choose your adventure or
            combine them into an unforgettable expedition.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        {/* Cards grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={spec.title} variant="up" delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-2xl bg-sand-50 shadow-lg shadow-sand-900/5 ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-2xl hover:shadow-sand-900/15 hover:-translate-y-1.5">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="img-zoom h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sand-950/70 via-sand-950/10 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide-lg text-primary-700 backdrop-blur-sm">
                      {spec.label}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600/10 text-primary-700 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-sand-900">{spec.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-sand-600">
                      {spec.description}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-all duration-300 hover:gap-2 hover:text-primary-700">
                      Learn More
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
