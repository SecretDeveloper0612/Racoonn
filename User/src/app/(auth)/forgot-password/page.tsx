import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <>
      <Link href="/signin" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-coral mb-8 transition-colors group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to sign in
      </Link>

      <div className="mb-10">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy mb-3 tracking-tight">Reset Password</h2>
        <p className="text-gray-500 text-lg">Enter your email address and we'll send you a link to reset your password.</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-brand-navy">Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-brand-coral focus:ring-4 focus:ring-brand-coral/10 transition-all placeholder:text-gray-400 text-brand-navy shadow-sm"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-brand-navy text-white py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_8px_30px_rgb(31,46,74,0.2)] hover:shadow-[0_8px_30px_rgb(31,46,74,0.3)] hover:-translate-y-0.5 active:translate-y-0"
        >
          Send Reset Link
        </button>
      </form>
    </>
  );
}
