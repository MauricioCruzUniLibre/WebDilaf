
import React from 'react';

const steps = [
  { id: '01', title: 'Diagnóstico', desc: 'Analizamos su estado financiero actual y necesidades tecnológicas.' },
  { id: '02', title: 'Estrategia', desc: 'Diseñamos un plan de migración o mejora contable personalizado.' },
  { id: '03', title: 'Ejecución', desc: 'Implementamos nuestras herramientas y automatizamos sus flujos.' },
  { id: '04', title: 'Seguimiento', desc: 'Control continuo y asesoría constante para su crecimiento.' }
];

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Ruta de <span className="text-gradient">Éxito</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Un proceso refinado para garantizar precisión y tranquilidad en cada etapa de su jornada financiera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Connector line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[50px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl group hover:bg-white/5 transition-all text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
