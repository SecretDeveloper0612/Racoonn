'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/assets/Racoonn-Logo-02.png';
import SearchBar from './SearchBar';

const navLinks = [
  { name: 'Stays', href: '/search' },
  { name: 'Packages', href: '/packages' },
  { name: 'Offers', href: '/search?type=offers' },
  { name: 'About Us', href: '/about' },
  { name: 'Help', href: '/help' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 px-4 bg-transparent pointer-events-none">
      <div className="container mx-auto px-6 lg:px-8 h-[76px] flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full pointer-events-auto transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src={logo} alt="Racoonn Logo" width={180} height={45} className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation / SearchBar */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <SearchBar />
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/list-property"
            className="text-[15px] font-bold text-brand-navy hover:text-brand-coral transition-colors"
          >
            List your property
          </Link>
          <Link
            href="/signin"
            className="bg-brand-coral hover:bg-opacity-90 text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-md shadow-brand-coral/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-coral/30"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="/search"
                className="bg-brand-coral text-center text-white px-6 py-3 rounded-xl font-medium mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Search Hotels
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
