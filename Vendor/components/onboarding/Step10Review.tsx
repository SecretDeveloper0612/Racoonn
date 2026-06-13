"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Step10Review({ onSubmit, onBack }: { onSubmit: () => void, onBack: () => void }) {
  const slideUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const sections = [
    { name: "Account Details", status: "Complete", complete: true },
    { name: "Business Verification", status: "Verified", complete: true },
    { name: "Property Details", status: "Complete", complete: true },
    { name: "Room Setup", status: "1 Room Added", complete: true },
    { name: "Media Gallery", status: "4 Photos", complete: false, warning: true },
    { name: "Bank Details", status: "Verified", complete: true },
    { name: "KYC Documents", status: "Pending Review", complete: true },
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col h-full max-w-xl mx-auto w-full pt-4"
    >
      <motion.div variants={slideUp} className="mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',_sans-serif]">Review & Submit</h1>
        <p className="text-slate-500 font-medium">You're almost there! Review your application details before submitting for final approval.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-6">
        
        {/* Listing Score Card */}
        <div className="bg-gradient-to-br from-[#1F2E4A] to-[#111827] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E86A70]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Estimated Listing Score
              </p>
              <div className="flex items-end gap-2">
                <h2 className="text-5xl font-black text-white">92<span className="text-2xl text-slate-400">/100</span></h2>
              </div>
              <p className="text-sm font-medium text-emerald-400 mt-2">Excellent! Your property is highly bookable.</p>
            </div>
            
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Star className="w-10 h-10 text-amber-400 fill-amber-400" />
            </div>
          </div>
        </div>

        {/* Review Checklist */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4">Application Summary</h3>
          
          <div className="space-y-4">
            {sections.map((sec, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  {sec.complete && !sec.warning ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-amber-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                  )}
                  <span className="font-bold text-slate-700">{sec.name}</span>
                </div>
                <span className={cn(
                  "text-xs font-bold px-2 py-1 rounded-md",
                  sec.warning ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"
                )}>
                  {sec.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-4">
          <p className="text-xs font-bold text-slate-400">By submitting, you agree to Racoonn's Partner Terms and Conditions.</p>
        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-6 flex items-center justify-between pb-10">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onSubmit} className="bg-[#E86A70] hover:bg-[#d65d60] text-white rounded-full px-10 h-14 text-lg font-bold shadow-[0_0_30px_rgba(232,106,112,0.3)] hover:scale-105 transition-all">
          Submit For Approval
        </Button>
      </motion.div>
    </motion.div>
  );
}
