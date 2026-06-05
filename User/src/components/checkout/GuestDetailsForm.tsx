"use client";
import { User, Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export function GuestDetailsForm() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#1F2E4A] mb-6 flex items-center gap-2">
        <User className="w-6 h-6 text-[#E86A70]" /> Guest Details
      </h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input type="text" placeholder="John" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1"><Mail className="w-4 h-4 text-gray-400" /> Email Address</label>
            <input type="email" placeholder="john.doe@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1"><Phone className="w-4 h-4 text-gray-400" /> Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> Country/Region</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all bg-white">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option>United Arab Emirates</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
              <option>Italy</option>
              <option>Japan</option>
              <option>Singapore</option>
              <option>South Africa</option>
              <option>Spain</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-[#DCE8F5] space-y-6">
          <h3 className="text-lg font-bold text-[#1F2E4A] flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#E86A70]" /> Additional Requests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1"><Clock className="w-4 h-4 text-gray-400" /> Arrival Time</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all bg-white">
                <option>I don't know yet</option>
                <option>12:00 PM - 02:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
                <option>04:00 PM - 06:00 PM</option>
                <option>After 06:00 PM</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Smoking Preference</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="smoking" className="w-4 h-4 text-[#E86A70] focus:ring-[#E86A70]" defaultChecked />
                  <span className="text-sm text-gray-700">Non-smoking</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="smoking" className="w-4 h-4 text-[#E86A70] focus:ring-[#E86A70]" />
                  <span className="text-sm text-gray-700">Smoking</span>
                </label>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Special Requests (Optional)</label>
              <textarea placeholder="e.g. Quiet room, high floor, anniversary celebration..." className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] focus:border-[#E86A70] outline-none transition-all min-h-[100px] resize-y"></textarea>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-lg border border-[#DCE8F5] bg-[#F4F0EA]/50 hover:bg-[#DCE8F5]/30 transition-colors">
                <input type="checkbox" className="w-5 h-5 mt-0.5 rounded text-[#E86A70] focus:ring-[#E86A70]" />
                <div>
                  <span className="block font-medium text-[#1F2E4A]">Airport Pickup Required</span>
                  <span className="block text-sm text-gray-500 mt-0.5">We will contact you to arrange the details. Additional charges may apply.</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
