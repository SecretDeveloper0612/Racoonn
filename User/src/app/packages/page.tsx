"use client"

import Image from 'next/image';
import { useState } from 'react';
import { packages } from '@/data/packages';
import TourCard from '@/components/packages/TourCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PackagesPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const filters = [
    'Price', 'Duration', 'Uttarakhand', 'Himachal', 'Goa', 'International', 'Bestseller', 'Trending', 'New'
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Basic filtering logic
  const filteredPackages = packages.filter(pkg => {
    if (selectedFilters.length === 0) return true;
    
    // Check if any selected filter matches the package's location or badge
    // (ignoring Price and Duration which would need complex dropdown logic)
    return selectedFilters.every(filter => {
      if (filter === 'Price' || filter === 'Duration') return true;
      return pkg.location.includes(filter) || pkg.badge.includes(filter);
    });
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-75 w-full flex items-center justify-center pt-20">
        <Image
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format&fit=crop"
          alt="Curated Tour Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-4 drop-shadow-md">
            Curated <span className="text-brand-coral">Packages</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
            Discover handpicked tour packages that promise an unforgettable journey.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-19 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <button 
            className={`flex items-center gap-2 border rounded-full px-4 py-2 transition-colors shrink-0 font-medium text-[14px] ${showFilters ? 'border-gray-900 bg-gray-100 text-gray-900' : 'border-gray-300 hover:border-gray-900 text-gray-700'}`}
            onClick={() => {
              setShowFilters(!showFilters);
              if (showFilters) {
                setActiveDropdown(null);
              }
            }}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ width: 0, opacity: 0, paddingLeft: 0 }}
                animate={{ width: "auto", opacity: 1, paddingLeft: 8 }}
                exit={{ width: 0, opacity: 0, paddingLeft: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-3 overflow-hidden origin-left shrink-0"
              >
                <div className="h-8 w-px bg-gray-200 shrink-0 mr-1" />
                {filters.map((filter, idx) => {
                  const isDropdown = filter === 'Price' || filter === 'Duration';
                  const isSelected = selectedFilters.includes(filter) || activeDropdown === filter;

                  if (isDropdown) {
                    return (
                      <button 
                        key={idx}
                        onClick={() => setActiveDropdown(activeDropdown === filter ? null : filter)}
                        className={`flex items-center gap-2 border rounded-full px-4 py-2 transition-colors shrink-0 font-medium text-[14px] ${
                          isSelected ? 'border-gray-900 bg-gray-100 text-gray-900' : 'border-gray-300 hover:border-gray-900 text-gray-700'
                        }`}
                      >
                        {filter} <ChevronDown size={14} className={activeDropdown === filter ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                    );
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => toggleFilter(filter)}
                      className={`border rounded-full px-4 py-2 transition-colors shrink-0 font-medium text-[14px] ${
                        isSelected ? 'border-gray-900 bg-gray-100 text-gray-900' : 'border-gray-300 hover:border-gray-900 text-gray-700'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <h3 className="text-xl font-medium mb-2">No packages found</h3>
            <p>Try adjusting your filters to find what you're looking for.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="h-full">
                <TourCard pkg={pkg} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
