'use client';

import { dataSite } from '@/data';
import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = () => {
    if (validateEmail(email)) {
      alert(`You are subscribed with ${email}`);
    } else {
      alert('Please enter a valid email address.');
    }
  };
  return (
    <section className='bg-white py-16 text-center px-4'>
      <h1 className='text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-4'>
        <span className='relative inline-block'>
          <span className='bg-blue-200 px-2 rounded-md'>
            {dataSite.subtitle}
          </span>
        </span>
      </h1>
      <p className='text-gray-600 max-w-xl mx-auto mb-8'>
        {dataSite.description}
      </p>

      {/* Search Bar */}
      <div className='flex justify-center mb-8'>
        <div className='bg-white border border-gray-300 rounded-md flex overflow-hidden shadow-sm w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Email...'
            //valid email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='flex-1 px-4 py-2 border-none focus:outline-none'
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'email...')}
          />
          <button
            onClick={handleSubmit}
            className='bg-teal-500 text-white px-6 hover:bg-teal-600 transition'
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className='flex justify-center'>
        <img
          src={dataSite.image_hero}
          alt='Documentation illustration'
          className='rounded-lg shadow-md w-full max-w-4xl'
        />
      </div>
    </section>
  );
}
