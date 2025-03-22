'use client'
import gsap from 'gsap'
import Link from 'next/link'
import {useEffect, useRef} from 'react'
import {Button} from '@/components/ui/button'
import { MapPin, Phone, Mail, Calendar, Star, Trophy, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from '@/components/ui/card'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
                            Who We Are
                            </h1>
                            <p ref={paragraphRef} className="text-xl text-white/90 mb-8">
                            We are a team of experienced contractors and designers who are passionate about creating beautiful homes. Our mission is to help you bring your vision to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className='p-8 sm:p-12 max-w-7xl mx-auto'>
                <div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 lg:gap-64">
                        <div className="info-item flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Phone size={48} />
                            </div>
                            <div>
                                <p className="text-foreground text-xl sm:text-xl lg:text-2xl">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="info-item flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Mail size={48} />
                            </div>
                            <div>
                                <p className="text-foreground text-xl sm:text-xl lg:text-2xl">info@remodel.com</p>
                            </div>
                        </div>

                        <div className="info-item flex flex-col items-center gap-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin size={48} />
                            </div>
                            <div>
                                <p className="text-foreground text-xl sm:text-xl lg:text-2xl">
                                    Massachusetts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our History Section */}
            <div ref={historyRef} className="bg-muted py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our History</h2>
                        <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-cover bg-center" 
                                    style={{backgroundImage: "url('/placeholder.svg?height=600&width=800')"}}></div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Calendar size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">Est. 2005</h3>
                            </div>
                            <p className="text-lg">
                                Founded in 2005 by a group of passionate builders with over 30 years of combined experience, 
                                RemodelX has grown from a small local contractor to one of the most respected remodeling 
                                companies in Massachusetts.
                            </p>
                            <p className="text-lg">
                                What started as a three-person team working out of a garage has evolved into a full-service 
                                design and construction company with a dedicated staff of designers, project managers, and skilled craftspeople.
                            </p>
                            <p className="text-lg">
                                Despite our growth, we&apos;ve maintained our commitment to personalized service and exceptional quality 
                                that defined us from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div ref={valuesRef} className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Core Values</h2>
                        <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="pb-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Star size={32} />
                                </div>
                                <CardTitle className="text-2xl">Quality Craftsmanship</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We take pride in our work and are committed to delivering the highest quality craftsmanship in every project.
                                    Our attention to detail and precision sets us apart.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="pb-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Trophy size={32} />
                                </div>
                                <CardTitle className="text-2xl">Client Satisfaction</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Your satisfaction is our top priority. We listen to your needs, communicate clearly throughout the process,
                                    and strive to exceed your expectations.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="pb-0">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-recycle"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 4.75 9.962a1.83 1.83 0 0 1-.197-2.334 1.784 1.784 0 0 1 2.115-.762l5.308 1.83"></path><path d="m14.5 7 3.698 2.098a1.83 1.83 0 0 1 .743 2.237 1.784 1.784 0 0 1-2.111.927l-2.769-.949"></path><path d="m10 5 3-3 3 3"></path></svg>
                                </div>
                                <CardTitle className="text-2xl">Sustainability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We&apos;re committed to environmentally responsible building practices, using sustainable materials
                                    and energy-efficient solutions whenever possible.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Meet Our Team Section */}
            <div ref={teamRef} className="bg-muted py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meet Our Team</h2>
                        <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                            Our talented team of professionals brings expertise, creativity, and dedication to every project.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-80 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" height={400} width={400} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">Michael Anderson</h3>
                                <p className="text-primary">Founder & Lead Designer</p>
                                <p className="mt-2 text-muted-foreground">With over 20 years of experience in home renovation and design, Michael leads our team with vision and expertise.</p>
                            </CardContent>
                        </Card>
                        
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-80 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" height={400} width={400} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">Jennifer Torres</h3>
                                <p className="text-primary">Interior Designer</p>
                                <p className="mt-2 text-muted-foreground">Jennifer brings spaces to life with her eye for design and attention to detail. She specializes in creating functional, beautiful interiors.</p>
                            </CardContent>
                        </Card>
                        
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-80 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" height={400} width={400} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">David Chen</h3>
                                <p className="text-primary">Project Manager</p>
                                <p className="mt-2 text-muted-foreground">David ensures every project runs smoothly from start to finish, coordinating our team and keeping clients informed at every step.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Recent Projects Preview */}
            <div ref={projectsRef} className="py-16 sm:py-24 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Recent Projects</h2>
                        <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                            Take a look at some of our recent transformations and the beautiful spaces we&apos;ve created.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=600" alt="Modern Kitchen Renovation" height={400} width={600} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">Modern Kitchen Renovation</h3>
                                <p className="text-muted-foreground mt-2">Complete transformation of a traditional kitchen into a modern space with custom cabinetry and high-end appliances.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=600" alt="Luxury Bathroom Remodel" height={400} width={600} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">Luxury Bathroom Remodel</h3>
                                <p className="text-muted-foreground mt-2">A spa-like retreat featuring marble countertops, a freestanding tub, and custom tilework.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        
                        <Card className="overflow-hidden border-0 shadow-lg">
                            <div className="h-64 overflow-hidden">
                                <Image src="/placeholder.svg?height=400&width=600" alt="Complete Home Renovation" height={400} width={600} className="w-full h-full object-cover" />
                            </div>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold">Complete Home Renovation</h3>
                                <p className="text-muted-foreground mt-2">Full renovation of a colonial home, preserving historical charm while adding modern amenities and functionality.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Link href="/projects">
                            <Button size="lg">
                                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
