import Link from 'next/link';

export default function SignUpPage() {
  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy mb-3 tracking-tight">Create an Account</h2>
        <p className="text-gray-500 text-lg">Join us to discover your perfect stay.</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-brand-navy">First Name</label>
            <input 
              type="text" 
              placeholder="John" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-brand-navy shadow-sm"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-brand-navy">Last Name</label>
            <input 
              type="text" 
              placeholder="Doe" 
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-brand-navy shadow-sm"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-brand-navy">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-brand-navy shadow-sm"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-brand-navy">Password</label>
          <input 
            type="password" 
            placeholder="Create a secure password" 
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-brand-navy shadow-sm tracking-widest"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-coral text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#d95d63] transition-all shadow-[0_8px_30px_rgb(232,106,112,0.3)] hover:shadow-[0_8px_30px_rgb(232,106,112,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 mt-4"
        >
          Create Account
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </form>

      <div className="relative flex items-center my-8">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">or continue with</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="flex mb-8">
        <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:shadow-md transition-all font-semibold text-gray-700 shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Google
        </button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 font-medium">
          Already have an account?{' '}
          <Link href="/signin" className="text-brand-navy font-bold hover:text-brand-coral transition-colors underline-offset-4 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
