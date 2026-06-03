"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const dehradunStays = [
  {
    id: 'd1',
    title: 'The Solitaire',
    location: 'Haridwar Bypass, Dehradun',
    details: 'Premium stay with pool and fine dining',
    price: '₹6,500',
    rating: '4.5',
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd2',
    title: 'Regenta LP Vilas',
    location: 'Nanda Ki Chowki, Dehradun',
    details: 'Luxury heritage hotel featuring royal architecture',
    price: '₹8,200',
    rating: '4.8',
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd3',
    title: 'Seyfert Sarovar Premiere',
    location: 'ISBT, Dehradun',
    details: 'Modern upscale stay in the heart of the city',
    price: '₹7,500',
    rating: '4.6',
    reviews: 290,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd4',
    title: 'Ramada by Wyndham',
    location: 'Chakrata Road, Dehradun',
    details: 'Comfortable stay with stunning city views',
    price: '₹9,500',
    rating: '4.7',
    reviews: 455,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd5',
    title: 'Vishranti A Doon Valley Retreat',
    location: 'Prem Nagar, Dehradun',
    details: 'Exclusive jungle resort away from the hustle',
    price: '₹14,000',
    rating: '4.9',
    reviews: 150,
    image: 'https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=800&auto=format&fit=crop',
  }
];

export default function PopularStaysDehradun() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 relative group">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy font-heading">Popular Stays in Dehradun</h2>
          <p className="text-gray-500 mt-1">Experience the best retreats and heritage stays in the Doon Valley.</p>
        </div>
        <Link href="/search" className="text-brand-coral font-medium flex items-center hover:underline whitespace-nowrap">
          View all <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Cards Container */}
      <div className="relative mb-8 group/carousel">
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-4"
        >
          {dehradunStays.slice(0, 4).map((stay) => (
            <Link href={`/property/${stay.id}`} key={stay.id} className="w-full group/card cursor-pointer block">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-gray-200">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 text-white hover:scale-110 transition-transform z-10">
                  <Heart 
                    size={24} 
                    className="fill-black/30 text-white" 
                    strokeWidth={2}
                  />
                </button>
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-[15px] text-gray-900 truncate pr-2">{stay.title}</h3>
                  <div className="flex items-center gap-1 text-[14px] font-medium shrink-0">
                    <Star size={13} className="fill-gray-900 text-gray-900" />
                    {stay.rating} <span className="text-gray-500 font-normal">({stay.reviews})</span>
                  </div>
                </div>
                <p className="text-[14px] text-gray-500 truncate mt-0.5">{stay.location}</p>
                <p className="text-[14px] text-gray-500 truncate">{stay.details}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-[15px] font-semibold text-gray-900">{stay.price}</span>
                  <span className="text-[14px] text-gray-900">per night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
