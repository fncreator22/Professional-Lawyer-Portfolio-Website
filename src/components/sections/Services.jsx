'use client';

import { motion } from 'framer-motion';
import { Scale, Briefcase, FileText, Users } from 'lucide-react';

const services = [
  {
    title: 'Family Law',
    description: 'Expert guidance in divorce, custody, and family matters with compassionate support.',
    icon: Users,
  },
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes.',
    icon: Briefcase,
  },
  {
    title: 'Criminal Defense',
    description: 'Strong advocacy and defense strategies in criminal cases.',
    icon: Scale,
  },
  {
    title: 'Contract Law',
    description: 'Detailed contract drafting, review, and negotiation services.',
    icon: FileText,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}