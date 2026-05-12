import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Donate', to: '/donate' },
  { label: 'Track', to: '/track' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold">H</div>
          <div>
            <p className="text-base font-semibold">HelpHub</p>
            <p className="text-xs text-slate-400">NGO support platform</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-orange-400' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-orange-500 hover:text-white">
            Login
          </Link>
          <Link to="/donate" className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
            Donate
          </Link>
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMenuOpen(false)} className="rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-300 transition hover:border-orange-500 hover:text-white">
              Login
            </Link>
            <Link to="/donate" onClick={() => setMenuOpen(false)} className="rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;