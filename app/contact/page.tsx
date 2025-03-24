'use client'
import gsap from 'gsap'
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import headImage from '@/public/construction images/IMG_4313.jpeg'
import Head from 'next/head'


export default function ContactPage(){
    const headingRef = useRef(null)
    const sectionRef = useRef(null)
    const paragraphRef = useRef(null)
    const formRef = useRef(null)
    const buttonRef = useRef(null)


    const [formData, setFormData] = useState({
       name: '',
       email: '',
       phone: '',
       budget: '',
       address: '',
       message: '',
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

 

      try{
        const res =await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            budget: formData.budget,
            address: formData.address,
            message: formData.message
          })
        })

        if(res.ok){
          setFormData({
            name: '',
            email: '',
            phone: '',
            budget: '',
            address: '',
            message: '',
          })
        }
        
      }catch(err){
        console.error(err)
      }

    }
  

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set([headingRef.current, paragraphRef.current, buttonRef.current], {
            opacity: 0,
            y: 20
        })
        const tl = gsap.timeline({defaults: {ease: "power3.out"}})

        tl.to(headingRef.current, {y: 0, opacity: 1, duration: 0.8, delay: 0.2})
        tl.to(paragraphRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")
        tl.to(buttonRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")
        tl.to(formRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")
        tl.to(sectionRef.current, {y: 0, opacity: 1, duration: 0.8}, "-=0.6")

    }, [])
    return(
        <>
        <Head>
        <title>Contact Us – Construct Concepts</title>
        <meta
          name="description"
          content="Get in touch with Construct Concepts to discuss your custom home project. We are here to guide you from concept to construction."
        />
        <link rel="canonical" href="https://constructconcepts.com/contact" />
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us – Construct Concepts" />
        <meta
          property="og:description"
          content="Reach out to us today to start your custom home project and experience our dedication to quality and craftsmanship."
        />
        <meta property="og:url" content="https://constructconcepts.com/contact" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us – Construct Concepts" />
        <meta
          name="twitter:description"
          content="Reach out to us today to start your custom home project and experience our dedication to quality and craftsmanship."
        />
      </Head>
        <div className="w-full">
            <div  ref={sectionRef} className="relative h-screen w-full">
                    <div className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url(${headImage.src})`,
                        backgroundPosition: "center"
                        }}>

                        <div className='absolute inset-0 bg-black/40'></div>
                    </div>
                    <div className='relative h-full flex items-center'>
                        <div className='max-w-7xl px-4 sm:px-6 mx-auto lg:px-8 pt-20'>
                            <div className='max-w-2xl'>
                                <h1 ref={headingRef} className='text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6'>
                                LET&apos;S CONNECT TODAY.
                                </h1>
                                <p ref={paragraphRef
                                } className='text-xl text-white/90 mb-8'>
                                    We&apos;re excited to hear from you! If you have any questions or need more information, please feel free to reach out. Our dedicated team is ready to assist you via phone, email, or through the contact form below. We look forward to getting in touch with you soon!
                                </p>
                            </div>

                        </div>
                    </div>
            </div> 
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Information Column */}
      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-8">
        <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
        <div className="space-y-8">
          <div className="flex items-start">
            <Phone className="text-primary mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">(781) 228-3378</p>
              <p className='text-gray-400'>(781) 964-3649</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="text-primary mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">info@constructconcepts.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="text-primary mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600">
                344 Broad Street
                <br />
                Weymouth, MA 02188
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-primary mr-4 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Column */}
      <div className="w-full lg:w-2/3">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/2">
                <Label htmlFor="name" className="block mb-2 text-lg font-bold">
                  Name
                </Label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all text-black"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="phone" className="block mb-2 text-lg font-bold">
                  Phone
                </Label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="(123) 456-7890"
                  className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all text-black"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="email" className="block mb-2 text-lg font-bold">
                Email
              </Label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="email@example.com"
                className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all text-black"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/2">
                <Label htmlFor="address" className="block mb-2 text-lg font-bold">
                  Location
                </Label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  name="address"
                  placeholder="Enter Your City"
                  className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="budget" className="block mb-2 text-lg font-bold">
                  Budget
                </Label>
                <input
                  type="number"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  name="budget"
                  placeholder="$"
                  className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="block mb-2 text-lg font-bold">
                Message
              </Label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type your message here..."
                className="border-b-[3px] border-b-primary p-1 w-full focus:outline-none bg-transparent transition-all"
              />
            </div>

            <div>
              <Button type="submit" className="w-full text-xl font-bold">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
            
        </div>
        </>
    )
}