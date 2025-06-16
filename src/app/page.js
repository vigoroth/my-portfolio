// app/page.js

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import SectionSeparator from '@/components/SectionSeparator'; // 1. Import the new component

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionSeparator /> {/* --- Added Separator --- */}
      <Experience />
      <SectionSeparator /> {/* --- Added Separator --- */}
      <Education />
      <SectionSeparator /> {/* --- Added Separator --- */}
      <Skills />
      <SectionSeparator /> {/* --- Added Separator --- */}
      <Portfolio />
      <Contact />
    </>
  );
}