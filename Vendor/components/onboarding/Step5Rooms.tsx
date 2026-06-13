"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Plus, Users, Maximize, Edit2, Trash2, Image as ImageIcon, UploadCloud } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Step5Rooms({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [rooms, setRooms] = useState([{ id: 1, name: "Deluxe King Room", price: "2500", occupancy: "2", size: "350" }]);

  const slideUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const addRoom = () => {
    setRooms([...rooms, { id: Date.now(), name: "Standard Room", price: "1500", occupancy: "2", size: "250" }]);
  }

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col h-full max-w-xl mx-auto w-full pt-8"
    >
      <motion.div variants={slideUp} className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',sans-serif]">Add your rooms</h1>
          <p className="text-slate-500 font-medium">Create room categories, set base prices, and define occupancy.</p>
        </div>
        <Button onClick={addRoom} variant="outline" className="font-bold rounded-full border-[#E86A70] text-[#E86A70] hover:bg-[#E86A70]/10">
          <Plus className="w-4 h-4 mr-2" /> Add Room
        </Button>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-6">
        {rooms.map((room, index) => (
          <div key={room.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative group">
            
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500"><Edit2 className="w-4 h-4" /></button>
              <button className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-500"><Trash2 className="w-4 h-4" /></button>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room Name</label>
                <Input defaultValue={room.name} className="h-10 border-transparent bg-slate-50 focus:bg-white text-lg font-bold text-slate-800 focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] rounded-xl" />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Base Price / Night</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <Input defaultValue={room.price} className="h-10 pl-7 border-slate-200 bg-white font-bold rounded-xl" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Users className="w-3 h-3" /> Max Guests</label>
                  <Input defaultValue={room.occupancy} type="number" className="h-10 border-slate-200 bg-white font-bold rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><Maximize className="w-3 h-3" /> Size (sqft)</label>
                  <Input defaultValue={room.size} type="number" className="h-10 border-slate-200 bg-white font-bold rounded-xl" />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Room Photos</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-[#E86A70]/50 transition-colors cursor-pointer relative group/upload">
                  <input type="file" multiple accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <div className="w-10 h-10 rounded-full bg-slate-100 group-hover/upload:bg-[#E86A70]/10 flex items-center justify-center mb-3 transition-colors">
                    <UploadCloud className="w-5 h-5 text-slate-400 group-hover/upload:text-[#E86A70] transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Upload Photos</span>
                  <span className="text-xs text-slate-400 mt-1">Drag & drop or click to browse</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Upload Photos <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
