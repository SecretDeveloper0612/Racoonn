"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe2, ShieldCheck, Headphones, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export function WelcomeScreen({ onNext }: { onNext: () => void }) {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1F2E4A] flex flex-col overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E86A70]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Top Bar */}
      <div className="px-6 md:px-8 py-6 md:py-8 flex justify-between items-center relative z-10 w-full max-w-6xl mx-auto">
        <Image src="/racoonn-logo.png" alt="Racoonn" width={140} height={40} className="h-8 md:h-10 w-auto brightness-0 invert" />
        <Button variant="ghost" className="text-white hover:bg-white/10 font-medium">Have an account? Sign in</Button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto w-full px-6 md:px-8 py-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full max-w-2xl text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">Partner Program Application</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6 font-['Poppins',_sans-serif]">
            Grow your hospitality <span className="text-[#E86A70]">business</span> globally.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Join Racoonn&apos;s premium network. Reach millions of travelers, manage bookings effortlessly, and maximize your revenue.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button onClick={onNext} className="h-16 px-10 bg-[#E86A70] hover:bg-[#d65d60] text-white rounded-full text-lg font-bold shadow-[0_0_30px_rgba(232,106,112,0.3)] hover:scale-105 transition-all">
              Start Registration <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Features/Stats Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-md perspective-1000 hidden md:block"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Why Partner With Us?</h3>
            
            <div className="space-y-6">
              {[
                { icon: Globe2, title: "10,000+ Travelers", desc: "Access a massive global audience.", color: "text-blue-400", bg: "bg-blue-400/10" },
                { icon: ShieldCheck, title: "Secure Payouts", desc: "Automated, on-time bank transfers.", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { icon: Headphones, title: "Dedicated Support", desc: "24/7 priority partner assistance.", color: "text-[#E86A70]", bg: "bg-[#E86A70]/10" },
                { icon: Zap, title: "Fast Onboarding", desc: "List your property in under 10 minutes.", color: "text-amber-400", bg: "bg-amber-400/10" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.bg}`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
