import { seasons } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Seasons() {
  return (
    <section id="seasons" className="section-padding bg-white">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">When to Visit</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-sand-900 sm:text-4xl md:text-5xl">
            Why Visit Tanzania
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand-600 sm:text-lg">
            Every season paints a different portrait of the wild. Here's what awaits throughout the
            year.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season, i) => (
            <Reveal key={season.title} variant="up" delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-sand-50 shadow-lg shadow-sand-900/5 ring-1 ring-sand-200/60 transition-all duration-500 hover:shadow-xl hover:shadow-sand-900/10 hover:-translate-y-1.5">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={season.image}
                    alt={season.title}
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sand-950/80 via-sand-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wide-lg text-white">
                    {season.label}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-sand-900">{season.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-600">
                    {season.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
