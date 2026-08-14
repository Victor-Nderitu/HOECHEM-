import type { Metadata } from 'next'
import { AppointmentForm } from '@/components/forms/AppointmentForm'

export const metadata: Metadata = {
  title: 'Book an Appointment | Hoechem SACCO Ltd.',
  description: 'Book a consultation with the Hoechem SACCO team.',
}

export default function AppointmentsPage() {
  return <section className="mx-auto max-w-3xl px-4 py-16 md:px-16">
    <div className="mb-10 text-center"><p className="mb-3 text-xs font-bold tracking-widest text-[#006d38]">PERSONAL SERVICE</p><h1 className="text-4xl font-extrabold text-[#00020d]">Book an appointment</h1><p className="mx-auto mt-4 max-w-xl text-[#45464e]">Choose a preferred time to speak with a Hoechem SACCO representative. We will confirm your appointment by phone or email.</p></div>
    <AppointmentForm />
  </section>
}
