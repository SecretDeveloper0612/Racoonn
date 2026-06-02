import { Search, MousePointerClick, CalendarCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search size={40} className="text-brand-coral" />,
    title: '1. Search',
    description: 'Enter your destination, travel dates, and group size to browse thousands of verified properties.'
  },
  {
    icon: <MousePointerClick size={40} className="text-brand-coral" />,
    title: '2. Select',
    description: 'Filter by price, amenities, and ratings to find the perfect stay that matches your needs.'
  },
  {
    icon: <CalendarCheck size={40} className="text-brand-coral" />,
    title: '3. Book',
    description: 'Secure your reservation instantly with our safe payment gateway and receive instant confirmation.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-brand-sky/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">How It Works</h2>
          <p className="text-brand-charcoal/70">Booking your dream vacation has never been this easy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-brand-sky/60 border-t border-dashed border-brand-charcoal/20 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-brand-charcoal/70 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
