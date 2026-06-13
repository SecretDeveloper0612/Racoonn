"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Building, ShieldCheck, UploadCloud } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Step8Banking({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [verified, setVerified] = useState(false);

  const slideUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleVerify = () => {
    setVerified(true);
  }

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col h-full max-w-xl mx-auto w-full pt-8"
    >
      <motion.div variants={slideUp} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',_sans-serif]">Receive your payouts</h1>
        <p className="text-slate-500 font-medium">Add the bank account where you want to receive your earnings. This must match your business name.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-5">
        
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-4 items-start mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm text-blue-900 font-bold mb-1">Bank-level Encryption</p>
            <p className="text-xs text-blue-700/80 font-medium">Your bank details are encrypted and securely stored. We never share this information with guests.</p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Account Holder Name</label>
          <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-bold" placeholder="Racoonn Hospitality Pvt Ltd" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Bank Account Number</label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input className="h-12 pl-10 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-bold tracking-widest" placeholder="•••• •••• •••• 1234" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">IFSC Code</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-bold uppercase" placeholder="HDFC0001234" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Bank Name</label>
            <Input className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all font-medium text-slate-500" value="HDFC Bank" readOnly />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex justify-between">
            Upload Cancelled Cheque
            {verified && <span className="text-emerald-500 flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> Verified</span>}
          </label>
          <div className={cn(
            "border-2 border-dashed rounded-2xl p-6 text-center transition-colors cursor-pointer flex items-center justify-center gap-4",
            verified ? "border-emerald-500 bg-emerald-50" : "border-slate-300 hover:bg-slate-50"
          )} onClick={handleVerify}>
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", verified ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500")}>
               {verified ? <ShieldCheck className="w-6 h-6" /> : <UploadCloud className="w-6 h-6" />}
            </div>
            <div className="text-left">
              <p className={cn("text-sm font-bold", verified ? "text-emerald-700" : "text-slate-700")}>
                {verified ? "Cheque_HDFC_Verified.pdf" : "Click to upload cheque"}
              </p>
              {!verified && <p className="text-xs text-slate-500">JPG or PDF (Max 2MB)</p>}
            </div>
          </div>
        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          KYC Verification <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
