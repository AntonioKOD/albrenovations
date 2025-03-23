
import HeroSection from "@/components/hero"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import Head from "next/head"


export default function Home() {
  return (
    <>
    <Head>
        <title>Construct Concepts – Innovative Custom Home Construction</title>
        <meta
          name="description"
          content="At Construct Concepts, we blend innovation, craftsmanship, and expertise to build custom homes that reflect your vision. Fully insured & licensed GC."
        />
        <link rel="canonical" href="https://constructconcepts.com" />
        {/* Open Graph */}
        <meta property="og:title" content="Construct Concepts – Innovative Custom Home Construction" />
        <meta
          property="og:description"
          content="At Construct Concepts, we blend innovation, craftsmanship, and expertise to build custom homes that reflect your vision."
        />
        <meta property="og:url" content="https://constructconcepts.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construct Concepts – Innovative Custom Home Construction" />
        <meta
          name="twitter:description"
          content="At Construct Concepts, we blend innovation, craftsmanship, and expertise to build custom homes that reflect your vision."
        />
      </Head>
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
    </>
  )
}

