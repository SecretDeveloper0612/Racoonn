"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Mail, Smartphone, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Step2Verification({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [mobileOtp, setMobileOtp] = useState(["", "", "", "", "", ""]);
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);

  // Focus management omitted for brevity in mock, just visual simulation

  const handleVerify = () => {
    // Mock verify
    setEmailVerified(true);
    setMobileVerified(true);
    setTimeout(() => {
      onNext();
    }, 1000);
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
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',_sans-serif]">Verify your details</h1>
        <p className="text-slate-500 font-medium">We've sent verification codes to your email and mobile number to ensure account security.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-8">
        
        {/* Email Verification Box */}
        <div className={cn("p-6 rounded-2xl border-2 transition-all duration-300", emailVerified ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white")}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", emailVerified ? "bg-emerald-100 text-emerald-600" : "bg-blue-50 text-blue-500")}>
                {emailVerified ? <CheckCircle2 className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Email Address</h3>
                <p className="text-sm font-medium text-slate-500">jane@example.com</p>
              </div>
            </div>
            {emailVerified && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md uppercase tracking-wider">Verified</span>}
          </div>
          
          {!emailVerified && (
            <div className="flex gap-2 justify-center mt-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input 
                  key={i} 
                  type="text" 
                  maxLength={1} 
                  className="w-12 h-14 text-center text-xl font-black text-slate-800 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E86A70] focus:ring-2 focus:ring-[#E86A70]/20 outline-none transition-all"
                  value={emailOtp[i]}
                  onChange={(e) => {
                    const newOtp = [...emailOtp];
                    newOtp[i] = e.target.value;
                    setEmailOtp(newOtp);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile Verification Box */}
        <div className={cn("p-6 rounded-2xl border-2 transition-all duration-300", mobileVerified ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white")}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", mobileVerified ? "bg-emerald-100 text-emerald-600" : "bg-amber-50 text-amber-500")}>
                {mobileVerified ? <CheckCircle2 className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Mobile Number</h3>
                <p className="text-sm font-medium text-slate-500">+91 98765 43210</p>
              </div>
            </div>
            {mobileVerified && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md uppercase tracking-wider">Verified</span>}
          </div>
          
          {!mobileVerified && (
            <div className="flex gap-2 justify-center mt-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input 
                  key={`m${i}`} 
                  type="text" 
                  maxLength={1} 
                  className="w-12 h-14 text-center text-xl font-black text-slate-800 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#E86A70] focus:ring-2 focus:ring-[#E86A70]/20 outline-none transition-all"
                  value={mobileOtp[i]}
                  onChange={(e) => {
                    const newOtp = [...mobileOtp];
                    newOtp[i] = e.target.value;
                    setMobileOtp(newOtp);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleVerify} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          Verify & Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
