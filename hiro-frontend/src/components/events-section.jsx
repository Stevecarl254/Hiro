export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Corporate",
      image: "/corporate-event.jpg",
    },
    {
      id: 2,
      title: "Weddings",
      image: "/wedding-event.jpg",
    },
    {
      id: 3,
      title: "Parties",
      image: "/parties-event.jpg",
    },
    {
      id: 4,
      title: "Celebrations",
      image: "/celebrations-event.jpg",
    },
  ]

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">WHAT WE DO</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">🍴</span>
            <h2 className="text-5xl font-serif font-bold text-slate-900 text-pretty">Events We Cater</h2>
            <span className="text-4xl">🍽️</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 group-hover:from-black/30 group-hover:via-black/10 group-hover:to-black/30 transition-colors flex items-center justify-center" />
                <h3 className="absolute inset-0 flex items-start justify-center pt-8 text-5xl font-serif font-bold text-white text-center">
                  {event.title}
                </h3>
                <a
                  href="/404"
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 text-sm opacity-0 group-hover:opacity-100"
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
