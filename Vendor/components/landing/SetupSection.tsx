"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, HeadphonesIcon, TrendingUp, ArrowRight, Sparkles, BarChart3, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function SetupSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "onboarding",
      title: "1-on-1 Onboarding",
      description: "Get paired with a dedicated success manager who will walk you through your first listing, optimizing your pricing, and getting your first booking.",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      activeBorder: "border-blue-500",
      visual: (
        <div className="w-full h-full relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 flex items-center gap-6 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" className="w-full h-full object-cover rounded-full" alt="Success Manager" />
            </div>
            <div>
              <p className="text-sm text-blue-600 font-bold mb-1">Your Success Manager</p>
              <p className="text-lg font-black text-slate-800">Sarah Jenkins</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-500">Online now</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "support",
      title: "Premium Support",
      description: "Skip the generic chatbots. Gain direct, 24/7 access to our specialized support team based globally to handle any guest issues immediately.",
      icon: HeadphonesIcon,
      color: "text-[#E86A70]",
      bg: "bg-[#E86A70]/10",
      activeBorder: "border-[#E86A70]",
      visual: (
        <div className="w-full h-full relative bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-8 overflow-hidden flex flex-col justify-center">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E86A70]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          <div className="relative z-10 space-y-4 max-w-sm mx-auto w-full">
            <div className="bg-white p-4 rounded-2xl shadow-lg shadow-rose-900/5 rounded-tl-none w-[85%] self-start flex gap-3">
               <div className="w-8 h-8 rounded-full bg-[#E86A70] flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="w-4 h-4 text-white" />
               </div>
               <p className="text-sm font-medium text-slate-700">Hi there! I see your guest is having trouble with the lock. I've just dispatched maintenance.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-2xl shadow-lg rounded-tr-none w-[75%] ml-auto text-white">
               <p className="text-sm font-medium">Wow, that was incredibly fast. Thank you!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "revenue",
      title: "Revenue Optimization",
      description: "Our proprietary AI doesn't just suggest prices; it actively monitors market demand in your area to maximize your yield dynamically.",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      activeBorder: "border-emerald-500",
      visual: (
        <div className="w-full h-full relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 overflow-hidden flex flex-col justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl shadow-emerald-900/5 w-full">
             <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">AI Pricing Adjustments</p>
                  <p className="text-2xl font-black text-slate-800">+$1,240 <span className="text-sm font-medium text-emerald-500">This week</span></p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
             </div>
             <div className="flex items-end gap-2 h-32">
                {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm"
                  />
                ))}
             </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <section id="setup" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-secondary tracking-tight"
          >
            The Racoonn <span className="text-[#E86A70]">Advantage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-medium text-slate-500 mt-6 max-w-2xl mx-auto"
          >
            We don't just list your property; we partner with you to build a highly profitable hospitality business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Interactive Tabs */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "text-left p-6 md:p-8 rounded-3xl transition-all duration-300 border-2 relative overflow-hidden group",
                    isActive 
                      ? `bg-white shadow-xl shadow-slate-200/50 ${feature.activeBorder}` 
                      : "bg-slate-50 border-transparent hover:bg-slate-100"
                  )}
                >
                  <div className="flex items-start gap-6">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300",
                      isActive ? feature.bg : "bg-white shadow-sm text-slate-400"
                    )}>
                      <feature.icon className={cn("w-7 h-7", isActive ? feature.color : "text-slate-400")} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-2xl font-bold mb-3 transition-colors duration-300",
                        isActive ? "text-secondary" : "text-slate-600 group-hover:text-secondary"
                      )}>
                        {feature.title}
                      </h3>
                      <p className={cn(
                        "leading-relaxed transition-colors duration-300",
                        isActive ? "text-slate-600" : "text-slate-500"
                      )}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Visuals */}
          <div className="h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-200/50 border border-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {features[activeIndex].visual}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
