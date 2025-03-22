
import HeroSection from "@/components/hero"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  )
}

