'use client';

import Hero from 'components/sections/Hero';
import Services from 'components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import About from 'components/sections/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </main>
  );
}