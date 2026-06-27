import Hero from '@/components/Hero'
import RolesSection from '@/components/RolesSection'
import HowItWorks from '@/components/HowItWorks'
import WhyAutari from '@/components/WhyAutari'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <RolesSection />
      <HowItWorks />
      <WhyAutari />
      <FAQ />
      <Footer />
    </main>
  )
}
