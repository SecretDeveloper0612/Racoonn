"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { mockHotels } from '@/data/mockHotels';

export default function PopularStays() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { profile, toggleSavedHotel } = useAuthStore();
  const savedHotelIds = profile?.savedHotels || [];

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
          className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockHotels.map((stay) => {
            const isSaved = savedHotelIds.includes(stay.id);
            return (
              <Link href={`/property/${stay.id}`} key={stay.id} className="w-full min-w-full md:w-auto md:min-w-70 shrink-0 bg-white rounded-2xl p-3 shadow-[0_2px_15px_rgb(0,0,0,0.05)] border border-brand-sky/30 group/card cursor-pointer transition-transform hover:-translate-y-1 snap-center md:snap-start block">
                {/* Image */}
                <div className="relative w-full h-45 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={stay.image}
                    alt={stay.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleSavedHotel(stay.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-brand-charcoal hover:text-brand-coral transition-colors"
                  >
                    <Heart size={16} className={isSaved ? "fill-brand-coral text-brand-coral" : ""} />
                  </button>
                </div>

                {/* Info */}
                <div className="px-1 pb-1">
                  <h3 className="font-bold text-brand-navy mb-1">{stay.name}</h3>
                <div className="flex justify-between items-end">
                  <p className="text-sm text-brand-charcoal/60">{stay.location}</p>
                  <div className="flex items-center text-sm font-bold text-brand-coral">
                    <span className="mr-1">★</span> {stay.rating}
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
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
