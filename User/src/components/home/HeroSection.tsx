'use client';

import { useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Home,
  Plane,
  Building2,
  Palmtree,
  Ticket,
  Bus,
  MapPin,
  CalendarDays,
  Users,
  ChevronDown,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

const tabs = [
  { id: 'activities', label: 'Activities', icon: Ticket },
  { id: 'stays', label: 'Stays', icon: Home },
  { id: 'cab', label: 'Cab', icon: Bus },
  { id: 'packages', label: 'Packages', icon: Palmtree },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('stays');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  return (
    <section className="relative w-full -mt-24 pt-32 overflow-hidden rounded-b-[50px]">

      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=100&w=3840&auto=format&fit=crop"
        alt="Beautiful tropical destination"
        fill
        priority
        className="object-cover z-0"
      />


      {/* Content */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-2 pb-8">

        {/* Heading */}
        <h1
          className="text-center text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-wider uppercase mb-8"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)' }}
        >
          Explore And Create Memories
        </h1>

        {/* Search Card */}
        <div className="max-w-4xl mx-auto transform-gpu">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

            {/* Tabs */}
            <div className="flex items-center justify-center gap-1 px-6 pt-5 pb-0 overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl whitespace-nowrap text-sm font-medium transition-all relative ${isActive
                      ? 'text-brand-coral'
                      : 'text-brand-charcoal/60 hover:text-brand-navy'
                      }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-coral rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* Search Fields */}
            <div className="p-6 space-y-4">

              {/* Destination Row */}
              <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group">
                <MapPin size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy text-[15px]">Where are you going?</h4>
                  <p className="text-sm text-brand-charcoal/50">Search destination or property</p>
                </div>
              </div>

              {/* Date + Guests Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Check-in */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                    <CalendarDays size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-navy text-[15px]">Check-in</h4>
                      <p className="text-sm text-brand-charcoal/50">
                        {checkIn ? format(checkIn, "PP") : "Add dates"}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                    />
                  </PopoverContent>
                </Popover>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] bg-gray-200 self-stretch" />

                {/* Check-out */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                    <CalendarDays size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-navy text-[15px]">Check-out</h4>
                      <p className="text-sm text-brand-charcoal/50">
                        {checkOut ? format(checkOut, "PP") : "Add dates"}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                    />
                  </PopoverContent>
                </Popover>

                {/* Divider */}
                <div className="hidden sm:block w-[1px] bg-gray-200 self-stretch" />

                {/* Guests */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                    <Users size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-navy text-[15px]">Guests</h4>
                      <p className="text-sm text-brand-charcoal/50">
                        {adults + children === 0 && rooms === 0 ? "Add guests" : `${adults + children} guest${adults + children !== 1 ? 's' : ''} · ${rooms} room${rooms !== 1 ? 's' : ''}`}
                      </p>
                    </div>
                    <ChevronDown size={18} className="text-brand-charcoal/40" />
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4" align="end">
                    <div className="space-y-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-brand-navy">Adults</p>
                          <p className="text-sm text-brand-charcoal/60">Ages 13 or above</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setAdults(Math.max(0, adults - 1))}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-brand-charcoal"
                            disabled={adults <= 0}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center font-medium">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-brand-navy">Children</p>
                          <p className="text-sm text-brand-charcoal/60">Ages 0-12</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-brand-charcoal"
                            disabled={children <= 0}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center font-medium">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Rooms */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-brand-navy">Rooms</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setRooms(Math.max(0, rooms - 1))}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-brand-charcoal"
                            disabled={rooms <= 0}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center font-medium">{rooms}</span>
                          <button
                            type="button"
                            onClick={() => setRooms(rooms + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-brand-charcoal hover:border-brand-coral hover:text-brand-coral transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4 pt-2">

                <button className="bg-brand-coral hover:bg-brand-coral/90 text-white pl-7 pr-5 py-3.5 rounded-full font-bold flex items-center gap-3 transition-all shadow-[0_8px_25px_rgba(232,106,112,0.4)] hover:shadow-[0_12px_35px_rgba(232,106,112,0.5)] hover:-translate-y-0.5 text-[15px]">
                  Search
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
