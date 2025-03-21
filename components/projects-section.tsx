"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Complete kitchen renovation with custom cabinetry, quartz countertops, and high-end appliances for a modern family home.",
    },
    {
      id: 2,
      title: "Luxury Master Bathroom",
      category: "Bathroom",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Spa-like master bathroom with heated floors, walk-in shower, freestanding tub, and custom vanity.",
    },
    {
      id: 3,
      title: "Open Concept Living Space",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description:
        "Transformation of compartmentalized rooms into an open, airy living space with improved flow and natural light.",
    },
    {
      id: 4,
      title: "Contemporary Home Office",
      category: "Office",
      image:
        "https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Custom home office with built-in shelving, ergonomic workspace, and integrated technology solutions.",
    },
    {
      id: 5,
      title: "Basement Entertainment Area",
      category: "Basement",
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Unfinished basement converted into a multi-functional entertainment space with home theater and wet bar.",
    },
    {
      id: 6,
      title: "Outdoor Living Extension",
      category: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Custom deck and patio design with outdoor kitchen, fire pit, and comfortable seating areas.",
    },
  ]

  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
          y: 100,
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
  }, [activeCategory])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
            <div className="title-underline h-1 bg-primary w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our portfolio of successful remodeling projects that have transformed homes across the region.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category ? "bg-primary text-white" : "bg-card hover:bg-card/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:border-primary transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                    height={600}
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

