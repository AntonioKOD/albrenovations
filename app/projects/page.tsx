'use client'
import gsap from 'gsap'
import ProjectSection from '@/components/project'
import {ReactNode, useEffect, useRef} from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa'
import firstRemodel from '@/public/construction images/IMG_9989.jpg'
import secondRemodel from '@/public/construction images/IMG_9990.jpg'
import remodelPic from '@/public/construction images/IMG_0234.jpeg'
import remodelPic2 from '@/public/construction images/IMG_0249.jpeg'
import outsideRemodel from '@/public/construction images/IMG_1120.jpeg'
import outsideRemodel2 from '@/public/construction images/final.jpg'
import headImage from '@/public/construction images/IMG_2173.jpg'

const projects: {
  title: string;
  description: string;
  content: string;
  icon: ReactNode;
  imagePosition: 'left' | 'right';
  firstImage: {
    src: string;
    alt: string;
  };
secondImage: {
     src: string;
    alt: string;
};
}[] = [
    {
      title: "Modern Bathroom Update",
      description: "A sleek, contemporary bathroom remodel that maximizes space and functionality.",
      content:
        "This remodel focuses on a clean, functional design. The space is refreshed with neutral colors, updated fixtures, and easy-to-clean tile flooring. A new vanity with practical storage helps keep everyday items organized, while improved lighting makes the space feel bright and efficient.",
      icon: <FaHome size={24} />,
      imagePosition: "left",
      firstImage: {
        src: secondRemodel.src,
        alt: "Previous Bathroom",
      },
        secondImage: {
            src: firstRemodel.src,
            alt: "Modern Bathroom Interior",
        },
    },
    {
      title: "Practical Traditional Bathroom Refresh",
      description: "A classic bathroom update that emphasizes simplicity and functionality.",
      content:
        "Designed for everyday use, this update features new plumbing fixtures, a basic tiled floor, and a refreshed wall color palette. A modern sink and mirror set the tone for a neat, organized space that emphasizes simplicity and functionality, making it ideal for daily routines.",
      icon: <FaBuilding size={24} />,
      imagePosition: "right",
      firstImage: {
        src: remodelPic2.src,
        alt: "Classic House",
      },
        secondImage: {
            src: remodelPic.src,
            alt: "Classic House Interior",
        },
    },
    {
      title: "Straightforward Building Project",
      description: "A no-frills building project that focuses on practicality and efficiency.",
      content:
        "This building project adopts a no-frills, functional design. The structure features a simple facade with large windows to allow natural light, modest materials that ensure durability, and a layout designed for practicality. The result is a clean, efficient space that meets everyday needs without unnecessary embellishments.",
      icon: <FaCity size={24} />,
      imagePosition: "left",
      firstImage: {
        src: outsideRemodel2.src,
        alt: "Urban House",
      },
      secondImage: {
        src: outsideRemodel.src,
        alt: "Urban House Interior",
      }
    },
  ];

export default function Project(){
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
                    backgroundImage: `url(${headImage.src})`,
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
                    firstImage={project.firstImage}
                    secondImage={project.secondImage}
                    />
                ))}
            </div>

        </div>
    )
}
