"use client";
import React from "react";
import { useCheckoutStore } from "@/store/checkoutStore";
import { GuestDetailsForm } from "@/components/checkout/GuestDetailsForm";
import { TravelersForm } from "@/components/checkout/TravelersForm";
import { AddonSelector } from "@/components/checkout/AddonSelector";
import { CheckCircle } from "lucide-react";

export function CheckoutFlow() {
  const currentStep = useCheckoutStore((state) => state.currentStep);
  const nextStep = useCheckoutStore((state) => state.nextStep);
  const prevStep = useCheckoutStore((state) => state.prevStep);

  return (
    <div className="flex-1 space-y-8 min-w-0">
      {currentStep === 3 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <GuestDetailsForm />
          <TravelersForm />
          <AddonSelector />
          <div className="flex justify-end hidden md:flex">
            <button 
              onClick={nextStep}
              className="bg-[#E86A70] hover:bg-[#d65f64] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-[#E86A70]/30 transition-transform active:scale-[0.98]"
            >
              Complete Booking
            </button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-[#1F2E4A] mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your booking at Grand Ocean Resort has been successfully confirmed. A confirmation email has been sent to your inbox.
            </p>
            <div className="p-6 bg-[#F4F0EA] rounded-xl inline-block text-left mb-8">
              <p className="text-sm text-gray-500 mb-1">Booking Reference ID</p>
              <p className="text-xl font-bold text-[#1F2E4A]">RCN-8849-2A</p>
            </div>
            <div>
              <button 
                onClick={() => window.location.href = "/"}
                className="bg-[#1F2E4A] hover:bg-[#1F2E4A]/90 text-white font-bold py-3 px-8 rounded-xl transition-transform active:scale-[0.98]"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
