"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { FaHome, FaBuilding, FaCity } from "react-icons/fa"

import secondRemodel from '@/public/construction images/IMG_9990.jpg'

import remodelPic2 from '@/public/construction images/IMG_0249.jpeg'

import outsideRemodel2 from '@/public/construction images/final.jpg'
import kitchenRemodeling from '@/public/construction images/kitchen.jpg'


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "Modern Bathroom Update",
      description: "A sleek, contemporary bathroom remodel that maximizes space and functionality.",
      content:
        "This remodel focuses on a clean, functional design. The space is refreshed with neutral colors, updated fixtures, and easy-to-clean tile flooring.",
      icon: <FaHome size={24} className="text-primary" />,
      image: {
        src: secondRemodel.src, // Replace with your actual image path
        alt: "Modern Bathroom Interior",
      },
    },
    {
      title: "Practical Traditional Bathroom Refresh",
      description: "A classic bathroom update that emphasizes simplicity and functionality.",
      content:
        "Designed for everyday use, this update features new plumbing fixtures, a basic tiled floor, and a refreshed wall color palette.",
      icon: <FaBuilding size={24} className="text-primary" />,
      image: {
        src: remodelPic2, // Replace with your actual image path
        alt: "Classic House Interior",
      },
    },
    {
      title: "Straightforward Building Project",
      description: "A no-frills building project that focuses on practicality and efficiency.",
      content: "This building project adopts a no-frills, functional design with a layout designed for practicality.",
      icon: <FaCity size={24} className="text-primary" />,
      image: {
        src: outsideRemodel2, // Replace with your actual image path
        alt: "Urban House Interior",
      },
    },
    {
      title: "Kitchen Renovation",
      description: "A complete kitchen overhaul with modern appliances and custom cabinetry.",
      content:
        "This kitchen renovation transformed an outdated space into a chef's dream with high-end appliances and custom storage solutions.",
      icon: <FaHome size={24} className="text-primary" />,
      image: {
        src: kitchenRemodeling,
        alt: "Modern Kitchen",
      },
    },
  ]

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

    // Animate project cards
    if (projectsRef.current) {
      gsap.fromTo(
        ".project-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h2>
          <div className="title-underline h-1 bg-primary w-24 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our portfolio of successful remodeling projects that have transformed homes across the region.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2"
            >
              <div className="relative">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image.src || "/placeholder.svg"}
                    alt={project.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-600 text-sm">{project.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

