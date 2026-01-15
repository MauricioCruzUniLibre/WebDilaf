
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo className="h-10 md:h-12" />
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Tecnología</a>
          <a href="#proceso" className="hover:text-cyan-400 transition-colors">Proceso</a>
          <a href="https://wa.me/573135017664" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Agenda una Asesoría
          </a>
        </div>

        <div className="md:hidden">
          <button className="text-slate-100 p-2 glass rounded-lg border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
