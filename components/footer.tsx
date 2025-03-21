"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import gsap from "gsap"

import Card from "./social-icons"
export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate footer on load
    if (footerRef.current) {
      gsap.fromTo(footerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer ref={footerRef} className="bg-card text-card-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ALB RENOVATION</h3>
            <p className="text-muted-foreground mb-6">
              Transforming houses into dream homes with expert craftsmanship and innovative design.
            </p>
            <div className=" -mt-6 -mx-8">
            <Card/>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Kitchen Remodeling</li>
              <li className="text-muted-foreground">Bathroom Renovation</li>
              <li className="text-muted-foreground">Full Home Renovation</li>
              <li className="text-muted-foreground">Custom Cabinetry</li>
              <li className="text-muted-foreground">Interior Design</li>
              <li className="text-muted-foreground">Outdoor Living Spaces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              123 Renovation Street
              <br />
              Suite 456
              <br />
              Design City, DC 78901
            </address>
            <p className="mt-4 text-muted-foreground">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> info@remodelx.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ALB RENOVATION. All rights reserved.
          </p>
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-accent/10 hover:bg-accent hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

