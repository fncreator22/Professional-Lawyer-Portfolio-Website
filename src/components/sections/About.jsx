'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">About John Doe</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in various areas of law, John Doe has established himself
              as a trusted legal advisor for individuals and businesses alike.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              His commitment to justice and client advocacy has earned him recognition among peers
              and numerous accolades in the legal community.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3"
              alt="John Doe"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}