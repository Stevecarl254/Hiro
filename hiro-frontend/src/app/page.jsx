import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsAndTestimonials from "@/components/stats-and-testimonials"
import EventsSection from "@/components/events-section"
import WhoWeAre from "@/components/who-we-are"
import GallerySection from "@/components/gallery-section"
import WhyHiro from "@/components/why-hiro"
import MeetOurTeam from "@/components/meet-our-team"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <EventsSection />
      <StatsAndTestimonials />
      <GallerySection />
      <WhyHiro />
      <MeetOurTeam />
      <Footer />
    </main>
  )
}
