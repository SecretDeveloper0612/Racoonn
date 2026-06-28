"use client";

import React, { useState } from 'react';
import PropertyCard, { Property } from '@/components/search/PropertyCard';
import MapMockup from '@/components/search/MapMockup';
import { SlidersHorizontal, Map as MapIcon, ChevronDown, List } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const mockProperties: Property[] = [
  {
    id: 's1',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1529393614?q=80&w=800&auto=format&fit=crop',
    ],
    title: 'Hotel in Gurugram',
    subtitle: 'Charming Studio | Kitchenette & Balcony',
    details: '1 bedroom · 1 king bed · 1 bathroom',
    dates: '3–8 Jun',
    price: 11497,
    rating: 4.52,
    reviews: 463,
    isSuperhost: true,
    freeCancellation: true,
  },
  {
    id: 's2',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop',
    ],
    title: 'Flat in Gurugram',
    subtitle: 'Stylish Luxury 1BHK w/ Balcony | Prime DLF Phase 3',
    details: '1 bedroom · 1 bed · 1 bathroom',
    dates: '4–9 Jun',
    price: 18369,
    rating: 4.71,
    reviews: 414,
    freeCancellation: true,
  },
  {
    id: 's3',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    ],
    title: 'Guest House in Noida',
    subtitle: 'Modern Room near Metro | Free Parking & Wi-Fi',
    details: '1 bedroom · 1 king bed · 1 bathroom',
    dates: '3–8 Jun',
    price: 1299,
    rating: 4.6,
    reviews: 312,
    isSuperhost: true,
    freeCancellation: true,
  },
  {
    id: 's4',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop',
    ],
    title: 'Apartment in Faridabad',
    subtitle: 'Cozy 2BHK | Fully Furnished | Near Bata Chowk',
    details: '2 bedrooms · 2 beds · 2 bathrooms',
    dates: '3–8 Jun',
    price: 2199,
    rating: 4.9,
    reviews: 218,
    isGuestFavorite: true,
  },
];

const filters = [
  'Price', 'Type of place', 'Washing machine', 'WiFi', 'Allows pets', 'Instant Book', 'Air conditioning', 'Free parking', 'TV', 'Kitchen'
];

export default function SearchPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filteredProperties = mockProperties.filter(property => {
    if (selectedFilters.length === 0) return true;
    
    const searchString = `${property.title} ${property.subtitle} ${property.details}`.toLowerCase();
    
    // Simple text match logic for the demo
    return selectedFilters.every(filter => {
      const f = filter.toLowerCase();
      if (f === 'wifi') return searchString.includes('wi-fi') || searchString.includes('wifi');
      if (f === 'free parking') return searchString.includes('parking');
      if (f === 'kitchen') return searchString.includes('kitchen');
      // If it's a dropdown filter or one we don't have mock data for, don't hide the property
      return true; 
    });
  });

  return (
    <div className="flex flex-col h-[calc(100vh-92px)] overflow-hidden">
      {/* Top Filter Bar */}
      <div className="relative shrink-0">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <button 
            className={`flex items-center gap-2 border rounded-full px-4 py-2 transition-colors shrink-0 font-medium text-sm ${showFilters ? 'border-gray-900 bg-gray-100 text-gray-900' : 'border-gray-300 hover:border-gray-900 text-gray-700'}`}
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
            const isDropdown = idx < 2; // Price, Type of place
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

        {/* Dropdown Panels */}
        {activeDropdown && (
          <div className="fixed top-24 left-4 right-4 z-40 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden md:left-35 md:right-auto md:w-96 lg:left-auto lg:right-6 lg:w-100 xl:w-125 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 p-5">
              {activeDropdown === 'Price' ? (
                <>
                  <div className="font-semibold text-gray-900 mb-1">Price range</div>
                  <p className="text-sm text-gray-500 mb-2">Nightly prices before fees and taxes</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="text-xs font-medium text-gray-500 uppercase">Minimum</label>
                      <div className="border border-gray-300 rounded-lg px-3 py-2 mt-1 flex items-center focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all">
                        <span className="text-gray-500 mr-2">₹</span>
                        <input type="number" placeholder="1000" className="w-full outline-none text-sm text-gray-900" />
                      </div>
                    </div>
                    <div className="h-px w-4 bg-gray-300 mt-6" />
                    <div className="flex-1">
                      <label className="text-xs font-medium text-gray-500 uppercase">Maximum</label>
                      <div className="border border-gray-300 rounded-lg px-3 py-2 mt-1 flex items-center focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all">
                        <span className="text-gray-500 mr-2">₹</span>
                        <input type="number" placeholder="50000+" className="w-full outline-none text-sm text-gray-900" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="font-semibold text-gray-900 mb-1">Type of place</div>
                  <p className="text-sm text-gray-500 mb-2">Search rooms, entire homes, or any type of place</p>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="pt-0.5">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:underline">Entire place</div>
                        <div className="text-sm text-gray-500">A place all to yourself</div>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="pt-0.5">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:underline">Private room</div>
                        <div className="text-sm text-gray-500">Your own room in a home or hotel, plus some shared common spaces</div>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="pt-0.5">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 group-hover:underline">Shared room</div>
                        <div className="text-sm text-gray-500">A sleeping space and common areas that may be shared with others</div>
                      </div>
                    </label>
                  </div>
                </>
              )}
              <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-100">
                <button className="text-sm font-medium underline text-gray-900 hover:text-gray-600 transition-colors" onClick={() => setActiveDropdown(null)}>Clear</button>
                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors" onClick={() => {
                  toggleFilter(activeDropdown);
                  setActiveDropdown(null);
                }}>Apply</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Split Layout */}
      <div className="flex-1 overflow-y-auto lg:overflow-hidden relative flex flex-col lg:flex-row w-full lg:px-6 lg:pb-6 lg:pt-4 lg:gap-6">
        
        {/* Right Panel: Map */}
        <div className="w-full h-[50vh] relative z-0 shrink-0 lg:h-full lg:relative lg:w-[45%] xl:w-[40%] lg:rounded-2xl overflow-hidden shadow-sm lg:border border-gray-200 order-1 lg:order-2">
          <MapMockup />
        </div>

        {/* Left Panel: Property List */}
        <div className="min-h-screen flex flex-col bg-slate-50 relative pb-20 lg:pb-0 rounded-t-[32px] -mt-8 pt-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] lg:min-h-0 lg:h-full lg:mt-0 lg:pt-0 lg:shadow-[0_4px_24px_rgba(0,0,0,0.06)] lg:rounded-2xl lg:border border-gray-200 lg:w-[55%] xl:w-[60%] lg:flex lg:overflow-y-auto order-2 lg:order-1">
          {/* Pull Bar Indicator for Mobile */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 lg:hidden shrink-0" />

          <div className="px-4 pb-4 lg:p-6 lg:pt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-4">
              <div>
                <h1 className="text-[24px] lg:text-[28px] font-bold text-gray-900">Over 1,000 homes</h1>
                <p className="text-[14px] lg:text-[15px] text-gray-600 mt-1">Stays in Delhi NCR</p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 text-center py-12 text-gray-500">
                  No properties found matching your filters.
                </div>
              )}
            </div>
            
            <div className="mt-12 mb-8 flex justify-center">
              <button className="bg-gray-900 text-white font-bold text-[15px] px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                Load more homes
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
