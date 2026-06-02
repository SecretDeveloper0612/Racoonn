import { CheckCircle2, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle2 size={32} className="text-brand-coral" />,
    title: 'Seamless Booking',
    description: 'Experience a smooth and hassle-free booking process from search to confirmation in just a few clicks.'
  },
  {
    icon: <ShieldCheck size={32} className="text-brand-coral" />,
    title: 'Trusted Stays',
    description: 'Every property on Racoonn is verified and reviewed to ensure you get exactly what you expect.'
  },
  {
    icon: <CreditCard size={32} className="text-brand-coral" />,
    title: 'Secure Payments',
    description: 'Your transactions are encrypted and secured with industry-leading payment gateways.'
  },
  {
    icon: <Headphones size={32} className="text-brand-coral" />,
    title: '24/7 Support',
    description: 'Our dedicated travel experts are always available to help you before, during, and after your trip.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Racoonn</h2>
          <p className="text-brand-sky/80">We redefine travel by combining luxury, trust, and convenience into one seamless platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="bg-brand-coral/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-brand-sky/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
