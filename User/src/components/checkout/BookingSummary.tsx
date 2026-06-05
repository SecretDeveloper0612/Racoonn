"use client";
import { Star, MapPin, Calendar, Users, BedDouble } from "lucide-react";
import Image from "next/image";

export function BookingSummary({ 
  roomName = "Deluxe Ocean View Suite",
  pricePerNight = 8000,
  nights = 3,
  taxes = 2400,
  addons = 1500,
  discount = 2000 
}: {
  roomName?: string;
  pricePerNight?: number;
  nights?: number;
  taxes?: number;
  addons?: number;
  discount?: number;
}) {
  const roomPrice = pricePerNight * nights;
  const total = roomPrice + taxes + addons - discount;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] overflow-hidden">
      <div className="p-6 pb-4 border-b border-[#DCE8F5]">
        <h2 className="text-xl font-poppins font-bold text-[#1F2E4A] mb-4">Booking Summary</h2>
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden relative shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" 
              alt="Grand Ocean Resort"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#E86A70] text-[#E86A70]" />
              ))}
            </div>
            <h3 className="font-bold text-[#1F2E4A] text-lg leading-tight mb-1">Grand Ocean Resort</h3>
            <div className="flex items-start text-sm text-gray-500 gap-1">
              <MapPin className="w-4 h-4 shrink-0 text-[#E86A70] mt-0.5" />
              <span>Dubai Marina, UAE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 py-4 space-y-4 border-b border-[#DCE8F5] text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-gray-500 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#E86A70]" /> Check-In</p>
            <p className="font-medium text-[#1F2E4A]">12 Aug 2026</p>
            <p className="text-xs text-gray-500">From 14:00</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#E86A70]" /> Check-Out</p>
            <p className="font-medium text-[#1F2E4A]">15 Aug 2026</p>
            <p className="text-xs text-gray-500">Until 12:00</p>
          </div>
        </div>
      </div>

      <div className="p-6 py-4 space-y-3 text-sm border-b border-[#DCE8F5]">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-2"><Users className="w-4 h-4 text-[#E86A70]" /> Guests</span>
          <span className="font-medium text-[#1F2E4A]">2 Adults</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 flex items-center gap-2"><BedDouble className="w-4 h-4 text-[#E86A70]" /> Room</span>
          <span className="font-medium text-[#1F2E4A] text-right">1 × {roomName}</span>
        </div>
      </div>

      {/* Coupon Field */}
      <div className="p-6 pb-2 bg-[#F4F0EA] border-b border-[#DCE8F5]/50">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter coupon code" 
            className="flex-1 bg-white border border-[#DCE8F5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#E86A70] focus:ring-1 focus:ring-[#E86A70] transition-all"
          />
          <button className="bg-[#1F2E4A] hover:bg-[#1F2E4A]/90 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-transform active:scale-[0.98] shadow-sm">
            Apply
          </button>
        </div>
      </div>

      {/* Price Summary embedded or separate. For the prompt, I will put it here for simplicity. */}
      <div className="p-6 py-4 bg-[#F4F0EA]">
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Room Price (₹{pricePerNight.toLocaleString()} × {nights} Nights)</span>
            <span className="font-medium text-[#1F2E4A]">₹{roomPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxes & Fees</span>
            <span className="font-medium text-[#1F2E4A]">₹{taxes.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Add-On Services</span>
            <span className="font-medium text-[#1F2E4A]">₹{addons.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Coupon Discount</span>
            <span className="font-medium">-₹{discount.toLocaleString()}</span>
          </div>
        </div>
        <div className="pt-4 border-t border-[#DCE8F5] flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500">Total Amount</p>
            <p className="text-2xl font-bold text-[#E86A70]">₹{total.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
