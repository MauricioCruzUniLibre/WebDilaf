
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Tecnología', href: '#nosotros' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Logo className="h-10 md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/573135017664" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Agenda una Asesoría
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-slate-100 p-2 glass rounded-lg border-white/10 focus:outline-none"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="glass-t border-t border-white/5 p-6 flex flex-col space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium border-b border-white/5 pb-2 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/573135017664" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-center shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Agenda una Asesoría
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
