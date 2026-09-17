import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Specializations } from '@/components/Specializations';
import { Migration } from '@/components/Migration';
import { Destinations } from '@/components/Destinations';
import { Seasons } from '@/components/Seasons';
import { Stats } from '@/components/Stats';
import { KeyFacts } from '@/components/KeyFacts';
import { CTAFooter } from '@/components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-sand-50">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Migration />
        <Destinations />
        <Seasons />
        <Stats />
        <KeyFacts />
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;
