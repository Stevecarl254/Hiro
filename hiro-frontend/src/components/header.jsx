export default function Header() {
  return (
    <header className="bg-slate-950 text-white py-6 px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Hiro <span className="text-blue-500">Catering</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-blue-500 transition">
            home
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            services
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-blue-500 text-slate-950 px-6 py-2 rounded font-semibold hover:bg-blue-400 transition">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
