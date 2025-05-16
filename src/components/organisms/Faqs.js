import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What types of consulting services do you offer?',
    answer:
      'We specialize in administrative consulting for business operations, workflow optimization, and organizational development for companies in various industries.',
  },
  {
    question: 'How can your consulting services improve my business?',
    answer:
      'Our services help streamline your processes, enhance productivity, and implement best practices to achieve long-term operational efficiency and business growth.',
  },
  {
    question: 'Do you provide custom strategies for each client?',
    answer:
      'Absolutely. We tailor our consulting solutions to fit the specific needs, structure, and goals of each organization we work with.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-4xl mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold mb-4'>
        Popular Questions About Our Consulting Services
      </h2>
      <p className='text-gray-600 mb-8'>
        Here are some common questions about our administrative consulting
        services.
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className='border-b py-4 bg-[#f7fefc]'>
          <button
            onClick={() => toggle(index)}
            className='flex justify-between items-center w-full text-left text-lg font-semibold'
          >
            {faq.question}
            <FaChevronDown
              className={`transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key='content'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden mt-2 text-gray-600'
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
