"use client"

export default function WhyHiro() {
  const features = [
    {
      icon: "👨‍🍳",
      title: "Top Kenyan Chefs",
      description: "Award-winning culinary masters crafting exceptional dishes",
    },
    {
      icon: "🍽️",
      title: "Delicious Food",
      description: "Every plate is a masterpiece of flavor and presentation",
    },
    {
      icon: "🌾",
      title: "Locally Sourced Ingredients",
      description: "Fresh, authentic ingredients supporting local farmers",
    },
    {
      icon: "💰",
      title: "Great Value",
      description: "Premium quality at competitive prices for every budget",
    },
    {
      icon: "⭐",
      title: "High-Quality Services",
      description: "Professional team ensuring flawless event execution",
    },
  ]

  return (
    <section className="bg-slate-50 py-16 px-8">
      <style>{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .pop-on-hover:hover {
          animation: pop 0.4s ease-in-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">WHY CHOOSE US</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">🌿</span>
            <h2 className="text-5xl font-serif font-bold text-slate-900 text-pretty">Why Hiro Catering</h2>
            <span className="text-4xl">👨‍🍳</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg pop-on-hover transition-shadow text-center cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
