'use client'
import gsap from 'gsap'
import Link from 'next/link'
import {useEffect , useRef} from 'react'
import {Button} from '@/components/ui/button'

export default function About(){
    const headingRef = useRef(null)
    const paragraphRef = useRef(null)
    const buttonRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {

        gsap.set([headingRef.current, paragraphRef.current, buttonRef.current], {
            opacity: 0,
            y: 20,
        })

        const tl = gsap.timeline({defaults: {ease: "power3.out"}})

        tl.to(headingRef.current, {y: 0, opacity: 1, duration: 0.8, delay: 0.2})
        tl.to(paragraphRef.current, {y: 0, opacity: 1, duration: 0.7}, "-=0.5")
        tl.to(buttonRef.current, {y: 0, opacity: 1, duration: 0.6}, "-=0.4")

        return () => {
            tl.kill()
        }
    }, [])
    return (
        <div ref={sectionRef} className='relative h-screen w-full'>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundPosition: "center"}}>

                <div className='absolute inset-0 bg-black/40'>

                </div>
            </div>
                <div className='relative h-full flex items-center'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
                        <div className='max-w-2xl'>
                            <h1 ref={headingRef} className="text-8xl md:text-8xl lg:text-8xl font-bold text-white mb-6">
                            About Us
                            </h1>
                            <p ref={paragraphRef} className="text-xl text-white/90 mb-8">
                            We are a team of experienced contractors and designers who are passionate about creating beautiful homes. Our mission is to help you bring your vision to life.
                            </p>
                            <div ref={buttonRef} className='flex gap-4'>
                                <Link href='/services'>
                                    <Button size='lg'>Services</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}