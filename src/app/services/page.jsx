'use client';

import { motion } from 'framer-motion';
import ServiceCard from 'components/services/ServiceCard';
import { services } from '../../lib/data/services';

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Legal Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to meet your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
