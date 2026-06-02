'use client';

import { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, Users, Plus, Minus } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

export default function SearchBar() {
  const [date, setDate] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0, pets: 0 });

  const totalGuests = guests.adults + guests.children;
  const guestDisplay = totalGuests === 0 
    ? 'Add guests' 
    : `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${guests.infants > 0 ? `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''}` : ''}${guests.pets > 0 ? `, ${guests.pets} pet${guests.pets > 1 ? 's' : ''}` : ''}`;

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.06)] p-1.5 flex items-center divide-x divide-gray-100 border border-white ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_4px_25px_rgb(0,0,0,0.08)]">
      
      {/* Destination */}
      <div className="flex items-center px-4 py-2 hover:bg-brand-sky/10 rounded-full transition-colors cursor-text min-w-[200px]">
        <MapPin className="text-brand-coral mr-3 shrink-0" size={20} />
        <div className="flex flex-col text-left w-full justify-center">
          <span className="text-[13px] font-extrabold text-brand-navy leading-tight">Where to?</span>
          <input 
            type="text" 
            placeholder="Search destination"
            className="w-full outline-none text-brand-charcoal/70 text-[13px] font-medium placeholder:text-brand-charcoal/40 bg-transparent mt-1 leading-tight p-0"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center px-4 py-2 hover:bg-brand-sky/10 rounded-full transition-colors min-w-[220px]">
        <CalendarIcon className="text-brand-coral mr-3 shrink-0" size={20} />
        <div className="flex flex-col text-left w-full justify-center">
          <span className="text-[13px] font-extrabold text-brand-navy leading-tight">Check in - Check out</span>
          <Popover>
            <PopoverTrigger className="w-full outline-none text-left text-brand-charcoal/70 text-[13px] font-medium bg-transparent mt-1 cursor-pointer hover:text-brand-navy transition-colors leading-tight p-0">
              {date?.from ? (
                date.to ? (
                  `${format(date.from, "LLL dd")} - ${format(date.to, "LLL dd")}`
                ) : (
                  format(date.from, "LLL dd")
                )
              ) : (
                <span className="text-brand-charcoal/40">Add dates</span>
              )}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-6 rounded-[32px] shadow-[0_8px_28px_rgba(0,0,0,0.12)] border-gray-100" align="center">
              <div className="flex justify-center">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  className="p-0"
                  classNames={{
                    months: "flex flex-col md:flex-row gap-10 sm:gap-16",
                    nav: "absolute top-1 w-full flex justify-between z-10 px-2",
                    button_previous: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 z-20 bg-transparent",
                    button_next: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 z-20 bg-transparent",
                    weekday: "text-gray-400 font-medium text-[13px] w-12 text-center pb-2",
                    day: "h-12 w-12 p-0 font-medium text-[15px] aria-selected:opacity-100 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all",
                    day_selected: "bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white rounded-full",
                    day_today: "bg-gray-100 text-black",
                    day_outside: "text-gray-300 opacity-50",
                    caption: "flex justify-center pt-2 relative items-center mb-6",
                    caption_label: "text-[16px] font-semibold text-black",
                  }}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Guests */}
      <div className="flex items-center px-4 py-2 hover:bg-brand-sky/10 rounded-full transition-colors cursor-pointer min-w-[180px]">
        <Users className="text-brand-coral mr-3 shrink-0" size={20} />
        <div className="flex flex-col text-left w-full justify-center">
          <span className="text-[13px] font-extrabold text-brand-navy leading-tight">Guests</span>
          <Popover>
            <PopoverTrigger className="w-full outline-none text-left text-brand-charcoal/70 text-[13px] font-medium bg-transparent mt-1 hover:text-brand-navy transition-colors leading-tight p-0">
              {guestDisplay}
            </PopoverTrigger>
            <PopoverContent className="w-[320px] p-6 rounded-3xl shadow-xl border-gray-100" align="end">
              <div className="flex flex-col gap-6">
                
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-navy text-[15px]">Adults</span>
                    <span className="text-[13px] text-brand-charcoal/60 mt-0.5">Ages 13 or above</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(0, prev.adults - 1) }))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${guests.adults === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 text-brand-charcoal hover:border-brand-navy hover:text-brand-navy'}`}
                      disabled={guests.adults === 0}
                    >
                      <Minus size={14} strokeWidth={2.5} />
                    </button>
                    <span className="w-4 text-center text-[15px] font-medium text-brand-navy">{guests.adults}</span>
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}
                      className="w-8 h-8 rounded-full border border-gray-400 text-brand-charcoal flex items-center justify-center hover:border-brand-navy hover:text-brand-navy transition-colors"
                    >
                      <Plus size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-navy text-[15px]">Children</span>
                    <span className="text-[13px] text-brand-charcoal/60 mt-0.5">Ages 2–12</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${guests.children === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 text-brand-charcoal hover:border-brand-navy hover:text-brand-navy'}`}
                      disabled={guests.children === 0}
                    >
                      <Minus size={14} strokeWidth={2.5} />
                    </button>
                    <span className="w-4 text-center text-[15px] font-medium text-brand-navy">{guests.children}</span>
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, children: prev.children + 1 }))}
                      className="w-8 h-8 rounded-full border border-gray-400 text-brand-charcoal flex items-center justify-center hover:border-brand-navy hover:text-brand-navy transition-colors"
                    >
                      <Plus size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                {/* Infants */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-navy text-[15px]">Infants</span>
                    <span className="text-[13px] text-brand-charcoal/60 mt-0.5">Under 2</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, infants: Math.max(0, prev.infants - 1) }))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${guests.infants === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 text-brand-charcoal hover:border-brand-navy hover:text-brand-navy'}`}
                      disabled={guests.infants === 0}
                    >
                      <Minus size={14} strokeWidth={2.5} />
                    </button>
                    <span className="w-4 text-center text-[15px] font-medium text-brand-navy">{guests.infants}</span>
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, infants: prev.infants + 1 }))}
                      className="w-8 h-8 rounded-full border border-gray-400 text-brand-charcoal flex items-center justify-center hover:border-brand-navy hover:text-brand-navy transition-colors"
                    >
                      <Plus size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full" />

                {/* Pets */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-navy text-[15px]">Pets</span>
                    <span className="text-[13px] text-brand-charcoal/60 mt-0.5 underline decoration-gray-300 cursor-pointer hover:text-brand-navy">Bringing a service animal?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, pets: Math.max(0, prev.pets - 1) }))}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${guests.pets === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 text-brand-charcoal hover:border-brand-navy hover:text-brand-navy'}`}
                      disabled={guests.pets === 0}
                    >
                      <Minus size={14} strokeWidth={2.5} />
                    </button>
                    <span className="w-4 text-center text-[15px] font-medium text-brand-navy">{guests.pets}</span>
                    <button 
                      onClick={() => setGuests(prev => ({ ...prev, pets: prev.pets + 1 }))}
                      className="w-8 h-8 rounded-full border border-gray-400 text-brand-charcoal flex items-center justify-center hover:border-brand-navy hover:text-brand-navy transition-colors"
                    >
                      <Plus size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Search Button */}
      <div className="pl-1 pr-1.5 py-1">
        <button className="bg-brand-coral hover:bg-opacity-90 text-white rounded-full px-6 py-2.5 flex items-center justify-center transition-all font-bold shadow-md shadow-brand-coral/30 hover:shadow-brand-coral/40 text-[15px]">
          Search
        </button>
      </div>
      
    </div>
  );
}
