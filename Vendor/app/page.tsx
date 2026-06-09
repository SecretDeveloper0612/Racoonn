import { LandingNavbar } from "@/components/landing/Navbar";
import { LandingFooter } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { SetupSection } from "@/components/landing/SetupSection";
import { ProtectionSection } from "@/components/landing/ProtectionSection";
import { FAQSection } from "@/components/landing/FAQContactSection";

import { TrustedBanner } from "@/components/landing/TrustedBanner";
import { TestimonialSection } from "@/components/landing/TestimonialSection";

export default function VendorLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E86A70] selection:text-white pt-20">
      <LandingNavbar />
      
      <main>
        <HeroSection />
        <TrustedBanner />
        <SetupSection />
        <TestimonialSection />
        <ProtectionSection />
        <FAQSection />
      </main>

      <LandingFooter />
    </div>
  );
}
