
import React from 'react';

const services = [
  {
    title: "Contabilidad Empresarial",
    description: "Gestión integral de libros, balances y estados financieros bajo normas NIIF con reportes en tiempo real.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.25 11.25 0 0015.694-1.124l-3.307 3.307a11.25 11.25 0 01-15.694 1.124L2.25 18z" />
      </svg>
    )
  },
  {
    title: "Declaraciones Tributarias",
    description: "Optimización y cumplimiento de IVA, Retefuente e Impuesto de Renta con precisión algorítmica ante la DIAN.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.546 1.16 4.14 1.16 5.686 0l.879-.659c1.546-1.16 1.546-3.042 0-4.202l-.879-.659a10.046 10.046 0 00-5.686 0l-.879.659c-1.546 1.16-1.546 3.042 0 4.202l.879.659z" />
      </svg>
    )
  },
  {
    title: "Nómina y Factura Electrónica",
    description: "Automatización completa del ciclo de pagos y facturación, garantizando conectividad total con el ecosistema DIAN.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Auditoría Financiera",
    description: "Análisis forense y preventivo de sus activos para asegurar transparencia y blindaje contra riesgos corporativos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    title: "Asesoría Financiera",
    description: "Modelado de escenarios para inversión, expansión y optimización de capital con visión estratégica a futuro.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0v16.5m0 0h13.5m-13.5 0h16.5" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluciones que evolucionan con su <span className="text-cyan-400">empresa</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              No somos solo contadores; somos su brazo tecnológico en finanzas. Diseñamos servicios adaptados a la era digital.
            </p>
          </div>
          <a href="#contacto" className="text-cyan-400 font-semibold flex items-center group transition-all">
            Ver todas las soluciones
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-3xl group hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 text-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
