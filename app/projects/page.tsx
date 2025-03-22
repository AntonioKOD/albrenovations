'use client'
import gsap from 'gsap'
import ProjectSection from '@/components/project'
import {ReactNode, useEffect, useRef} from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa'

const projects: {
  title: string;
  description: string;
  content: string;
  icon: ReactNode;
  imagePosition: 'left' | 'right';
  image: {
    src: string;
    alt: string;
  };
}[] = [
    {
      title: "Modern Oasis",
      description: "A sleek, contemporary residence with open spaces and smart design.",
      content:
        "This project showcases innovative architecture with an emphasis on clean lines and natural light. Our Modern Oasis is designed for comfort and sustainability, offering a perfect retreat from the everyday.",
      icon: <FaHome size={24} />,
      imagePosition: "left",
      image: {
        src: "https://source.unsplash.com/800x600/?modern-house",
        alt: "Modern House",
      },
    },
    {
      title: "Classic Elegance",
      description: "Timeless architecture blending tradition with modern flair.",
      content:
        "Classic Elegance reflects a refined balance of historical design and contemporary sophistication. Every detail is meticulously crafted to offer a luxurious living experience.",
      icon: <FaBuilding size={24} />,
      imagePosition: "right",
      image: {
        src: "https://source.unsplash.com/800x600/?classic-house",
        alt: "Classic House",
      },
    },
    {
      title: "Urban Retreat",
      description: "A sophisticated urban home that balances vibrant city life with tranquility.",
      content:
        "Urban Retreat is designed for those who crave a peaceful sanctuary amidst the urban hustle. Innovative layouts and bespoke finishes create an ideal environment for modern city living.",
      icon: <FaCity size={24} />,
      imagePosition: "left",
      image: {
        src: "https://source.unsplash.com/800x600/?urban-house",
        alt: "Urban House",
      },
    },
  ];

export default function About(){
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    const buttonRef = useRef(null)
    const sectionRef = useRef(null)
    const historyRef = useRef(null)
    const valuesRef = useRef(null)
    const teamRef = useRef(null)
    const projectsRef = useRef(null)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set([headingRef.current, paragraphRef.current, buttonRef.current], {
            opacity: 0,
            y: 20,
        })

        const tl = gsap.timeline({defaults: {ease: "power3.out"}})

        tl.to(headingRef.current, {y: 0, opacity: 1, duration: 0.8, delay: 0.2})
        tl.to(paragraphRef.current, {y: 0, opacity: 1, duration: 0.7}, "-=0.5")
        tl.to(buttonRef.current, {y: 0, opacity: 1, duration: 0.6}, "-=0.4")

        // Animate sections when scrolled into view
        const sections = [historyRef.current, valuesRef.current, teamRef.current, projectsRef.current]
        
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className='w-full'>
            {/* Hero Section */}
            <div ref={sectionRef} className='relative h-screen w-full'>
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: "center"}}>

                    <div className='absolute inset-0 bg-black/40'></div>
                </div>
                <div className='relative h-full flex items-center'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
                        <div className='max-w-2xl'>
                            <h1 ref={headingRef} className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
                            OUR CREATIONS
                            </h1>
                            <p ref={paragraphRef} className="text-xl text-white/90 mb-8">
                            At Construct Concepts, each project is a masterpiece of creativity and precision. From sleek modern residences to timeless classics, we build spaces tailored specifically to your vision. Explore our recent creations and witness how we transform concepts into extraordinary living experiences. Your dream, our craftsmanship—let&apos;s build something remarkable together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {projects.map((project, index) => (
                    <ProjectSection
                    key={index}
                    title={project.title}
                    description={project.description}
                    content={project.content}
                    icon={project.icon}
                    imagePosition={project.imagePosition as 'left' | 'right'}
                    image={project.image}
                    />
                ))}
            </div>

        </div>
    )
}
