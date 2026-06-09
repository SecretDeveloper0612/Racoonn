'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Wifi, 
  Waves, 
  Wind, 
  Coffee, 
  Tv, 
  Car,
  TreePine,
  Bath,
  ShowerHead,
  Droplets,
  Shirt,
  BedDouble,
  Gamepad2,
  BookOpen,
  Baby,
  Flame,
  Thermometer,
  Briefcase,
  ChefHat,
  Refrigerator,
  Microwave,
  MapPin,
  Key,
  Umbrella,
  Utensils,
  UtensilsCrossed,
  Dumbbell,
  BaggageClaim,
  Sparkles
} from 'lucide-react';

const FEATURED_AMENITIES = [
  { icon: Wifi, text: 'Fast wifi – 340 Mbps' },
  { icon: Waves, text: 'Private outdoor pool' },
  { icon: Wind, text: 'Central air conditioning' },
  { icon: Coffee, text: 'Espresso machine' },
  { icon: Tv, text: '75" HDTV with premium cable' },
  { icon: Car, text: 'Free valet parking on premises' },
];

const AMENITY_GROUPS = [
  {
    category: 'Scenic views',
    items: [{ icon: TreePine, text: 'Mountain view' }, { icon: Waves, text: 'Lake view' }]
  },
  {
    category: 'Bathroom',
    items: [{ icon: Bath, text: 'Bathtub' }, { icon: ShowerHead, text: 'Outdoor shower' }, { icon: Droplets, text: 'Hot water' }, { icon: Wind, text: 'Hair dryer' }]
  },
  {
    category: 'Bedroom and laundry',
    items: [{ icon: Shirt, text: 'Washer & Dryer' }, { icon: BedDouble, text: 'Essentials' }]
  },
  {
    category: 'Entertainment',
    items: [{ icon: Tv, text: '75" HDTV with premium cable' }, { icon: Gamepad2, text: 'Game console' }, { icon: BookOpen, text: 'Books and reading material' }]
  },
  {
    category: 'Family',
    items: [{ icon: Baby, text: 'Crib & High chair' }]
  },
  {
    category: 'Heating and cooling',
    items: [{ icon: Wind, text: 'Central air conditioning' }, { icon: Flame, text: 'Indoor fireplace' }, { icon: Thermometer, text: 'Heating' }]
  },
  {
    category: 'Internet and office',
    items: [{ icon: Wifi, text: 'Fast wifi – 340 Mbps' }, { icon: Briefcase, text: 'Dedicated workspace' }]
  },
  {
    category: 'Kitchen and dining',
    items: [{ icon: ChefHat, text: 'Kitchen' }, { icon: Refrigerator, text: 'Refrigerator' }, { icon: Microwave, text: 'Microwave' }, { icon: Coffee, text: 'Espresso machine' }]
  },
  {
    category: 'Location features',
    items: [{ icon: MapPin, text: 'Waterfront' }, { icon: Key, text: 'Private entrance' }]
  },
  {
    category: 'Outdoor',
    items: [{ icon: Umbrella, text: 'Patio or balcony' }, { icon: Flame, text: 'Fire pit' }, { icon: Utensils, text: 'Outdoor furniture' }, { icon: UtensilsCrossed, text: 'BBQ grill' }]
  },
  {
    category: 'Parking and facilities',
    items: [{ icon: Car, text: 'Free valet parking on premises' }, { icon: Waves, text: 'Private outdoor pool' }, { icon: Dumbbell, text: 'Gym' }]
  },
  {
    category: 'Services',
    items: [{ icon: BaggageClaim, text: 'Luggage dropoff allowed' }, { icon: Sparkles, text: 'Cleaning available during stay' }]
  }
];

export default function PropertyAmenities() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="amenities" className="scroll-mt-24 border-t border-gray-200 pt-12 pb-12">
        <h2 className="text-[24px] font-semibold text-brand-navy mb-8">What this place offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
          {FEATURED_AMENITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-4 text-[15px] text-gray-700">
                <Icon size={22} className="text-gray-700" strokeWidth={1.5} />
                <span className="font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-[15px] hover:bg-gray-50 transition-colors"
        >
          Show all 48 amenities
        </button>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors mr-4"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="max-w-[800px] mx-auto px-6 py-10">
              <h2 className="text-[32px] font-bold text-brand-navy mb-10">
                What this place offers
              </h2>
              
              <div className="flex flex-col gap-10">
                {AMENITY_GROUPS.map((group, idx) => (
                  <div key={idx} className={idx !== AMENITY_GROUPS.length - 1 ? 'border-b border-gray-200 pb-10' : ''}>
                    <h3 className="text-[20px] font-semibold text-[#222] mb-6">
                      {group.category}
                    </h3>
                    <div className="flex flex-col gap-6">
                      {group.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                          <div key={itemIdx} className="flex items-center gap-4 text-[16px] text-gray-700 font-light">
                            <Icon size={24} className="text-gray-700" strokeWidth={1.5} />
                            <span>{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
