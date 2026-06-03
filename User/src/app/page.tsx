import HeroSection from '@/components/home/HeroSection';
import PopularStays from '@/components/home/PopularStays';
import PopularDestinations from '@/components/home/PopularDestinations';
import TourPackages from '@/components/home/TourPackages';
import PopularStaysNainital from '@/components/home/PopularStaysNainital';
import PopularStaysDehradun from '@/components/home/PopularStaysDehradun';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularStays />
      <PopularDestinations />
      <TourPackages />
      <PopularStaysNainital />
      <PopularStaysDehradun />
    </>
  );
}
