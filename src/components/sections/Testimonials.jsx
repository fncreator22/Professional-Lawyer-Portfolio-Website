'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import basic Swiper styles
import 'swiper/css/pagination'; // Import pagination styles if used
import 'swiper/css/navigation'; // Import navigation styles if used

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Clients Say</h2>
        
        {/* Swiper container */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Number of slides to show at once (1 for mobile)
          breakpoints={{
            640: {
              slidesPerView: 2, // For tablets and larger screens
            },
            1024: {
              slidesPerView: 3, // For desktops and larger screens
            },
          }}
          loop={true} // Infinite loop effect
          autoplay={{
            delay: 2500, // Delay between each slide
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true, // Enable pagination controls
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="mt-4 text-gray-700 text-center">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
