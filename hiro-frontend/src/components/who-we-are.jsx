export default function WhoWeAre() {
  return (
    <section className="bg-slate-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 tracking-widest mb-2">WHO WE ARE</p>
          {/* Sauce smudge effect - fades from left to right */}
          <div className="relative inline-block">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6">COMPLETE CATERING SERVICES</h2>
            <div className="absolute -bottom-4 left-0 w-full h-6 bg-gradient-to-r from-amber-600 via-orange-500 to-transparent opacity-60 blur-sm rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Left - Image */}
          <div className="flex items-center justify-center">
            <img
              src="/professional-catering-team-at-event.jpg"
              alt="Professional catering team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Center - Mission */}
          <div className="flex flex-col justify-between">
            <div>
              <img
                src="/elegant-drinks-and-beverages.jpg"
                alt="Catering beverages"
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">OUR MISSION</h3>
              <p className="text-slate-700 leading-relaxed">
                Catering that fits your budget. We care for your guests' special dietary requirements: vegetarians,
                vegans, and gluten-free guests are welcome!
              </p>
            </div>
          </div>

          {/* Right - Promise */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">OUR PROMISE</h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                A team of real catering experts. We take pride in audience matching menus, custom-designed to connect
                with your guests.
              </p>
            </div>
            <img
              src="/fresh-vegetables-and-catering-food.jpg"
              alt="Fresh catering ingredients"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
