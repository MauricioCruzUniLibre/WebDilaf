
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-xs font-semibold uppercase tracking-widest text-cyan-400 animate-pulse-slow">
            Innovación Contable en Colombia
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-tight mb-8">
            Contabilidad inteligente para un <span className="text-gradient">futuro financiero</span> seguro
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elevamos la gestión financiera de su empresa con tecnología de vanguardia, precisión automatizada y el respaldo humano que su negocio necesita para escalar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://wa.me/573135017664" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)] transform hover:scale-105 inline-flex items-center justify-center">
              Agenda una asesoría
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </a>
            <a href="#servicios" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 border border-white/10 rounded-xl transition-all font-medium">
              Explorar Soluciones
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-square pointer-events-none opacity-20 bg-glow blur-[100px]"></div>
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>
    </section>
  );
};

export default Hero;
