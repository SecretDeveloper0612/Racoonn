"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PROPERTY_TYPES = ["Hotel", "Resort", "Villa", "Apartment", "Homestay", "Guest House"];

export function Step4Property({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [selectedType, setSelectedType] = useState("Hotel");
  const [city, setCity] = useState("Mumbai");
  const [propertyState, setPropertyState] = useState("Maharashtra");

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
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',sans-serif]">Add your property</h1>
        <p className="text-slate-500 font-medium">Let's create your listing profile. Travelers will see these details when searching for places to stay.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-6">
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Name</label>
          <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium text-lg" placeholder="e.g. The Grand Racoonn Resort" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Type</label>
          <div className="flex flex-wrap gap-3">
            {PROPERTY_TYPES.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all border",
                  selectedType === type 
                    ? "bg-[#1F2E4A] text-white border-[#1F2E4A] shadow-md shadow-[#1F2E4A]/20" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Live Google Map */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Pin Location on Map</label>
          <div className="w-full h-64 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${city}, ${propertyState}` || "India")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full"
            ></iframe>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-[#1F2E4A]/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-sm text-white">
                <MapPin className="w-4 h-4 text-[#E86A70]" /> Interactive Map Enabled
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
            <Input 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" 
              placeholder="e.g. Mumbai" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">State</label>
            <Input 
              value={propertyState}
              onChange={(e) => setPropertyState(e.target.value)}
              className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" 
              placeholder="e.g. Maharashtra" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Description</label>
          <textarea 
            className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium resize-none min-h-30 outline-none" 
            placeholder="Describe what makes your property unique. Highlight nearby attractions, atmosphere, and special features..."
          />
        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Continue Setup <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
