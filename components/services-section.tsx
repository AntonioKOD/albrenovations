"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Home, Paintbrush, Bath, CookingPotIcon as Kitchen, Sofa, Hammer } from "lucide-react"
import { TextRoll } from "./motion-primitives/text-roll"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Service = ({ icon, title, description }: ServiceProps) => {
  const serviceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (serviceRef.current) {
      gsap.fromTo(
        serviceRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <div
      ref={serviceRef}
      className="bg-card p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animate the underline
      gsap.fromTo(
        ".title-underline",
        { width: 0 },
        {
          width: "100%",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const services = [
    {
      icon: <Home size={28}  className="text-primary"/>,
      title: "Full Home Renovation",
      description: "Complete transformation of your living space with custom designs and quality craftsmanship.",
    },
    {
      icon: <Kitchen size={28} className="text-primary"/>,
      title: "Kitchen Remodeling",
      description: "Modern kitchen designs with premium materials and efficient layouts for the heart of your home.",
    },
    {
      icon: <Bath size={28} className="text-primary"/>,
      title: "Bathroom Renovation",
      description: "Luxurious bathroom upgrades with stylish fixtures, custom tiling, and elegant finishes.",
    },
    {
      icon: <Paintbrush size={28} className="text-primary"/>,
      title: "Interior Design",
      description:
        "Professional interior design services to create cohesive, beautiful spaces that reflect your style.",
    },
    {
      icon: <Sofa size={28} className="text-primary"/>,
      title: "Custom Cabinetry",
      description: "Handcrafted cabinetry and built-ins designed for both functionality and aesthetic appeal.",
    },
    {
      icon: <Hammer size={28} className="text-primary"/>,
      title: "Structural Improvements",
      description: "Expert structural modifications to improve flow, functionality, and value of your property.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <div ref={titleRef}>
          <TextRoll className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </TextRoll>
          </div>
          <div className="title-underline h-1 bg-primary w-24 mx-auto mt-4 mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive remodeling services to transform your space into the home of your dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

