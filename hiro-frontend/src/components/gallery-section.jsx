export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      image: "/gallery/appetizers.jpg",
      layout: "col-span-2 row-span-2",
    },
    {
      id: 2,
      image: "/gallery/plated-dinner.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 3,
      image: "/gallery/dessert-display.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "/gallery/cocktail-hour.jpg",
      layout: "col-span-1 row-span-2",
    },
    {
      id: 5,
      image: "/gallery/gourmet-plating.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 6,
      image: "/gallery/table-setting.jpg",
      layout: "col-span-2 row-span-1",
    },
    {
      id: 7,
      image: "/gallery/catering-kitchen.jpg",
      layout: "col-span-1 row-span-2",
    },
    {
      id: 8,
      image: "/gallery/fresh-salad.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 9,
      image: "/gallery/buffet-spread.jpg",
      layout: "col-span-2 row-span-1",
    },
    {
      id: 10,
      image: "/gallery/main-course.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 11,
      image: "/gallery/presentation.jpg",
      layout: "col-span-1 row-span-1",
    },
    {
      id: 12,
      image: "/gallery/beverage-station.jpg",
      layout: "col-span-2 row-span-1",
    },
  ]

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">CULINARY SHOWCASE</p>
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">🌿</span>
              <h2 className="text-5xl font-serif font-bold text-slate-900 text-pretty">Experience the Sublime</h2>
              <span className="text-3xl">🌿</span>
            </div>
            <div className="absolute -bottom-3 left-0 w-full h-3 bg-gradient-to-r from-red-400 via-orange-300 to-transparent opacity-70 blur-md rounded-full"></div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[300px] mb-12">
          {galleryItems.map((item) => (
            <div key={item.id} className={`${item.layout} group relative rounded-lg overflow-hidden cursor-pointer`}>
              <img
                src={item.image || "/placeholder.svg"}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay with hover effect */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <a
            href="/404"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Full Gallery & Menus
          </a>
        </div>
      </div>
    </section>
  )
}
