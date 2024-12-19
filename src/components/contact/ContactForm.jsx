'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email format.';
    if (formData.phone && !/^\d+$/.test(formData.phone))
      newErrors.phone = 'Phone number must be numeric.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      {isSubmitted ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600">
            We have received your message and will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-lg font-medium text-gray-800">Contact Information</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-describedby={errors.name && 'name-error'}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-describedby={errors.email && 'email-error'}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-describedby={errors.phone && 'phone-error'}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'
              }`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              aria-describedby={errors.message && 'message-error'}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 ${
                errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-gray-900'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message
                <Send size={16} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
