"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! We will get back to you soon.")
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

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animate form inputs
      gsap.fromTo(
        ".form-control",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    // Animate info section
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Animate info items
      gsap.fromTo(
        ".info-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: infoRef.current,
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

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
            <div className="title-underline h-1 bg-primary w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a free consultation and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <div className="mb-6 form-control">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6 form-control">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6 form-control">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="mb-6 form-control">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-300"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="form-control">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-300"
              >
                Send Message <Send size={16} />
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div ref={infoRef} className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="info-item flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>

                <div className="info-item flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@remodelx.com</p>
                  </div>
                </div>

                <div className="info-item flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Office</h4>
                    <p className="text-muted-foreground">
                      123 Renovation Street
                      <br />
                      Suite 456
                      <br />
                      Design City, DC 78901
                    </p>
                  </div>
                </div>

                <div className="info-item flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8am - 6pm
                      <br />
                      Saturday: 9am - 2pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 info-item">
              <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Ready to start your remodeling journey? Schedule a free consultation with our design experts.
              </p>
              <AnimatedButton text="Schedule" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

