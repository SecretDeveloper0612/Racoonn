"use client";
import { AlertCircle, Lock } from "lucide-react";
import Link from "next/link";
import { useCheckoutStore } from "@/store/checkoutStore";

export function CancellationPolicy() {
  const { currentStep, nextStep } = useCheckoutStore();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#DCE8F5] p-6">
      <h3 className="font-bold text-[#1F2E4A] mb-3 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-[#E86A70]" /> Cancellation Policy
      </h3>
      <div className="space-y-3 text-sm">
        <p className="text-gray-600">
          <span className="font-bold text-green-600">Free cancellation</span> until:
          <br />
          <span className="font-medium text-[#1F2E4A]">10 Aug 2026, 11:59 PM (Local time)</span>
        </p>
        <p className="text-gray-500 text-xs leading-relaxed">
          If you cancel after the deadline or fail to show up, you will be charged the total price of the reservation.
        </p>
        <button className="text-[#E86A70] font-medium text-sm hover:underline outline-none">
          Read Full Policy
        </button>
      </div>

    </div>
  );
}

