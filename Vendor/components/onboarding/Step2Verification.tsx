"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Mail, Smartphone, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Step2Verification({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const [selectedMethod, setSelectedMethod] = useState<"email" | "mobile">("email");
  const [codeSentTo, setCodeSentTo] = useState<"email" | "mobile" | null>(null);
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [mobileOtp, setMobileOtp] = useState(["", "", "", "", "", ""]);
  const [verifiedMethod, setVerifiedMethod] = useState<"email" | "mobile" | null>(null);

  const handleVerify = () => {
    // Mock verify for the currently selected method
    setVerifiedMethod(selectedMethod);
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
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight font-heading">Verify your identity</h1>
        <p className="text-slate-500 font-medium">Please choose where you would like us to send your security verification code.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-4">
        
        {/* Email Verification Box */}
        <div 
          onClick={() => !verifiedMethod && setSelectedMethod("email")}
          className={cn(
            "p-6 rounded-2xl border-2 transition-all duration-300", 
            !verifiedMethod && "cursor-pointer",
            verifiedMethod === "email" ? "border-emerald-500 bg-emerald-50 shadow-sm" : 
            selectedMethod === "email" ? "border-rose-500 bg-rose-50/30 shadow-md ring-4 ring-rose-500/10" : "border-slate-200 bg-white hover:border-slate-300"
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-colors", 
                verifiedMethod === "email" ? "bg-emerald-100 text-emerald-600" : 
                selectedMethod === "email" ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-500"
              )}>
                {verifiedMethod === "email" ? <CheckCircle2 className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Email Address</h3>
                <p className="text-sm font-medium text-slate-500">jane@example.com</p>
              </div>
            </div>
            {verifiedMethod === "email" && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Verified</span>}
            {selectedMethod === "email" && !verifiedMethod && <span className="text-xs font-bold text-rose-600 bg-rose-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Selected</span>}
          </div>
          
          {selectedMethod === "email" && verifiedMethod !== "email" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              className="mt-6 pt-6 border-t border-rose-100/50"
            >
              {codeSentTo === "email" ? (
                <>
                  <p className="text-center text-sm font-medium text-slate-600 mb-4">Enter the 6-digit code sent to your email</p>
                  <div className="flex gap-2 sm:gap-3 justify-center">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <input 
                        key={i} 
                        type="text" 
                        maxLength={1} 
                        className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-black text-slate-800 rounded-xl border border-slate-200 bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all shadow-sm"
                        value={emailOtp[i]}
                        onChange={(e) => {
                          const newOtp = [...emailOtp];
                          newOtp[i] = e.target.value;
                          setEmailOtp(newOtp);
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCodeSentTo("email");
                    }} 
                    className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 h-11 font-semibold"
                  >
                    Send Code to Email
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Mobile Verification Box */}
        <div 
          onClick={() => !verifiedMethod && setSelectedMethod("mobile")}
          className={cn(
            "p-6 rounded-2xl border-2 transition-all duration-300", 
            !verifiedMethod && "cursor-pointer",
            verifiedMethod === "mobile" ? "border-emerald-500 bg-emerald-50 shadow-sm" : 
            selectedMethod === "mobile" ? "border-rose-500 bg-rose-50/30 shadow-md ring-4 ring-rose-500/10" : "border-slate-200 bg-white hover:border-slate-300"
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-colors", 
                verifiedMethod === "mobile" ? "bg-emerald-100 text-emerald-600" : 
                selectedMethod === "mobile" ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-500"
              )}>
                {verifiedMethod === "mobile" ? <CheckCircle2 className="w-6 h-6" /> : <Smartphone className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Mobile Number</h3>
                <p className="text-sm font-medium text-slate-500">+91 98765 43210</p>
              </div>
            </div>
            {verifiedMethod === "mobile" && <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Verified</span>}
            {selectedMethod === "mobile" && !verifiedMethod && <span className="text-xs font-bold text-rose-600 bg-rose-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Selected</span>}
          </div>
          
          {selectedMethod === "mobile" && verifiedMethod !== "mobile" && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              className="mt-6 pt-6 border-t border-rose-100/50"
            >
              {codeSentTo === "mobile" ? (
                <>
                  <p className="text-center text-sm font-medium text-slate-600 mb-4">Enter the 6-digit code sent to your phone</p>
                  <div className="flex gap-2 sm:gap-3 justify-center">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <input 
                        key={`m${i}`} 
                        type="text" 
                        maxLength={1} 
                        className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-black text-slate-800 rounded-xl border border-slate-200 bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 outline-none transition-all shadow-sm"
                        value={mobileOtp[i]}
                        onChange={(e) => {
                          const newOtp = [...mobileOtp];
                          newOtp[i] = e.target.value;
                          setMobileOtp(newOtp);
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCodeSentTo("mobile");
                    }} 
                    className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 h-11 font-semibold"
                  >
                    Send Code to Phone
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleVerify} className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-slate-900/20 transition-all">
          Verify & Continue <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
