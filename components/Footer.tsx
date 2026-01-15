
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-12" />
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm md:text-base">
              Liderando la vanguardia contable en Colombia con tecnología de precisión y transparencia total para las empresas del mañana.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Ecosistema</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios Integrales</a></li>
              <li><a href="#nosotros" className="hover:text-cyan-400 transition-colors">Nuestra Tecnología</a></li>
              <li><a href="#proceso" className="hover:text-cyan-400 transition-colors">Ruta de Éxito</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Soporte Directo</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Cumplimiento</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Normatividad NIIF</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Estatuto Tributario</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidad de Datos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Aviso DIAN Cali</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs md:text-sm gap-4">
          <p>© {new Date().getFullYear()} Dilaf Soluciones Contables. Cali, Colombia. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all transform hover:scale-110">LinkedIn</a>
            <a href="https://www.instagram.com/dilafsolucionescontable" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all transform hover:scale-110">Instagram</a>
            <a href="https://wa.me/573135017664" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all transform hover:scale-110 font-medium">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
