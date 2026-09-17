import { ChevronDown, MapPin } from 'lucide-react';
import { heroImage } from '@/data/content';

export function Hero() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elephants walking through the African savanna at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 flex flex-col items-center text-center pt-20">
        <div className="animate-fade-down mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <MapPin className="h-4 w-4 text-accent-400" />
          <span className="text-sm font-medium text-white/90 tracking-wide">Tanzania, East Africa</span>
        </div>

        <h1
          className="animate-fade-up text-4xl font-bold leading-tight text-white text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: '0.15s', opacity: 0 }}
        >
          Welcome to Your
          <br />
          <span className="text-gradient-gold">Extraordinary Safari</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/85 text-shadow-lg sm:text-lg md:text-xl"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Bespoke adventures through Tanzania's breathtaking landscapes and vibrant cultures —
          meticulously crafted to suit your unique desires.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          <a href="#experiences" onClick={(e) => { e.preventDefault(); document.querySelector('#experiences')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            Explore Experiences
          </a>
          <a href="#about" onClick={handleScroll} className="btn-outline">
            Discover Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-wide-lg">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-white/70" />
        </span>
        <ChevronDown className="h-4 w-4 animate-float" />
      </button>
    </section>
  );
}
