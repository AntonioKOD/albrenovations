'use client'
import React from 'react';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { TextRoll } from '@/components/motion-primitives/text-roll';
import {Card, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import Button from '@/components/contact-button';
import bathroomRenovation from '@/public/construction images/AC375BE1-F024-4516-A9CB-5D3E20443E70.jpeg'
import kitchenRemodeling from '@/public/construction images/kitchen.jpg'
import fullHomeRemodeling from '@/public/construction images/IMG_2031.jpeg'
import interiorDesign from '@/public/construction images/70078350037__D6892A99-3119-448C-9B1A-7F9883D801E0.jpeg'
import structuralImprovements from '@/public/construction images/IMG_0336.jpeg'
import headImage from '@/public/construction images/IMG_3032.jpeg'
import Head from 'next/head';
import masonry from '@/public/construction images/masonry.jpg'






const services = [
    {
      
      title: "Full Home Renovation",
      description: "Complete transformation of your living space with custom designs and quality craftsmanship.",
      image: fullHomeRemodeling
    },
    {
      
      title: "Kitchen Remodeling",
      description: "Modern kitchen designs with premium materials and efficient layouts for the heart of your home.",
      image: kitchenRemodeling
    },
    {
   
      title: "Bathroom Renovation",
      description: "Luxurious bathroom upgrades with stylish fixtures, custom tiling, and elegant finishes.",
      image: bathroomRenovation
    },
    {
      
      title: "Interior Design",
      description:
        "Professional interior design services to create cohesive, beautiful spaces that reflect your style.",
        image: interiorDesign
    },
    {
      
      title: "Custom Cabinetry",
      description: "Handcrafted cabinetry and built-ins designed for both functionality and aesthetic appeal.",
      image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      
      title: "Structural Improvements",
      description: "Expert structural modifications to improve flow, functionality, and value of your property.",
      image: structuralImprovements
    },
    {
      title: "Elite Masonry",
      description: "Custom masonry work to enhance your home's exterior with timeless beauty and durability.",
      image: masonry,
    }
  ]
export default function ServicesPage(){
    const serviceRef = useRef(null);
    const headingRef = useRef(null)
    const buttonRef = useRef(null)
    const paragraphRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(()=> {
        gsap.set([headingRef.current, paragraphRef.current, buttonRef.current, serviceRef.current], {
            opacity: 0,
            y: 20,
        })

        const tl = gsap.timeline({defaults: {ease: "power3.out"}})

        tl.to(headingRef.current, {y: 0, opacity: 1, duration: 0.8, delay: 0.2})
        tl.to(paragraphRef.current, {y: 0, opacity: 1, duration: 0.7}, "-=0.6")
        tl.to(buttonRef.current, {y: 0, opacity: 1, duration: 0.6}, "-=0.6")
        tl.to(serviceRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")
        tl.to(sectionRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")

    }, [])

    return(
        <>
        <Head>
        <title>Our Services – Construct Concepts</title>
        <meta
          name="description"
          content="Explore the range of services at Construct Concepts, from custom home design to full-scale construction, tailored to bring your vision to life."
        />
        <link rel="canonical" href="https://constructconcepts.com/services" />
        {/* Open Graph */}
        <meta property="og:title" content="Our Services – Construct Concepts" />
        <meta
          property="og:description"
          content="From design to construction, our services are designed to build custom homes that exceed expectations."
        />
        <meta property="og:url" content="https://constructconcepts.com/services" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services – Construct Concepts" />
        <meta
          name="twitter:description"
          content="From design to construction, our services are designed to build custom homes that exceed expectations."
        />
      </Head>
        <div className="w-full">
            <div ref={sectionRef} className="relative h-screen w-full">
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${headImage.src})`,
                    backgroundPosition: "center"
                }}>
                    <div className='absolute inset-0 bg-black/40'></div>
                </div>
            <div className='relative h-full flex items-center'>
                <div className='max-w-7xl px-4 sm:px-6 mx-auto lg:px-8 pt-20'>
                <h1 ref={headingRef} className='text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6'>
                    INNOVATE YOUR SPACE
                </h1>
                <p ref={paragraphRef} className='text-white text-xl mb-8'>
                <span className='text-3xl font-bold mb-2 flex'>FREE ESTIMATE</span>
                At Construct Concepts, we merge visionary design with expert craftsmanship to transform your unique ideas into a personalized home. Our team is dedicated to creating spaces that reflect your lifestyle and aspirations—Your Dream, Designed by Construct Concepts.
                </p>
                </div>
            </div>
            </div>
            <div className='p-8 sm:p-12 max-w-7xl mx-auto' ref={serviceRef}>
                <div className='items-center justify-center flex flex-col gap-12'>
                <TextRoll className='text-6xl'>Our Services</TextRoll>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {
                    services.map((service, index)=> (
                        <Card
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                      >
                        {/* Image Section */}
                        <div className="relative w-full h-64">
                          <Image
                            src={service.image}
                            alt={service.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                          />
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                            {service.title}
                          </CardTitle>
                          <p className="text-lg text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </Card>
                    ))
                }
                </div>
            </div>
            <div className='bg-border/10'>
                <div ref={headingRef} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                    Building Your Vision, One Concept at a Time
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Our Journey to Your Dream Space
  </h2>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800">
      Innovative Design:
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      We kick off with a thorough consultation, diving deep into your aspirations. Our creative team transforms these insights into custom designs that marry modern aesthetics with practical living.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800">
      Tailored Planning:
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      Working hand-in-hand with you, we develop personalized plans that focus on selecting the finest materials and finishes. Each decision reflects your unique style and requirements.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800">
      Masterful Craftsmanship:
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      Our skilled artisans bring your vision to life with exceptional precision and care. From framing to the final touches, every phase of construction is executed with superior workmanship.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800">
      Flawless Execution:
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      From groundbreaking to the finishing details, our streamlined process ensures a smooth, efficient experience. We manage every step so you can enjoy a stress-free journey to your new space.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800">
      Long-Term Partnership:
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      Our commitment doesn&apos;t end at project completion. We offer ongoing support and maintenance to ensure your space remains both beautiful and functional for years to come.
    </p>
  </div>
</div>
                <div className='flex justify-center mt-12'>
            <Button/>
            </div>
                </div>
            </div>
        </div>
        </>
    )

}