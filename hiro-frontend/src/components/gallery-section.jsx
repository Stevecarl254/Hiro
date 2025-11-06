"use client"

import { useEffect, useState } from "react"
import axiosInstance from "@/lib/axiosInstance"

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState([])

  // Layout pattern for the 12-image grid
  const layoutPattern = [
    "col-span-2 row-span-2", // 1
    "col-span-1 row-span-1", // 2
    "col-span-1 row-span-1", // 3
    "col-span-1 row-span-2", // 4
    "col-span-1 row-span-1", // 5
    "col-span-2 row-span-1", // 6
    "col-span-1 row-span-2", // 7
    "col-span-1 row-span-1", // 8
    "col-span-2 row-span-1", // 9
    "col-span-1 row-span-1", // 10
    "col-span-1 row-span-1", // 11
    "col-span-2 row-span-1", // 12
  ]

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axiosInstance.get("/images/gallery")

        // Take only the first 12 images
        const limitedGallery = res.data.slice(0, 12)

        // Apply the pattern
        const structuredGallery = limitedGallery.map((item, index) => ({
          ...item,
          layout: layoutPattern[index],
        }))

        setGalleryItems(structuredGallery)
      } catch (error) {
        console.error("Error loading gallery:", error)
      }
    }

    fetchGallery()
  }, [])

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">
            CULINARY SHOWCASE
          </p>
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">🌿</span>
              <h2 className="text-5xl font-serif font-bold text-slate-900">
                Experience the Sublime
              </h2>
              <span className="text-3xl">🌿</span>
            </div>
            <div className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-r from-red-400 via-orange-300 to-transparent opacity-70 blur-md rounded-full"></div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[300px] mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item._id || index}
              className={`${item.layout} group relative rounded-lg overflow-hidden cursor-pointer`}
            >
              <img
                src={`http://localhost:5000${item.url}`}
                alt={item.filename}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="/gallery"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Full Gallery & Menus
          </a>
        </div>
      </div>
    </section>
  )
}
