import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsAndTestimonials from "@/components/stats-and-testimonials"
import EventsSection from "@/components/events-section"
import WhoWeAre from "@/components/who-we-are"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <EventsSection />
      <StatsAndTestimonials />
    </main>
  )
}
