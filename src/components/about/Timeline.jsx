'use client';

import { motion } from 'framer-motion';

export default function Timeline({ milestones }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 md:text-right">
              <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-900" />
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
