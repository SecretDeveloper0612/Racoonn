"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Lock } from "lucide-react";

export function Step1Account({ onNext }: { onNext: () => void }) {
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
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',_sans-serif]">Create your partner account</h1>
        <p className="text-slate-500 font-medium">First, let's set up your login credentials so you can save your progress and access the dashboard later.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">First Name</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Business Email</label>
          <Input type="email" className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" placeholder="jane@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
          <div className="flex gap-2">
            <select className="h-12 w-24 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium outline-none focus:border-[#E86A70]">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <Input type="tel" className="h-12 flex-1 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" placeholder="9876543210" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input type="password" className="h-12 pl-10 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium tracking-widest" placeholder="••••••••" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Must be at least 8 characters long.</p>
        </div>

        <div className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded text-[#E86A70] focus:ring-[#E86A70]" />
          <label htmlFor="terms" className="text-sm text-slate-600 font-medium leading-snug">
            I agree to Racoonn's <a href="#" className="text-[#E86A70] hover:underline">Terms of Service</a>, <a href="#" className="text-[#E86A70] hover:underline">Privacy Policy</a>, and <a href="#" className="text-[#E86A70] hover:underline">Partner Agreement</a>.
          </label>
        </div>
      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <p className="text-sm text-slate-400 font-medium">Step 1 of 10</p>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Create Account & Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
