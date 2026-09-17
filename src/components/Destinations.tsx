import { ArrowUpRight } from 'lucide-react';
import { destinations } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-sand-100">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Wildlife & Wilderness</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-sand-900 sm:text-4xl md:text-5xl">
            A Land of Unrivaled Beauty
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand-600 sm:text-lg">
            From the vast, wildlife-rich plains of the Serengeti to the snow-capped majesty of
            Kilimanjaro — each destination is a unique chapter in the story of the African continent.
          </p>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {destinations.map((dest, i) => (
            <Reveal key={dest.name} variant={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
              <article className="group relative h-80 overflow-hidden rounded-2xl shadow-lg shadow-sand-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-sand-900/20 sm:h-96">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="img-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-950/90 via-sand-950/30 to-transparent" />

                <span className="absolute top-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur-sm">
                  {dest.badge}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white text-shadow-lg">{dest.name}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                    {dest.tagline}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 group-hover:gap-2.5">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
