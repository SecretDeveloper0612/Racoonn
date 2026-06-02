"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react';

const stays = [
  {
    id: 1,
    title: 'Cozy Cabin',
    location: 'Manali, India',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop', // placeholder
  },
  {
    id: 2,
    title: 'Beach House',
    location: 'Maldives',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600&auto=format&fit=crop', // placeholder
  },
  {
    id: 3,
    title: 'Sea View Villa',
    location: 'Santorini, Greece',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop', // placeholder
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    location: 'Swiss Alps',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600&auto=format&fit=crop', // placeholder
  },
  {
    id: 5,
    title: 'Heritage Palace',
    location: 'Udaipur, India',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=600&auto=format&fit=crop', // placeholder
  }
];

export default function PopularStays() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 relative group">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-brand-navy font-heading">Explore popular stays</h2>
        <Link href="/search" className="text-brand-coral font-medium flex items-center hover:underline">
          View all <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Cards Container */}
      <div className="relative mb-8 group/carousel">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stays.map((stay) => (
            <div key={stay.id} className="min-w-[260px] md:min-w-[280px] flex-shrink-0 bg-white rounded-2xl p-3 shadow-[0_2px_15px_rgb(0,0,0,0.05)] border border-brand-sky/30 group/card cursor-pointer transition-transform hover:-translate-y-1 snap-start">
              {/* Image */}
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-brand-charcoal hover:text-brand-coral transition-colors">
                  <Heart size={16} />
                </button>
              </div>

              {/* Info */}
              <div className="px-1 pb-1">
                <h3 className="font-bold text-brand-navy mb-1">{stay.title}</h3>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-brand-charcoal/60">{stay.location}</p>
                  <div className="flex items-center text-sm font-bold text-brand-coral">
                    <span className="mr-1">★</span> {stay.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-[40%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full hidden md:flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.15)] text-brand-charcoal hover:text-brand-coral z-10 border border-brand-sky/30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-[40%] translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full hidden md:flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.15)] text-brand-charcoal hover:text-brand-coral z-10 border border-brand-sky/30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
