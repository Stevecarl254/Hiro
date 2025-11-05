"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    quote: "The food was brilliant, Hiro made everything so easy that we can't wait to book them for our next event.",
    author: "SARAH ANDERSON",
    role: "Event Organizer",
  },
  {
    id: 2,
    quote: "Reliable, flexible and friendly. I can highly recommend this Caterer.",
    author: "KAT PENNY",
    role: "Manager of Google",
  },
  {
    id: 3,
    quote: "Exceptional service and attention to detail. The team went above and beyond for our corporate event.",
    author: "JAMES MITCHELL",
    role: "CEO, Tech Solutions",
  },
]

export default function StatsAndTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative">
      <div className="grid grid-cols-5">
        {/* Stats Section - Left (Dark Navy, 40% width with curved bottom) */}
        <div className="col-span-2 relative overflow-hidden rounded-br-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/elegant-event-catering.jpg)",
              opacity: 0.05,
            }}
          ></div>
          <div className="absolute inset-0 bg-slate-900"></div>

          <div className="max-w-sm relative z-10 bg-slate-900 py-16 px-8">
            <div className="mb-12">
              <div className="text-5xl font-serif font-bold text-blue-500 mb-1">40+</div>
              <p className="text-lg text-slate-200">years experience</p>
              <p className="text-xs text-slate-400 mt-1">among divine's executive team</p>
            </div>

            <div>
              <div className="text-5xl font-serif font-bold text-blue-500 mb-1">200+</div>
              <p className="text-lg text-slate-200">events each year</p>
              <p className="text-xs text-slate-400 mt-1">across 15 unique event spaces</p>
            </div>
          </div>

          <div className="absolute left-0 bottom-20 w-32 h-32 rounded-full border-4 border-orange-300 opacity-20"></div>
        </div>

        {/* Testimonials Section - Right (White, 60% width) */}
        <div className="col-span-3 bg-white py-16 px-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/elegant-event-catering.jpg)",
              opacity: 0.03,
              zIndex: 0,
            }}
          ></div>

          <div className="max-w-lg relative z-10">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-blue-500 tracking-widest mb-1">CLIENT REVIEWS</h3>
              <h2 className="text-2xl font-serif font-bold text-slate-900">Quotient</h2>
            </div>

            {/* Testimonial */}
            <div className="mb-10">
              <p className="text-lg font-serif text-slate-900 mb-4 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>
              <div>
                <p className="font-bold text-sm text-slate-900">{testimonials[activeIndex].author}</p>
                <p className="text-xs text-slate-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "bg-blue-500 w-6" : "bg-slate-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute right-0 bottom-10 w-24 h-24 rounded-full bg-blue-300 opacity-10"></div>
        </div>
      </div>
    </section>
  )
}
