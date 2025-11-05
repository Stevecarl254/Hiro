"use client"

export default function CulinaryShowcase() {
  const showcaseImages = [
    { id: 1, image: "/showcase/food-1.jpg", position: "top-left" },
    { id: 2, image: "/showcase/food-2.jpg", position: "top-right" },
    { id: 3, image: "/showcase/food-3.jpg", position: "bottom-left" },
    { id: 4, image: "/showcase/food-4.jpg", position: "bottom-right" },
  ]

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">CULINARY SHOWCASE</p>
          <h2 className="text-5xl font-serif font-bold text-slate-900 text-pretty">Our Culinary Artistry</h2>
        </div>

        {/* Oval Center with Surrounding Images */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-12">
            {/* Left Images */}
            <div className="flex flex-col gap-6">
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={showcaseImages[0].image || "/placeholder.svg"}
                  alt="Dish showcase 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={showcaseImages[2].image || "/placeholder.svg"}
                  alt="Dish showcase 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Oval Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-blue-50">
                <img src="/showcase/center-dish.jpg" alt="Featured dish" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Images */}
            <div className="flex flex-col gap-6">
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={showcaseImages[1].image || "/placeholder.svg"}
                  alt="Dish showcase 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={showcaseImages[3].image || "/placeholder.svg"}
                  alt="Dish showcase 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
