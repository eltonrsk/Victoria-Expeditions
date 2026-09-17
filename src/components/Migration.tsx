import { ArrowRight } from 'lucide-react';
import { migrationContent, whyTanzania } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Migration() {
  return (
    <>
      {/* Full-bleed banner */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={migrationContent.bgImage}
            alt="Wildebeest crossing a river during the great migration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 section-overlay" />
        </div>

        <div className="container-wide relative z-10">
          <Reveal variant="up" className="max-w-3xl">
            <span className="eyebrow text-accent-400">The Great Migration</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
              {migrationContent.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 text-shadow-lg sm:text-lg md:text-xl">
              {migrationContent.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Beyond the legendary path of the Great Migration lies the Ngorongoro Crater — the
              world's largest intact caldera — and untouched, hidden wilderness.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three feature cards */}
      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {migrationContent.cards.map((card, i) => (
              <Reveal key={card.title} variant="up" delay={i * 120}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-sand-900/5 ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-xl hover:shadow-sand-900/10 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="img-zoom h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sand-950/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-sand-900">{card.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-sand-600">
                      {card.description}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-all duration-300 hover:gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Why Tanzania strip */}
          <Reveal variant="up" className="mt-16">
            <div className="rounded-2xl bg-gradient-to-r from-secondary-800 to-secondary-900 p-8 text-center sm:p-12">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">{whyTanzania.title}</h3>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
                {whyTanzania.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
                {whyTanzania.highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.text}
                      className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-sm"
                    >
                      <Icon className="h-4 w-4 text-accent-400" />
                      <span className="text-sm font-medium text-white">{h.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
