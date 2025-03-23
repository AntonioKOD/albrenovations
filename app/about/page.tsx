'use client'
import gsap from 'gsap'
import {useEffect, useRef} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/contact-button'
import headImage from '@/public/construction images/IMG_4311.jpeg'
import Head from 'next/head'

const principles = [
    {
      title: "Exceptional Craftsmanship",
      description: "We transform your ideas into lasting quality by meticulously refining every detail.",
    },
    {
      title: "Transparent Integrity",
      description:
        "With honesty and clear communication at our core, we build trust through every stage of the process.",
    },
    {
      title: "Personal Connection",
      description:
        "By truly listening to your needs, we ensure that your project is a perfect reflection of your aspirations.",
    },
    {
      title: "Collaborative Innovation",
      description: "Our team unites diverse expertise to create designs that are as imaginative as they are practical.",
    },
    {
      title: "Eco-Conscious Practices",
      description:
        "We are committed to sustainable building methods that enhance your space while respecting the environment.",
    },
    {
      title: "Enduring Legacy",
      description: "More than just structures, we craft homes that preserve your story for generations to come.",
    },
  ]

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
        <>
        <Head>
        <title>About Us – Construct Concepts</title>
        <meta
          name="description"
          content="Learn about Construct Concepts, our passion for design, our commitment to craftsmanship, and our core values that drive every custom home project."
        />
        <link rel="canonical" href="https://constructconcepts.com/about" />
        {/* Open Graph */}
        <meta property="og:title" content="About Us – Construct Concepts" />
        <meta
          property="og:description"
          content="Discover our journey, our team, and our dedication to building custom homes that reflect your unique story."
        />
        <meta property="og:url" content="https://constructconcepts.com/about" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us – Construct Concepts" />
        <meta
          name="twitter:description"
          content="Discover our journey, our team, and our dedication to building custom homes that reflect your unique story."
        />
      </Head>
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
                            INNOVATION • ARTISTRY • EXPERTISE • 
                            </h1>
                            <p ref={paragraphRef} className="text-xl text-white/90 mb-8">
                            At Construct Concepts, we turn visions into reality by merging creative design with exceptional craftsmanship. Founded by Sam, a pioneering architectural designer and master artisan, our team of engineers, interior designers, and skilled tradespeople is driven by a passion for building spaces that truly reflect your individuality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className='p-8 sm:p-12 max-w-7xl mx-auto'>
              <div className=' mt-4 p-4 sm:p-8 bg-white rounded-lg shadow-lg '>
                <div className=' flex gap-6'>
                <h2 className='lg:text-6xl  md:text-4xl sm:text-3xl font-bold text-left mt-4'>EXCELLENCE  CREATIVITY  PRECISION</h2>
               
                <p className='lg:text-lg gap-5 md:text-sm sm:text-sm'>Our reputation is founded on innovative ideas combined with meticulous attention to detail. Every project begins with your vision—we collaborate closely with you to design and construct customized environments that tell your unique story,<span className='font-bold'>one detail at a time.</span></p>
                </div>
              </div>

            </div>

            {/* Our History Section */}
            <section ref={historyRef} className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">Our Core Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
              <div className="mb-4">
                <span className="text-gray-400 text-sm font-medium">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

            <div ref={valuesRef} className="py-16 sm:py-24">
                <div className='mx-4'>
                    <h2 className='text-3xl mx-4'>Your Vision, Realized by <span className='font-bold'>Construct Concepts</span></h2>
                    <p className='mt-4 mx-4 w-1/2 text-lg'>We invite you to reach out and share your ideas. <br></br>With our transparent, collaborative process, we guide you from the initial concept to the final construction, ensuring that your new home is as unique as you are.</p>
                </div>
                <div className=' relative flex mt-4 mx-8'>
                <Button/>
                </div>
                
            </div>
            <div className='border-b-4 my-4 w-full'></div>

        

        </div>
        </>
    )
}
