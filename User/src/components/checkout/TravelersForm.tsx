"use client";
import { Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TravelersForm() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] overflow-hidden">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-[#E86A70]" />
          <div>
            <h2 className="text-xl font-poppins font-bold text-[#1F2E4A]">Traveler Information</h2>
            <p className="text-sm text-gray-500 mt-1">Details for additional guests</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 border-t border-[#DCE8F5] space-y-8 mt-4">
              {/* Guest 1 */}
              <div className="space-y-4">
                <h3 className="font-bold text-[#1F2E4A] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DCE8F5] text-[#1F2E4A] flex items-center justify-center text-xs">1</span>
                  Guest 1
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gender</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none bg-white">
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Guest 2 */}
              <div className="space-y-4">
                <h3 className="font-bold text-[#1F2E4A] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DCE8F5] text-[#1F2E4A] flex items-center justify-center text-xs">2</span>
                  Guest 2
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gender</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none bg-white">
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E86A70] outline-none text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
