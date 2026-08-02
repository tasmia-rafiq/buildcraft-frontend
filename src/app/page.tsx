import About from "@/components/about/About";
import ContactSection from "@/components/contact/ContactSection";
import CTABanner from "@/components/cta-banner/CTABanner";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import WhyUsSection from "@/components/services/WhyUsSection";
import StatsSection from "@/components/stats/StatsSection";
import TeamSection from "@/components/team/TeamSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import TrustedBySection from "@/components/TrustedBySection";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBySection />
      <About />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </>
  )
}
