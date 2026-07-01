import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import ServicesSection from '../components/home/ServicesSection'
import NGOSection from '../components/home/NGOSection'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

const Home = () => {
  return (
    <div className="space-y-16 py-10">
      <HeroSection />
      <StatsSection />
      {/* <ServicesSection /> */}
      <NGOSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home
