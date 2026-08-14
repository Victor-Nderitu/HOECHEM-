'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/providers/AuthProvider'
import AdminLayout from '@/components/layout/AdminLayout'

export default function AdminRouteLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  useEffect(() => { if (!isLoading && user?.role !== 'ADMIN' && user?.role !== 'SUPER_ADMIN') router.replace('/dashboard') }, [isLoading, router, user])
  if (isLoading || !user || (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN')) return <div className="flex min-h-screen items-center justify-center bg-[#f8f9fb]"><div className="h-10 w-10 animate-spin rounded-full border-4 border-[#006d38] border-t-transparent" /></div>
  return <AdminLayout>{children}</AdminLayout>
}
