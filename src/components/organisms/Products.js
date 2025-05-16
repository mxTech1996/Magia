'use client';

import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

export default function ProductsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const posts = dataSite.products;
  return (
    <section id='products' className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs'>
          Our Products
        </span>
        <h2 className='text-4xl font-bold mt-4 mb-4'>
          Read the Latest in Management Consulting
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Explore our products and services designed to enhance your business
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {posts.map((post, index) => {
          const isInCart = validateProductInCart(post.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(post.id);
          };
          return (
            <div
              key={index}
              className='bg-white rounded-lg shadow overflow-hidden'
            >
              <img
                src={post.image}
                alt={post.name}
                className='w-full h-60 object-cover'
              />
              <div className='p-6'>
                <span className='inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs mb-2'>
                  $ {post.price}
                </span>
                <h3 className='text-lg font-semibold mb-2'>{post.name}</h3>
                <p className='text-gray-600 mb-4'>
                  {post.description.slice(0, 140)}...
                </p>
                <button
                  onClick={handleClick}
                  className={`${
                    isInCart
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  } px-4 py-2 rounded-md hover:bg-green-600 transition`}
                  href={post.link}
                  //   className='text-green-600 font-medium hover:underline'
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
