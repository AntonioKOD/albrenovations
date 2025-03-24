"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"

export function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    project: "",
    rating: 0,
    testimonial: "",
  })

  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.testimonial || formData.rating === 0) {
      setError("Please fill in all required fields and provide a rating.")
      return
    }

    // In a real application, you would send this data to your backend
    try{
      const response = await fetch("/api/send-testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const { error } = await response.json()
        setError(error)
        return
      }
    }catch (error){
      console.log(error)
      setError("An error occurred. Please try again later.")
      return
    }

    // Show success message and reset form
    setSubmitted(true)
    setError("")
    setFormData({
      name: "",
      email: "",
      role: "",
      project: "",
      rating: 0,
      testimonial: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600">
            Your testimonial has been submitted successfully. We appreciate your feedback!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="bg-red-50 text-red-500 p-4 rounded-md">{error}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Your Role (e.g., Homeowner, Business Owner)
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select a project type</option>
                <option value="Home Renovation">Home Renovation</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Custom Home">Custom Home</option>
                <option value="Office Renovation">Office Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingClick(rating)}
                  onMouseEnter={() => setHoveredRating(rating)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1"
                >
                  <Star
                    className={`h-8 w-8 ${
                      rating <= (hoveredRating || formData.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {formData.rating > 0 ? `${formData.rating} out of 5 stars` : "Click to rate"}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
              Your Testimonial <span className="text-red-500">*</span>
            </label>
            <textarea
              id="testimonial"
              name="testimonial"
              rows={5}
              value={formData.testimonial}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Share your experience working with Horizon Fix..."
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
              I consent to having my testimonial and name displayed on the Horizon Fix website.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-colors"
          >
            Submit Testimonial
          </button>
        </form>
      )}
    </div>
  )
}

