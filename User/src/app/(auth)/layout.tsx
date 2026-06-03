import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/Racoon-icon-White.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex w-full font-sans bg-white">
      {/* Left Side - Luxury Image Background */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] lg:w-[50%] p-14 text-white relative overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Stay"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>

        <div className="relative z-10">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
            <Image src={logo} alt="Racoonn Logo" width={180} height={45} className="h-10 w-auto object-contain" />
          </Link>
        </div>
        
        <div className="relative z-10 max-w-xl mt-auto mb-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white uppercase">Premium Collection</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.15] text-white tracking-tight text-balance">
            Discover Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-[#ff8a90]">Next Escape</span>
          </h1>
          <p className="text-white/80 text-xl leading-relaxed font-light max-w-md">
            Join an exclusive network of travelers. Unlock hidden gems and manage your journeys with elegance.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between mt-8 border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm font-medium">
            &copy; {new Date().getFullYear()} Racoonn.
          </p>
          <div className="flex gap-6 text-sm text-white/80 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 relative overflow-y-auto bg-white">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-10 self-start w-full flex justify-center mt-8">
           <Link href="/">
             <span className="text-3xl font-heading font-extrabold text-brand-navy tracking-tight">Racoonn</span>
           </Link>
        </div>
        
        <div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out my-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
