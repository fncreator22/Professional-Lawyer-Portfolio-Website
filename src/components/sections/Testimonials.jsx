'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ade Patel's expertise in constitutional and civil law helped us resolve a long-standing family dispute with great efficiency and understanding.",
    author: "Ramesh Kumar",
    title: "Business Owner"
  },
  {
    quote: "Highly dedicated and professional. They took the time to understand our needs and delivered excellent results in our corporate legal matters.",
    author: "Priya Sharma",
    title: "Founder, GreenTech Solutions"
  },
  {
    quote: "From start to finish, Ade Patel and his team provided expert guidance in our property-related case, ensuring all legalities were handled smoothly.",
    author: "Vikram Singh",
    title: "Property Investor"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients in India have to say about our legal services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 mx-auto mb-8 text-gray-400" />
            <blockquote className="text-2xl text-gray-900 mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="font-semibold text-gray-900">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-gray-600">
              {testimonials[currentIndex].title}
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
