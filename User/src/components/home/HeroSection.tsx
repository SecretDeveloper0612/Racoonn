'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import chatbotLogo from '@/assets/Racoonn-Logo-03.png';
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
  { id: 'stays', label: 'Stays', icon: Home },
  { id: 'packages', label: 'Packages', icon: Palmtree },
  { id: 'activities', label: 'Activities', icon: Ticket },
];

const heroImages = [
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('stays');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChatMode, setIsChatMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full -mt-24 pt-32 overflow-hidden rounded-b-[50px]">

      {/* Background Image Slideshow */}
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Beautiful tropical destination ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover z-0 transition-opacity duration-1000 ease-in-out transform-gpu will-change-opacity ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}


      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-8">

        {/* Search Card */}
        <div className="max-w-4xl mx-auto transform-gpu">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

            {/* Tabs & Chatbot Container */}
            <div className="flex items-center justify-between px-6 pt-5 pb-0 overflow-x-auto hide-scrollbar">
              
              {/* Left Side: Tabs */}
              <div className="flex items-center gap-1">
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

              {/* Right Side: Chatbot Button */}
              <button 
                onClick={() => setIsChatMode(!isChatMode)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 hover:bg-brand-coral/20 border border-brand-coral/20 transition-all hover:scale-105 active:scale-95 text-brand-navy font-bold text-sm mb-1.5 whitespace-nowrap shadow-sm"
              >
                <div className="w-6 h-6 relative rounded-full overflow-hidden flex-shrink-0 bg-white">
                  <Image src={chatbotLogo} alt="AI Assistant" fill className="object-contain p-0.5" />
                </div>
                {isChatMode ? 'Classic Search' : 'Ask AI'}
              </button>
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* Search Fields / Chat Mode */}
            <div className="p-6 space-y-4 min-h-[220px]">
              {isChatMode ? (
                <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                  <div className="flex items-start gap-4 border border-brand-coral/30 rounded-2xl p-5 bg-brand-coral/5 transition-colors focus-within:border-brand-coral/60 focus-within:bg-white shadow-inner">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden flex-shrink-0 bg-white shadow-sm mt-0.5 border border-gray-100">
                      <Image src={chatbotLogo} alt="AI Assistant" fill className="object-contain p-1" />
                    </div>
                    <textarea 
                      placeholder="e.g. Find me a beachfront villa in Bali for 2 adults next weekend with a private pool..."
                      className="w-full min-h-[100px] outline-none text-brand-navy text-[16px] placeholder:text-brand-charcoal/40 bg-transparent resize-none leading-relaxed"
                      autoFocus
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-gradient-to-r from-brand-coral to-[#e84f57] hover:shadow-[0_8px_20px_rgba(232,106,112,0.3)] text-white pl-7 pr-5 py-3.5 rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 text-[15px] sm:w-[220px]">
                      Ask Racoonn AI
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} />
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">

              {/* Destination Row */}
              <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-text group">
                <MapPin size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                <div className="w-full">
                  <h4 className="font-semibold text-brand-navy text-[15px]">
                    {activeTab === 'activities' ? 'What do you want to do?' : 'Where are you going?'}
                  </h4>
                  <input 
                    type="text" 
                    placeholder={
                      activeTab === 'stays' ? "Search destination or property" :
                      activeTab === 'packages' ? "Search destination or package name" :
                      "Search activities, tours, or destinations"
                    }
                    className="w-full outline-none text-brand-charcoal/70 text-sm font-medium placeholder:text-brand-charcoal/40 bg-transparent mt-0.5 p-0"
                  />
                </div>
              </div>

              {/* Date + Guests Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Check-in / Start Date */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                    <CalendarDays size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-navy text-[15px]">
                        {activeTab === 'stays' ? 'Check-in' : activeTab === 'packages' ? 'Start date' : 'Date'}
                      </h4>
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
                {activeTab !== 'activities' && <div className="hidden sm:block w-[1px] bg-gray-200 self-stretch" />}

                {/* Check-out / End Date */}
                {activeTab !== 'activities' && (
                  <Popover>
                    <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                      <CalendarDays size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-navy text-[15px]">
                          {activeTab === 'stays' ? 'Check-out' : 'End date'}
                        </h4>
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
                )}

                {/* Divider */}
                <div className="hidden sm:block w-[1px] bg-gray-200 self-stretch" />

                {/* Guests / Participants */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 hover:border-brand-coral/40 transition-colors cursor-pointer group flex-1 text-left focus:outline-none focus:ring-2 focus:ring-brand-coral/30">
                    <Users size={22} className="text-brand-charcoal/40 group-hover:text-brand-coral transition-colors shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-brand-navy text-[15px]">
                        {activeTab === 'activities' ? 'Participants' : 'Guests'}
                      </h4>
                      <p className="text-sm text-brand-charcoal/50 truncate">
                        {adults + children === 0 && rooms === 0 
                          ? (activeTab === 'activities' ? "Add participants" : "Add guests") 
                          : `${adults + children} ${activeTab === 'activities' ? 'participant' : 'guest'}${adults + children !== 1 ? 's' : ''}` + (activeTab !== 'activities' ? ` · ${rooms} room${rooms !== 1 ? 's' : ''}` : '')
                        }
                      </p>
                    </div>
                    <ChevronDown size={18} className="text-brand-charcoal/40" />
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4" align="end">
                    <div className="space-y-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-brand-navy">{activeTab === 'activities' ? 'Adults' : 'Adults'}</p>
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

                      {/* Rooms (Hidden for Activities) */}
                      {activeTab !== 'activities' && (
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
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">

                <Link 
                  href={activeTab === 'packages' ? "/packages" : "/search"} 
                  className="bg-brand-coral hover:bg-brand-coral/90 text-white pl-7 pr-5 py-3.5 rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 text-[15px] w-full sm:w-auto min-w-[200px]"
                >
                  {activeTab === 'packages' ? 'View all packages' : 'Search'}
                  {activeTab === 'packages' ? (
                    <ArrowRight size={18} />
                  ) : (
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </Link>
              </div>
              </div>
              )}
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
