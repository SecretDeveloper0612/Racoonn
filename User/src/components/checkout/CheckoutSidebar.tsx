"use client";
import React from "react";
import { useCheckoutStore } from "@/store/checkoutStore";
import { BookingSummary } from "@/components/checkout/BookingSummary";
import { TrustBadges } from "@/components/checkout/TrustBadges";
import { CancellationPolicy } from "@/components/checkout/CancellationPolicy";

export function CheckoutSidebar({
  roomName,
  price,
  nights,
  taxes,
  addons,
  discount
}: {
  roomName?: string;
  price: number;
  nights: number;
  taxes: number;
  addons: number;
  discount: number;
}) {
  const currentStep = useCheckoutStore((state) => state.currentStep);

  if (currentStep === 4) return null;

  return (
    <div className="w-full lg:w-[400px] shrink-0">
      <div className="sticky top-28 space-y-6 transition-all duration-300">
        <BookingSummary 
          roomName={roomName}
          pricePerNight={price}
          nights={nights}
          taxes={taxes}
          addons={addons}
          discount={discount}
        />
        <TrustBadges />
        <CancellationPolicy />
      </div>
    </div>
  );
}
