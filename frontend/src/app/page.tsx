import HomePage from './(public)/page'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <main className="pt-20 md:pt-[120px]">
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
