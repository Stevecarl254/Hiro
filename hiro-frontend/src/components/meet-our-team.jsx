"use client"

import { useState } from "react"

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Chef John Mwanjala",
      role: "HEAD CHEF",
      image: "/professional-chef-portrait.png",
      description:
        "Award-winning executive chef with over 15 years of experience in fine dining and culinary innovation.",
    },
    {
      id: 2,
      name: "Chef Aisha Jane",
      role: "PASTRY CHEF",
      image: "/professional-chef-portrait.png",
      description: "Passionate pastry chef specializing in contemporary desserts and artisanal bread making.",
    },
    {
      id: 3,
      name: "Chef Daya Raj",
      role: "SOUS CHEF",
      image: "/professional-chef-portrait.png",
      description: "Culinary maestro with a flair for fusion cuisine and sustainable sourcing practices.",
    },
  ]

  const [hoveredChef, setHoveredChef] = useState(null)

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">OUR TEAM</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">🌿</span>
            <h2 className="text-5xl font-serif font-bold text-slate-900 text-pretty">Meet Our Team</h2>
            <span className="text-4xl">🍝</span>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex justify-center gap-12 mb-12 flex-wrap">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center relative">
              {/* Background circle with peach tone */}
              <div className="absolute -inset-4 bg-blue-50 rounded-full" />

              {/* Image container with rounded corners */}
              <div className="relative z-10 mb-6 rounded-3xl overflow-hidden shadow-lg w-56 h-56">
                {hoveredChef === member.id ? (
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center p-6">
                    <p className="text-white text-center text-sm leading-relaxed font-medium">{member.description}</p>
                  </div>
                ) : (
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Plus icon in top-right corner */}
                <button
                  onMouseEnter={() => setHoveredChef(member.id)}
                  onMouseLeave={() => setHoveredChef(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
                  aria-label="View chef description"
                >
                  <span className="text-2xl font-light">+</span>
                </button>
              </div>

              {/* Text content below image */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-500 font-semibold text-sm tracking-wider uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <a
            href="/404"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            View All Team Members
          </a>
        </div>
      </div>
    </section>
  )
}
