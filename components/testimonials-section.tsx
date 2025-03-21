"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote:
        "The team transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote:
        "We've worked with many contractors over the years, but none have matched the professionalism and quality of this team. They delivered our project on time and within budget.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      quote:
        "As a designer, I appreciate working with remodelers who understand vision and execute with precision. This team consistently delivers exceptional results for our mutual clients.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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

    // Animate testimonials
    if (testimonialsRef.current) {
      gsap.fromTo(
        ".testimonial-card",
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
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

  // Animate testimonial change
  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".testimonial-card", {
      opacity: 0,
      x: -50,
      duration: 0.3,
      onComplete: () => {
        gsap.fromTo(".testimonial-card", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 })
      },
    })

    return () => {
      tl.kill()
    }
  }, [currentIndex])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
            <div className="title-underline h-1 bg-primary w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their remodeling experience.
          </p>
        </div>

        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto">
          <div className="testimonial-card bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  width={96}
                height={96}
                />
              </div>
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">&quot;{testimonials[currentIndex].quote}&quot;</blockquote>
                <div className="font-bold">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-primary w-6" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

