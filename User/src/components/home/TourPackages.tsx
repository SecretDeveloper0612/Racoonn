'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Heart, 
  Clock, 
  Utensils, 
  LayoutGrid, 
  Mountain, 
  Tent, 
  Palmtree, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { packages } from '@/data/packages';
const filters = [
  { id: 'all', label: 'All Packages', icon: LayoutGrid },
  { id: 'uttarakhand', label: 'Uttarakhand', icon: Mountain },
  { id: 'himachal', label: 'Himachal', icon: Tent },
  { id: 'weekend', label: 'Weekend Getaways', icon: Palmtree },
  { id: 'international', label: 'International', icon: Globe },
];

function TourCard({ pkg }: { pkg: typeof packages[0] }) {
  return (
    <div 
      className="w-full min-w-full md:min-w-0 md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-center md:snap-start bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden group/card hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col transform-gpu"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden group/image">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:scale-50 [&_.swiper-button-prev]:scale-50 [&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 group-hover/image:[&_.swiper-button-next]:opacity-100 group-hover/image:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-opacity [&_.swiper-button-prev]:transition-opacity [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-white"
        >
          {pkg.images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt={`${pkg.title} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Top Left Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm z-10 pointer-events-none">
          <span className={pkg.badgeColor}>{pkg.badge}</span>
        </div>
        
        {/* Top Right Heart */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-coral shadow-sm hover:scale-110 transition-transform transform-gpu z-10">
          <Heart size={16} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-brand-navy text-[17px] mb-1.5">{pkg.title}</h3>
        
        <div className="flex items-center gap-1 text-gray-500 mb-4">
          <MapPin size={14} className="text-brand-coral" />
          <span className="text-xs font-medium">{pkg.location}</span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={14} />
            <span className="text-xs font-medium">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Utensils size={14} />
            <span className="text-xs font-medium">{pkg.features}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-100 my-4" />

        {/* Bottom Row */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-[10px] text-gray-500 font-medium mb-0.5">Starting from</p>
            <p className="font-bold text-brand-coral text-lg">{pkg.price}</p>
          </div>
          <Link 
            href={`/packages/${pkg.id}`}
            className="bg-brand-coral hover:bg-brand-coral/90 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default function TourPackages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth + 40 : current.offsetWidth - 40;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 pt-10 pb-16 relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 text-brand-coral font-bold text-sm tracking-widest uppercase mb-4">
          <span>CURATED FOR YOU</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-heading mb-4">
          Best <span className="text-brand-coral">Tour Packages</span>
        </h2>
        <p className="text-brand-charcoal/70 text-lg max-w-2xl">
          Discover handpicked tour packages that promise an unforgettable journey through the mountains.
        </p>
      </div>

      {/* Filter & Navigation Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        
        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar w-full md:w-auto pb-2 md:pb-0">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap font-medium text-sm transition-all ${
                  isActive 
                    ? 'bg-brand-coral text-white shadow-md' 
                    : 'bg-white text-brand-navy border border-gray-200 hover:border-brand-coral hover:text-brand-coral'
                }`}
              >
                <Icon size={16} />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Navigation Arrows (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-coral hover:text-white hover:border-brand-coral transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-coral hover:text-white hover:border-brand-coral transition-colors shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative group/carousel">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 snap-x snap-mandatory pb-8"
        >
          {packages.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
      
      {/* View All Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-white border-2 border-brand-coral text-brand-coral hover:bg-brand-coral hover:text-white px-8 py-3 rounded-full font-bold transition-colors shadow-sm flex items-center gap-2">
          View all packages <ArrowRight size={18} />
        </button>
      </div>
      
    </section>
  );
}
