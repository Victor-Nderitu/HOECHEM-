'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/components/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MemberDashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f8f9fb]">
        <div className="w-10 h-10 border-4 border-[#006d38] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
