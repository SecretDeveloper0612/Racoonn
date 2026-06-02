import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-soft-coral rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          
          {/* Background Decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-coral/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-coral/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-4">
              Get 20% Off Your First Luxury Booking
            </h2>
            <p className="text-brand-charcoal/80 text-lg md:text-xl mb-8">
              Sign up today and unlock exclusive member-only deals, early access to new properties, and VIP perks on your travels.
            </p>
            <Link 
              href="/register"
              className="inline-flex items-center gap-2 bg-brand-coral hover:bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl shadow-brand-coral/20"
            >
              Claim Your Discount
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative z-10 hidden md:block">
            {/* Using a structural decorative element instead of an image to keep it clean */}
            <div className="w-64 h-64 border-8 border-white/40 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border-8 border-brand-coral/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
