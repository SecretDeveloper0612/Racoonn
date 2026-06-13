"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Wifi, Dumbbell, Car, Coffee, Wind, Tv, Snowflake, UtensilsCrossed, PawPrint, Wine, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AMENITIES = [
  { id: "wifi", name: "Free WiFi", icon: Wifi },
  { id: "pool", name: "Swimming Pool", icon: Wind },
  { id: "gym", name: "Fitness Center", icon: Dumbbell },
  { id: "parking", name: "Free Parking", icon: Car },
  { id: "restaurant", name: "Restaurant", icon: Coffee },
  { id: "tv", name: "Smart TV", icon: Tv },
  { id: "ac", name: "Air Conditioning", icon: Snowflake },
  { id: "room_service", name: "Room Service", icon: UtensilsCrossed },
  { id: "pets", name: "Pet Friendly", icon: PawPrint },
  { id: "bar", name: "Bar / Lounge", icon: Wine },
  { id: "front_desk", name: "24/7 Front Desk", icon: Clock },
  { id: "spa", name: "Spa & Wellness", icon: Sparkles },
];

export function Step7Amenities({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [selected, setSelected] = useState<string[]>(["wifi", "parking"]);

  const toggle = (id: string) => {
    if (selected.includes(id)) setSelected(selected.filter(s => s !== id));
    else setSelected([...selected, id]);
  };

  const slideUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col h-full max-w-xl mx-auto w-full pt-8"
    >
      <motion.div variants={slideUp} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',sans-serif]">What amenities do you offer?</h1>
        <p className="text-slate-500 font-medium">Select the amenities available at your property and define your house rules.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-8">
        
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Popular Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {AMENITIES.map((amenity) => {
              const isSelected = selected.includes(amenity.id);
              return (
                <button
                  key={amenity.id}
                  onClick={() => toggle(amenity.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 gap-2",
                    isSelected 
                      ? "border-[#E86A70] bg-[#E86A70]/5 shadow-sm" 
                      : "border-slate-100 bg-white hover:border-slate-200"
                  )}
                >
                  <amenity.icon className={cn("w-6 h-6", isSelected ? "text-[#E86A70]" : "text-slate-400")} />
                  <span className={cn("text-xs font-bold text-center", isSelected ? "text-[#1F2E4A]" : "text-slate-500")}>
                    {amenity.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-100 pt-8">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Basic Policies</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500">Check-in Time</label>
              <select className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 font-bold text-slate-700 outline-none focus:border-[#E86A70]" defaultValue="2:00 PM">
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500">Check-out Time</label>
              <select className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 font-bold text-slate-700 outline-none focus:border-[#E86A70]" defaultValue="11:00 AM">
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <label className="text-xs font-bold text-slate-500">Cancellation Policy</label>
            <select className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 font-bold text-slate-700 outline-none focus:border-[#E86A70]">
              <option>Flexible (Full refund 1 day prior)</option>
              <option>Moderate (Full refund 5 days prior)</option>
              <option>Strict (50% refund up to 1 week prior)</option>
            </select>
          </div>

        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Bank Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
