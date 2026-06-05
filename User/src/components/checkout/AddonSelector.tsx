"use client";
import { Plus, Check, Plane, Coffee, Sparkles, Shield, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ADDONS = [
  { id: "airport", title: "Airport Transfer", price: 1200, icon: Plane, description: "Hassle-free pickup and drop-off" },
  { id: "breakfast", title: "Breakfast Package", price: 800, icon: Coffee, description: "Daily buffet breakfast per person" },
  { id: "spa", title: "Spa Access", price: 1500, icon: Sparkles, description: "Unlimited access to wellness center" },
  { id: "insurance", title: "Travel Insurance", price: 450, icon: Shield, description: "Comprehensive trip coverage" },
  { id: "early", title: "Early Check-In", price: 500, icon: Sun, description: "Check in as early as 10:00 AM" },
  { id: "late", title: "Late Check-Out", price: 500, icon: Moon, description: "Check out as late as 4:00 PM" },
];

export function AddonSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#1F2E4A] mb-2">Enhance Your Stay</h2>
      <p className="text-sm text-gray-500 mb-6">Select premium add-ons for a better experience</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ADDONS.map((addon) => {
          const isSelected = selected.includes(addon.id);
          const Icon = addon.icon;
          
          return (
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              key={addon.id}
              onClick={() => toggle(addon.id)}
              className={`relative cursor-pointer rounded-xl border-2 p-4 transition-colors flex flex-col h-full ${
                isSelected 
                  ? "border-[#E86A70] bg-[#F8D6D8]/30" 
                  : "border-[#DCE8F5] hover:border-[#E86A70]/50"
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-lg ${isSelected ? "bg-[#E86A70] text-white" : "bg-[#F4F0EA] text-[#1F2E4A]"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-[#E86A70] bg-[#E86A70]" : "border-gray-300"
                }`}>
                  {isSelected ? <Check className="w-3.5 h-3.5 text-white" /> : <Plus className="w-3.5 h-3.5 text-gray-400" />}
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-bold text-[#1F2E4A] text-sm mb-1">{addon.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{addon.description}</p>
                <div className="font-medium text-[#E86A70]">₹{addon.price}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
