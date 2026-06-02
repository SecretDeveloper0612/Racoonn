"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const destinations = [
  { id: 1, name: 'Nainital', subtitle: 'The lake district surrounded by hills.', price: '₹2,499', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Kedarnath', subtitle: 'A sacred journey to the Himalayas.', price: '₹3,999', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Rishikesh', subtitle: 'Yoga, adventure and spiritual vibes.', price: '₹1,899', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Auli', subtitle: 'Skiing slopes and scenic views.', price: '₹2,799', image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Haridwar', subtitle: 'Where spirituality meets serenity.', price: '₹1,499', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop' },
];

export default function PopularDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 pt-4 pb-4 relative">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 text-brand-coral font-bold text-sm tracking-widest uppercase mb-4">
          <span>EXPLORE UTTARAKHAND</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-heading mb-4">
          Popular destinations in <span className="text-brand-coral">Uttarakhand</span>
        </h2>
        <p className="text-brand-charcoal/70 text-lg max-w-2xl">
          From serene mountains to spiritual towns, explore the best stays and packages in the Devbhoomi.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mb-4 group/carousel">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((dest) => (
            <div key={dest.id} className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 group/card relative rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 snap-start h-[450px]">
              
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
              
              {/* Location Tag (Top Left) */}
              <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <MapPin size={14} className="text-brand-coral" fill="currentColor" />
                <span className="text-sm font-bold text-brand-navy">{dest.name}</span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col gap-4">
                <p className="text-white/90 font-medium text-[16px] leading-snug">{dest.subtitle}</p>
                <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full self-start text-brand-navy font-bold text-sm shadow-lg">
                  Stays from {dest.price}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full hidden lg:flex items-center justify-center shadow-[0_4px_25px_rgb(0,0,0,0.15)] text-brand-charcoal hover:text-brand-coral z-10 border border-brand-sky/20 transition-transform hover:scale-105 opacity-0 group-hover/carousel:opacity-100 duration-300"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-[50%] translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full hidden lg:flex items-center justify-center shadow-[0_4px_25px_rgb(0,0,0,0.15)] text-brand-charcoal hover:text-brand-coral z-10 border border-brand-sky/20 transition-transform hover:scale-105 opacity-0 group-hover/carousel:opacity-100 duration-300"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-white border-2 border-brand-coral text-brand-coral hover:bg-brand-coral hover:text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm flex items-center gap-2">
          View all destinations <ArrowRight size={18} />
        </button>
      </div>

    </section>
  );
}
