'use client';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function StickyWhiteNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 bg-white shadow-sm z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-3'>
        {/* Logo */}
        <div className='flex items-center'>
          <span className='text-2xl font-semibold'>
            <span className='text-teal-500'>Ma</span>gia
          </span>
        </div>

        {/* Navigation Links */}
        <nav className='flex items-center gap-6 text-sm font-semibold'>
          <a href='/' className='hover:text-teal-500'>
            Home
          </a>
          <a href='/#products' className='hover:text-teal-500'>
            Products
          </a>
          <a href='/#services' className='hover:text-teal-500'>
            Services
          </a>
          <a href='/#know' className='hover:text-teal-500'>
            Know Us
          </a>
        </nav>

        {/* Actions */}
        <div className='flex items-center gap-4'>
          <Link href='/my-cart' className='relative'>
            <FaShoppingCart className='text-2xl text-teal-500' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
              {products.length}
            </span>
          </Link>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='border border-teal-500 text-teal-500 px-4 py-1 rounded-md hover:bg-teal-500 hover:text-white transition'
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
