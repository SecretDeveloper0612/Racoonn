'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';

const ALL_FILTERS = [
  'All',
  'View',
  'Hospitality',
  'Location',
  'Cleanliness',
  'Amenities',
  'Indoor spaces',
  'Comfort',
  'Getting around',
  'Family',
  'Condition',
  'Food'
];

const ALL_REVIEWS = [
  { id: 1, name: 'Sarah', date: 'October 2025', category: 'Location', text: 'Absolutely breathtaking experience. The views are exactly as pictured, and the service was impeccable from start to finish. Highly recommend for a relaxing getaway.' },
  { id: 2, name: 'Michael', date: 'September 2025', category: 'Amenities', text: 'The attention to detail in this property is unmatched. We loved the private pool and the seamless check-in process. We will definitely be coming back next year.' },
  { id: 3, name: 'Emma', date: 'August 2025', category: 'Cleanliness', text: 'Spotlessly clean! I am usually very picky, but the room was pristine. The housekeeping staff did an incredible job every single day.' },
  { id: 4, name: 'James', date: 'July 2025', category: 'Food', text: 'The complimentary breakfast was out of this world. Fresh pastries, great coffee, and a wonderful selection of local dishes.' },
  { id: 5, name: 'Olivia', date: 'June 2025', category: 'Hospitality', text: 'The staff went above and beyond to make our anniversary special. From the welcome drink to the personalized note in our room, 10/10.' },
  { id: 6, name: 'David', date: 'May 2025', category: 'Comfort', text: 'The bed was so comfortable it was hard to get up in the morning. Really high-quality linens and perfectly plump pillows.' },
  { id: 7, name: 'Sophia', date: 'April 2025', category: 'Location', text: 'Perfectly situated right next to the main attractions, yet completely peaceful once you step inside the gates.' },
  { id: 8, name: 'Daniel', date: 'March 2025', category: 'Cleanliness', text: 'Very well maintained property. Everything felt brand new and the bathrooms were spectacular.' },
];

export default function PropertyReviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredReviews = ALL_REVIEWS.filter(review => 
    activeFilter === 'All' ? true : review.category === activeFilter
  );

  return (
    <>
      <div id="reviews" className="scroll-mt-24 border-t border-gray-200 pt-12">
        <h2 className="text-[24px] font-semibold text-brand-navy mb-6 flex items-center gap-2">
          Rating and reviews <span className="bg-brand-navy text-white text-sm px-2.5 py-1 rounded-full ml-1">241</span>
        </h2>
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar mb-8 pb-2">
          {['View', 'Hospitality', 'Location', 'Cleanliness', 'Amenities', 'Indoor spaces', 'Comfort', 'Getting around', 'Family', 'Condition', 'Food'].map((filter, index) => (
            <button 
              key={index}
              onClick={() => {
                if (ALL_FILTERS.includes(filter)) {
                  setActiveFilter(filter);
                } else {
                  setActiveFilter('All');
                }
                setIsModalOpen(true);
              }}
              className="px-4 py-2 rounded-full border border-gray-300 text-[14px] font-medium text-gray-700 whitespace-nowrap hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {ALL_REVIEWS.slice(0, 2).map((review, i) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#222]">{review.name}</h4>
                  <p className="text-[13px] text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-[15px] text-gray-700 font-light leading-[1.6]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        <button 
          onClick={() => {
            setActiveFilter('All');
            setIsModalOpen(true);
          }}
          className="mt-8 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-[15px] hover:bg-gray-50 transition-colors"
        >
          Read all 241 reviews
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
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>

              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                {ALL_FILTERS.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                      activeFilter === category 
                        ? 'bg-brand-navy text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="w-10 h-10" /> {/* Spacer for centering */}
            </div>

            {/* Modal Content */}
            <div className="max-w-[1000px] mx-auto px-6 py-8">
              <div className="flex items-center gap-2 mb-8">
                <Star className="fill-current text-brand-navy" size={28} />
                <h2 className="text-[28px] font-bold text-brand-navy">
                  4.96 · 241 reviews
                </h2>
              </div>
              
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredReviews.length > 0 ? (
                    filteredReviews.map((review, i) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={review.id}
                        className="bg-gray-50 p-6 rounded-2xl h-fit"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                            <img src={`https://i.pravatar.cc/150?img=${review.id + 10}`} alt={review.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#222]">{review.name}</h4>
                            <p className="text-[13px] text-gray-500">{review.date} • {review.category}</p>
                          </div>
                        </div>
                        <p className="text-[15px] text-gray-700 font-light leading-[1.6]">
                          {review.text}
                        </p>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="col-span-1 md:col-span-2 text-center py-12 text-gray-500"
                    >
                      No reviews found for this category yet.
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
