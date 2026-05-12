import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p>© 2026 HelpHub. All rights reserved.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/about" className="transition hover:text-white">About</Link>
        <Link to="/contact" className="transition hover:text-white">Contact</Link>
        <Link to="/donate" className="transition hover:text-white">Donate</Link>
      </div>
    </div>
  </footer>
)

export default Footer
