"use client";
import { Lock } from "lucide-react";
import { useCheckoutStore } from "@/store/checkoutStore";

export function MobileCheckoutBar({ total = 25900 }: { total?: number }) {
  const { currentStep, nextStep } = useCheckoutStore();

  if (currentStep === 4) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#DCE8F5] p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Total Amount</p>
          <p className="text-xl font-bold text-[#E86A70]">₹{total.toLocaleString()}</p>
        </div>
        <button 
          onClick={nextStep}
          className="flex-1 bg-[#E86A70] hover:bg-[#d65f64] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#E86A70]/30 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Complete Booking
        </button>
      </div>
    </div>
  );
}
