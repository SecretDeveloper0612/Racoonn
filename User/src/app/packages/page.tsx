import Image from 'next/image';
import { packages } from '@/data/packages';
import TourCard from '@/components/packages/TourCard';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center pt-20">
        <Image
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format&fit=crop"
          alt="Curated Tour Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-4 drop-shadow-md">
            Curated <span className="text-brand-coral">Packages</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow">
            Discover handpicked tour packages that promise an unforgettable journey.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="h-full">
              <TourCard pkg={pkg} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
