'use client';

import FAQs from '@/components/organisms/Faqs';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import IntroSection from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import TestimonialsCarousel from '@/components/organisms/Testimonials';
import { dataSite } from '@/data';
import { Missions, Features } from 'ecommerce-mxtech';
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <div id='services' className='bg-[#f7fefc] py-16 px-4 max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8'>Our Services</h1>

        <Features
          features={dataSite.services}
          title={'Our Services'}
          backgroundColor={'#f7fefc'}
          textColor={'#fff'}
          gridColumns={2}
          variant='background-img'
          brightness={4}
          borderRadius={30}
        />
      </div>
      <ProductsSection />
      <div id='know' className='bg-white py-16 px-4 max-w-7xl mx-auto'>
        {/* know us title */}
        <h1 className='text-4xl font-bold text-center mb-8'>Know Us</h1>

        <Missions
          backgroundColor={'#f7fefc'}
          textColor={'#000'}
          gridColumns={2}
          data={dataSite.info}
        />
      </div>
      <FAQs />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
