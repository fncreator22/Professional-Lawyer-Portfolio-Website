'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import { testimonials } from '@/lib/data/testimonials'; // Import the testimonials data

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
