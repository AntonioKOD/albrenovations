import Image from "next/image"
import Link from "next/link"
import { TestimonialForm } from "@/components/testimonial-form"

export const metadata = {
  title: "Testimonials - Horizon Fix",
  description: "Read what our clients say about their experience working with Horizon Fix.",
}

export default function TestimonialsPage() {
    const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Homeowner",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "Construct Concepts reimagined our dated home, turning it into a sleek, modern haven. Their meticulous attention to detail and unwavering commitment to quality far surpassed our expectations. The team was professional, communicative, and delivered the project on schedule and within budget.",
          project: "Home Renovation",
          rating: 5,
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Business Owner",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "Collaborating with Construct Concepts on our office remodel was a seamless journey. They completed the project on schedule and within budget while showcasing exceptional craftsmanship. The team truly grasped our vision and transformed it into reality with innovative designs and high-quality materials.",
          project: "Office Renovation",
          rating: 5,
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "Property Developer",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "In my experience as a property developer, Construct Concepts has distinguished themselves with unmatched reliability, expertise, and creative solutions. They have handled several projects for us, each executed with the utmost quality and professionalism.",
          project: "Commercial Development",
          rating: 5,
        },
        {
          id: 4,
          name: "David Thompson",
          role: "Restaurant Owner",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "Construct Concepts delivered an exceptional remodel for our restaurant. They fully understood the unique needs of a food service environment and crafted a space that is both functional and visually appealing. Our patrons are delighted with the fresh, inviting design!",
          project: "Restaurant Renovation",
          rating: 4,
        },
        {
          id: 5,
          name: "Jennifer Lee",
          role: "Homeowner",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "Construct Concepts turned our dream home into a reality from the ground up. Their impeccable attention to detail, superior craftsmanship, and exceptional customer service made the entire process enjoyable and stress-free. They were with us every step of the way.",
          project: "Custom Home Construction",
          rating: 5,
        },
        {
          id: 6,
          name: "Robert Wilson",
          role: "Retail Store Manager",
          image:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
          quote:
            "Our retail space was due for a complete transformation, and Construct Concepts exceeded our expectations. They ensured minimal disruption to our business while crafting a modern, welcoming environment that has noticeably boosted our foot traffic and sales.",
          project: "Retail Space Renovation",
          rating: 4,
        },
      ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>,
      )
    }
    return stars
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Don&apos;t just take our word for it. Hear what our clients have to say about their experience working with
              Horizon Fix.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our work and the relationships we build with our clients. Here are some of their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>

                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>

                <div className="text-sm text-gray-500">Project: {testimonial.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-20" id="submit-testimonial">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-lg text-gray-600">
                We value your feedback. If you&apos;ve worked with us, we&apos;d love to hear about your experience.
              </p>
            </div>

            <TestimonialForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Quality Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our satisfied clients and let us help you bring your construction or renovation project to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

