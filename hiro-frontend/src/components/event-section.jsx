export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Corporate",
      description: "Professional events and business gatherings",
      image: "/corporate-business-event-catering.jpg",
    },
    {
      id: 2,
      title: "Weddings",
      description: "Elegant and memorable wedding celebrations",
      image: "/wedding-reception-fine-dining.jpg",
    },
    {
      id: 3,
      title: "Private Parties",
      description: "Intimate and personalized celebrations",
      image: "/private-party-celebration.jpg",
    },
    {
      id: 4,
      title: "Birthday Parties",
      description: "Fun and festive birthday celebrations",
      image: "/birthday-party-celebration.jpg",
    },
  ]

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">WHAT WE DO</p>
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6 text-pretty">Events We Cater</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide catering for company events and drink parties. Full-service catering with drinks, canapés, luxury
            appetizers, waiting staff, and rental materials. Plenty of vegetarian and vegan options!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">{event.title}</h3>
              <p className="text-slate-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
