"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { MapPin, Search, Star, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [nights, setNights] = useState(15);
  const nightlyRate = 180;
  const earnings = nights * nightlyRate;

  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E86A70]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Trust-First Copy */}
          <div className="space-y-8 text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-secondary font-bold text-sm mb-8 shadow-sm">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                Trusted by 10,000+ Property Owners Worldwide
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-secondary leading-[1.1] tracking-tight">
                Your property, <br/>
                <span className="text-[#E86A70]">our priority.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mt-6 leading-relaxed max-w-2xl mx-auto xl:mx-0 font-medium">
                Join the most trusted platform in luxury travel. We provide the tools, the protection, and the premium guests you need to succeed.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                <Button className="bg-[#E86A70] hover:bg-[#E86A70]/90 text-white h-14 px-8 rounded-full text-lg font-bold shadow-xl shadow-[#E86A70]/20 transition-all">
                  Start Earning Today
                </Button>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm font-semibold px-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  $3M Protection Included
                </div>
              </div>
            </motion.div>

            {/* Micro Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-8 flex items-center justify-center xl:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <img key={i} src={src} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Host avatar" />
                ))}
              </div>
              <div className="text-left text-sm">
                <p className="font-bold text-secondary">Join the community</p>
                <p className="text-slate-500">of successful hosts</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Interactive Calculator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative xl:ml-auto w-full max-w-lg mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E86A70] to-transparent opacity-50" />
              
              <div className="text-center mb-8">
                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-3 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" /> Your Potential Revenue
                </p>
                <motion.div 
                  key={earnings}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl md:text-7xl font-black text-secondary tracking-tighter"
                >
                  ${earnings.toLocaleString()}
                </motion.div>
                <p className="text-slate-500 font-semibold mt-3 text-sm">
                  Based on ${nightlyRate} / night in your area
                </p>
              </div>

              <div className="space-y-8 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-secondary">
                    <span>Hosting {nights} {nights === 1 ? 'night' : 'nights'} a month</span>
                  </div>
                  <Slider 
                    defaultValue={[15]} 
                    max={30} 
                    min={1} 
                    step={1}
                    onValueChange={(val) => setNights(Array.isArray(val) ? val[0] : (val as number))}
                    className="w-full"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Search className="w-6 h-6 text-[#E86A70]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-secondary">Luxury Villa Setup</p>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
