'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <service.icon className="w-12 h-12 text-gray-900 mb-6" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-600">
            <ArrowRight size={16} className="mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}