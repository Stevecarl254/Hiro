"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  // Backgrounds and their matching side images
  const heroPairs = [
    {
      bg: "http://localhost:5000/uploads/hero/banquet-2945619_1280.jpg",
      side: "http://localhost:5000/uploads/hero/deco-4705709_1280.jpg",
    },
    {
      bg: "http://localhost:5000/uploads/hero/food-4797476_1280.jpg",
      side: "http://localhost:5000/uploads/hero/pexels-micklatter-18749077.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // start fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroPairs.length)
        setFade(true) // fade-in new background
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [heroPairs.length])

  const current = heroPairs[currentIndex]

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Fading Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-40" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${current.bg})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch py-20 px-8">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-pretty">
            Welcome to <span className="text-blue-400">Hiro</span>
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-xl mx-auto md:mx-0">
            Discover amazing catering experiences with our professional team. From exquisite cuisine to exceptional
            service, we bring your events to life.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Section: Dynamic Image */}
        <div className="relative rounded-3xl overflow-hidden h-full min-h-96 shadow-lg">
          <img
            src={current.side}
            alt="Catering showcase"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
