import HeroSection from '@/components/home/HeroSection';
import PopularStays from '@/components/home/PopularStays';
import PopularDestinations from '@/components/home/PopularDestinations';
import TourPackages from '@/components/home/TourPackages';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularStays />
      <PopularDestinations />
      <TourPackages />
    </>
  );
}
