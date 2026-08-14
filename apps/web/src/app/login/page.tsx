'use client';

import { useState } from 'react';
import { useAuth } from '@/components/providers/AuthProvider';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { access_token, user } = response.data;
      
      login(access_token, user);
      toast.success('Login successful');
      
      if (user.role === 'ADMIN' || user.role === 'SUPER_ADMIN') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2f4f6] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e1e2e4]/50 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0b1b3f]">HOECHEM SACCO</h1>
          <p className="text-[#45464e] mt-2 text-sm">Sign in to your member portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#00020d] mb-1.5">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#e1e2e4] focus:outline-none focus:border-[#006d38] focus:ring-1 focus:ring-[#006d38] transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#00020d] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#e1e2e4] focus:outline-none focus:border-[#006d38] focus:ring-1 focus:ring-[#006d38] transition-all"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-[#45464e]">
              <input type="checkbox" className="rounded text-[#006d38] focus:ring-[#006d38]" />
              Remember me
            </label>
            <a href="#" className="text-[#006d38] font-semibold hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0b1b3f] text-white py-3 rounded-xl font-bold hover:bg-[#1a3060] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-[#45464e] mt-6">
          Not a member yet?{' '}
          <Link href="/membership" className="text-[#006d38] font-bold hover:underline">
            Apply for Membership
          </Link>
        </p>
      </div>
    </div>
  );
}
