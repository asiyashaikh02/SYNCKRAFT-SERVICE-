import { Link } from 'react-router-dom';

export default function Navbar({ ctaText = "Get Started" }) {
  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-2xl shadow-[#000000]/20">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#89ceff] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
          <span className="text-2xl font-bold tracking-tighter text-[#dae2fd] font-headline">SYNCKRAFT</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-inter text-sm">
          <Link className="text-[#89ceff] font-bold border-b-2 border-[#89ceff] pb-1" to="/">Home</Link>
          <a className="text-[#dae2fd]/70 hover:text-[#dae2fd] transition-colors" href="#">Services</a>
          <a className="text-[#dae2fd]/70 hover:text-[#dae2fd] transition-colors" href="#">Industries</a>
          <a className="text-[#dae2fd]/70 hover:text-[#dae2fd] transition-colors" href="#">Products</a>
          <a className="text-[#dae2fd]/70 hover:text-[#dae2fd] transition-colors" href="#">About</a>
          <a className="text-[#dae2fd]/70 hover:text-[#dae2fd] transition-colors" href="#">Contact</a>
        </nav>
        <button className="bg-gradient-to-br from-primary to-on-primary-container text-on-primary px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all active:scale-95">
          {ctaText}
        </button>
      </div>
    </header>
  );
}
