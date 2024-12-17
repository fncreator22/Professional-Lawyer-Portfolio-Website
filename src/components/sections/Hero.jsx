'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
        >
          John Doe
          <span className="block text-xl md:text-2xl font-sans font-normal mt-2 text-gray-600">
            Attorney at Law
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Trusted legal expertise with a commitment to justice
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/contact"
            className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
          >
            Schedule a Consultation
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            href="/services"
            className="border border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
