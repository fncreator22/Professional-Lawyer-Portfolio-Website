'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      {/* Icon */}
      <service.icon className="w-12 h-12 text-gray-900 mb-6" />
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
      {/* Description */}
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      {/* Features List */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600">
              <ArrowRight size={16} className="mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
