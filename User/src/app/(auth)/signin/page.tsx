import Link from 'next/link';

export default function SignInPage() {
  return (
    <>
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-[32px] font-heading font-bold text-[#222] mb-2 tracking-tight">Welcome back</h2>
        <p className="text-gray-500 text-[15px]">Enter your details to access your account.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-[13px] font-semibold text-gray-700 uppercase tracking-wide">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-[#222] text-[15px]"
            required
          />
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-[13px] font-semibold text-gray-700 uppercase tracking-wide">Password</label>
            <Link href="/forgot-password" className="text-[13px] font-bold text-brand-coral hover:text-[#d95d63] transition-colors">
              Forgot password?
            </Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-[#222] text-[15px] tracking-widest"
            required
          />
        </div>

        <div className="flex items-center pt-2 pb-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5">
              <input type="checkbox" className="peer appearance-none w-5 h-5 rounded border border-gray-300 checked:bg-[#222] checked:border-[#222] transition-all cursor-pointer" />
              <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Keep me signed in</span>
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#222] hover:bg-black text-white py-4 rounded-xl font-bold text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Sign In
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </form>

      <div className="relative flex items-center my-8">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink-0 mx-4 text-gray-400 text-[13px] font-medium uppercase tracking-wider">or continue with</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="flex mb-8">
        <button type="button" className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-[#222] text-[15px]">
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 text-[14px]">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#222] font-bold hover:underline underline-offset-4 transition-all">
            Create account
          </Link>
        </p>
      </div>
    </>
  );
}
