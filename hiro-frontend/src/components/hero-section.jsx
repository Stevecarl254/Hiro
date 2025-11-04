export default function HeroSection() {
  return (
    <section className="bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/elegant-event-catering.jpg')" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-stretch py-20 px-8 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4 leading-tight text-pretty">
            Welcome to <span className="text-blue-500">Hiro</span>
          </h1>

          <p className="text-lg text-slate-200 mb-8">
            Discover amazing catering experiences with our professional team. From exquisite cuisine to exceptional
            service, we bring your events to life.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
              Get a Quote
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-full min-h-96">
          <img
            src="/elegant-catering-table-setting.jpg"
            alt="Elegant catering setup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
