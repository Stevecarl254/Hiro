export default function Header() {
  return (
    <header className="bg-slate-950 text-white py-6 px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Hiro <span className="text-blue-500">Catering</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-4">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            Services
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            About Us
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            Menu
          </a>
          <span className="text-blue-500">✦</span>
          <a href="#" className="hover:text-blue-500 transition">
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-slate-100 px-4 py-1.5 rounded font-medium hover:text-blue-500 transition">
            Login
          </button>
          <button className="bg-blue-500 text-slate-950 px-4 py-1.5 rounded font-semibold hover:bg-blue-400 transition">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
