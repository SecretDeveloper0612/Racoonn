"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, UploadCloud, Building2, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Step3Business({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [bizType, setBizType] = useState<"individual" | "company">("company");

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
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',_sans-serif]">Tell us about your business</h1>
        <p className="text-slate-500 font-medium">This information helps us verify your identity and ensures smooth payouts.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-6">
        
        {/* Business Type Selector */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setBizType("individual")}
            className={cn(
              "p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all",
              bizType === "individual" ? "border-[#E86A70] bg-[#E86A70]/5" : "border-slate-200 bg-white hover:border-slate-300"
            )}
          >
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", bizType === "individual" ? "bg-[#E86A70] text-white" : "bg-slate-100 text-slate-500")}>
              <User className="w-6 h-6" />
            </div>
            <span className={cn("font-bold", bizType === "individual" ? "text-[#1F2E4A]" : "text-slate-500")}>Individual / Sole Proprietor</span>
          </button>
          
          <button 
            onClick={() => setBizType("company")}
            className={cn(
              "p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all",
              bizType === "company" ? "border-[#E86A70] bg-[#E86A70]/5" : "border-slate-200 bg-white hover:border-slate-300"
            )}
          >
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", bizType === "company" ? "bg-[#E86A70] text-white" : "bg-slate-100 text-slate-500")}>
              <Building2 className="w-6 h-6" />
            </div>
            <span className={cn("font-bold", bizType === "company" ? "text-[#1F2E4A]" : "text-slate-500")}>Registered Company</span>
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Legal Business Name</label>
          <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" placeholder="Racoonn Hospitality Pvt Ltd" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">PAN Number</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium uppercase" placeholder="ABCDE1234F" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">GST Number (Optional)</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium uppercase" placeholder="22AAAAA0000A1Z5" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Registered Address</label>
          <textarea 
            className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium resize-none min-h-[100px] outline-none" 
            placeholder="123 Business Park, Sector 4..."
          />
        </div>

        {/* File Upload UI */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Upload Business Proof</label>
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-7 h-7" />
            </div>
            <p className="text-sm font-bold text-slate-700 mb-1">Click or drag file to this area to upload</p>
            <p className="text-xs text-slate-500">Supports PDF, JPG, PNG (Max 5MB)</p>
          </div>
        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Continue to Property <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
