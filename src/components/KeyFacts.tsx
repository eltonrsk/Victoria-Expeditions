import { CalendarCheck } from 'lucide-react';
import { keyFacts } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function KeyFacts() {
  return (
    <section id="facts" className="section-padding bg-sand-50">
      <div className="container-wide">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Travel Essentials</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-sand-900 sm:text-4xl md:text-5xl">
            {keyFacts.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand-600 sm:text-lg">
            {keyFacts.subtitle}
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        {/* Facts grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {keyFacts.facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <Reveal key={fact.label} variant="up" delay={i * 70}>
                <div className="group h-full rounded-xl border border-sand-200/70 bg-white p-5 transition-all duration-400 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/5 hover:-translate-y-1">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide-lg text-sand-500">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-sand-900">
                    {fact.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Best time to visit banner */}
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-900 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white/15 text-accent-400 ring-1 ring-white/20">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {keyFacts.bestTimeToVisit.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80 sm:text-base">
                {keyFacts.bestTimeToVisit.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
