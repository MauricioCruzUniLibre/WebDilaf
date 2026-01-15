
import React from 'react';

const strengths = [
  {
    id: '01',
    title: 'Tecnología Aplicada',
    desc: 'Impulsamos la transformación digital de su negocio mediante la implementación de ecosistemas tecnológicos avanzados que automatizan y optimizan sus flujos contables de extremo a extremo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 4.5l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Cumplimiento Normativo',
    desc: 'Garantizamos alineación total con las normativas NIIF y las últimas resoluciones de la DIAN de manera eficiente y técnica.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Acompañamiento Personalizado',
    desc: 'Un equipo de expertos dedicados a entender su negocio y brindarle asesoría estratégica para escalar con éxito.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.998 5.998 0 00-12 0m12 0c0-1.657-1.343-3-3-3m-6 3c0-1.657 1.343-3 3-3m0 0a3 3 0 100-6 3 3 0 000 6zm-7 0a3 3 0 110-6 3 3 0 010 6zm1.75 0a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    )
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-950 overflow-hidden" aria-labelledby="why-us-title">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden glass border border-white/10 p-3 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbb6518147ad?auto=format&fit=crop&q=80&w=1000" 
                alt="Analítica financiera avanzada en Dilaf" 
                className="rounded-[2rem] w-full h-[500px] object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" 
                loading="lazy"
                decoding="async"
                width="1000"
                height="500"
              />
              {/* Futuristic floating elements */}
              <div className="absolute top-12 left-12 p-5 glass rounded-2xl border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] animate-pulse-slow">
                <div className="text-[10px] text-cyan-400 font-bold mb-1 uppercase tracking-tighter">Procesos Digitales</div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  Activos
                </div>
              </div>
              <div className="absolute bottom-12 right-12 p-5 glass rounded-2xl border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <div className="text-[10px] text-indigo-400 font-bold mb-1 uppercase tracking-tighter">Sincronización DIAN</div>
                <div className="text-xl font-bold">100% Real-time</div>
              </div>
            </div>
            {/* Background glow effects */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/10 blur-[150px] rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Valor Diferencial
            </div>
            <h2 id="why-us-title" className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ¿Por qué <span className="text-gradient">elegirnos</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
              Fusionamos la precisión de la contabilidad tradicional con el poder de herramientas digitales modernas para ofrecer una experiencia financiera sin precedentes.
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((item) => (
                <article key={item.id} className="group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
