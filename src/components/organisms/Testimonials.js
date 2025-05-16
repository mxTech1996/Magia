import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className='bg-[#f7fefc] py-12 px-6 rounded-xl max-w-3xl mx-auto text-center'>
      <h2 className='text-2xl font-semibold mb-6'>What Our Clients Say</h2>

      <div className='relative overflow-hidden'>
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='px-4'
          >
            <p className='text-gray-700 text-lg mb-4 italic'>
              &ldquo;{testimonials[index].description}&rdquo;
            </p>
            <span className='text-gray-900 font-semibold'>
              {testimonials[index].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={prev}
          className='px-3 py-1 border rounded hover:bg-gray-100 transition'
        >
          Prev
        </button>
        <button
          onClick={next}
          className='px-3 py-1 border rounded hover:bg-gray-100 transition'
        >
          Next
        </button>
      </div>
    </section>
  );
}
