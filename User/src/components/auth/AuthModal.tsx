'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/assets/Racoon-icon-White.png';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'signin' | 'signup' | 'forgot';
}

export default function AuthModal({ isOpen, onClose, initialView = 'signin' }: AuthModalProps) {
  const [view, setView] = useState<'signin' | 'signup' | 'forgot'>(initialView);

  // Sync state when modal opens
  useEffect(() => {
    if (isOpen) setView(initialView);
  }, [isOpen, initialView]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/60 z-[200] backdrop-blur-sm transform-gpu"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative transform-gpu"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-[28px] font-heading font-bold text-[#222] mb-1 tracking-tight">
                    {view === 'signin' ? 'Welcome back' : view === 'signup' ? 'Create account' : 'Reset password'}
                  </h2>
                  <p className="text-gray-500 text-[14px]">
                    {view === 'signin' 
                      ? 'Enter your details to access your account.' 
                      : view === 'signup'
                      ? 'Join us to unlock the best travel experiences.'
                      : "Enter your email and we'll send you a reset link."}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {view === 'signup' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[12px] font-semibold text-gray-700 uppercase tracking-wide">First Name</label>
                        <input 
                          type="text" 
                          placeholder="John" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all text-[15px]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Last Name</label>
                        <input 
                          type="text" 
                          placeholder="Doe" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all text-[15px]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all text-[15px]"
                    />
                  </div>
                  
                  {view !== 'forgot' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-[12px] font-semibold text-gray-700 uppercase tracking-wide">Password</label>
                        {view === 'signin' && (
                          <button type="button" onClick={() => setView('forgot')} className="text-[12px] font-bold text-brand-coral hover:text-[#d95d63] transition-colors">
                            Forgot password?
                          </button>
                        )}
                      </div>
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all text-[15px] tracking-widest"
                      />
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="w-full bg-[#222] hover:bg-black text-white py-3.5 rounded-xl font-bold text-[15px] transition-all active:scale-[0.98] mt-2"
                  >
                    {view === 'signin' ? 'Sign In' : view === 'signup' ? 'Create Account' : 'Send reset link'}
                  </button>
                </form>

                {view !== 'forgot' && (
                  <>
                    <div className="relative flex items-center my-6">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink-0 mx-4 text-gray-400 text-[12px] font-medium uppercase tracking-wider">or continue with</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 text-[14px]">
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Continue with Google
                      </button>
                    </div>
                  </>
                )}

                <div className="mt-8 text-center text-[14px]">
                  {view === 'signin' ? (
                    <p className="text-gray-500">
                      Don't have an account?{' '}
                      <button onClick={() => setView('signup')} className="text-[#222] font-bold hover:underline underline-offset-4 transition-all">
                        Sign up
                      </button>
                    </p>
                  ) : view === 'signup' ? (
                    <p className="text-gray-500">
                      Already have an account?{' '}
                      <button onClick={() => setView('signin')} className="text-brand-navy font-bold hover:text-brand-coral transition-colors underline-offset-4 hover:underline">
                        Sign in
                      </button>
                    </p>
                  ) : (
                    <p className="text-gray-500">
                      Remember your password?{' '}
                      <button onClick={() => setView('signin')} className="text-[#222] font-bold hover:underline underline-offset-4 transition-all">
                        Back to sign in
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
