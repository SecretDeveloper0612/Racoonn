import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, FileText, Star } from 'lucide-react';
import Image from 'next/image';

const mockBookings = [
  {
    id: 'BKG-782910',
    hotel: 'The Ritz-Carlton, Bali',
    location: 'Nusa Dua, Bali, Indonesia',
    checkIn: 'Oct 12, 2026',
    checkOut: 'Oct 16, 2026',
    guests: '2 Adults, 1 Child',
    amount: '$1,250.00',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'BKG-552194',
    hotel: 'Waldorf Astoria Maldives',
    location: 'Ithaafushi Island, Maldives',
    checkIn: 'Jan 05, 2026',
    checkOut: 'Jan 10, 2026',
    guests: '2 Adults',
    amount: '$4,800.00',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'BKG-229104',
    hotel: 'Four Seasons Paris',
    location: 'Paris, France',
    checkIn: 'Sep 10, 2025',
    checkOut: 'Sep 14, 2025',
    guests: '2 Adults',
    amount: '$3,200.00',
    status: 'Cancelled',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export default function BookingsSection() {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');

  const filteredBookings = mockBookings.filter(b => b.status === activeTab);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-bold mb-2">My Bookings</h2>
        <p className="text-gray-500">View and manage your upcoming and past trips.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-gray-100 pb-px">
        {['Upcoming', 'Completed', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'Upcoming' | 'Completed' | 'Cancelled')}
            className={`pb-4 px-2 font-bold transition-all relative ${
              activeTab === tab ? 'text-brand-coral' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div layoutId="bookings-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-coral" />
            )}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredBookings.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center bg-gray-50 rounded-3xl border border-gray-100 border-dashed"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="text-gray-300" size={24} />
              </div>
              <h3 className="font-bold text-lg text-brand-navy">No {activeTab.toLowerCase()} bookings</h3>
              <p className="text-gray-500 text-sm mt-1">When you book a trip, it will show up here.</p>
              <button className="mt-6 text-brand-coral font-bold hover:underline">Explore Destinations</button>
            </motion.div>
          ) : (
            filteredBookings.map((booking) => (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-gray-100 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden relative shrink-0">
                  <Image src={booking.image} alt={booking.hotel} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy uppercase">
                    {booking.status}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-brand-navy">{booking.hotel}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                        <MapPin size={14} /> {booking.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400 font-medium">Booking ID</p>
                      <p className="font-mono text-sm font-bold text-brand-navy">{booking.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-gray-50">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Check In</p>
                      <p className="font-bold text-sm text-brand-navy">{booking.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Check Out</p>
                      <p className="font-bold text-sm text-brand-navy">{booking.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Guests</p>
                      <p className="font-bold text-sm text-brand-navy">{booking.guests}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Amount</p>
                      <p className="font-bold text-sm text-brand-coral">{booking.amount}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <button className="px-5 py-2.5 bg-brand-navy hover:bg-brand-coral text-white text-sm font-bold rounded-xl transition-colors">
                      View Details
                    </button>
                    <button className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-brand-navy text-sm font-bold rounded-xl transition-colors flex items-center gap-2">
                      <FileText size={16} /> Invoice
                    </button>
                    
                    {booking.status === 'Completed' && (
                      <button className="px-5 py-2.5 bg-brand-coral/10 hover:bg-brand-coral/20 text-brand-coral text-sm font-bold rounded-xl transition-colors flex items-center gap-2 ml-auto">
                        <Star size={16} /> Leave Review
                      </button>
                    )}
                    {booking.status === 'Upcoming' && (
                      <button className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-500 text-sm font-bold rounded-xl transition-colors ml-auto">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
