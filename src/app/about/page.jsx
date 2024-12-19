'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Timeline from '@/components/about/Timeline';
import { milestones } from '@/lib/data/milestones';

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Ade Patel</h1>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in various areas of law, Aishwarya Patel has established himself
              as a trusted legal advisor for individuals and businesses in India.
            </p>
            <p className="text-lg text-gray-600">
              His expertise in constitutional law, civil litigation, and family law has earned him recognition in the Indian legal community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3"
              alt="Aishwarya Patel"
              fill
              className="Ade Patel"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        <Timeline milestones={milestones} />
      </div>
    </main>
  );
}
