
import React from 'react';

const testimonials = [
  {
    name: "Ricardo Mesa",
    company: "InnovaTech S.A.S",
    content: "Gracias a la automatización de Dilaf, logramos reducir nuestro tiempo de cierre contable en un 40%. La precisión de sus reportes es inigualable.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Elena Gómez",
    company: "Grupo Logístico del Norte",
    content: "La transición a nómina electrónica fue transparente y rápida. El soporte humano combinado con su tecnología hace que todo sea más sencillo.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Andrés Carrillo",
    company: "Finanzas Prime",
    content: "Como CEO, valoro el dashboard en tiempo real. Puedo tomar decisiones basadas en datos reales de mi empresa en cualquier momento.",
    image: "https://picsum.photos/seed/person3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/50" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-6">
        <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold mb-16 text-center">Empresas que ya <span className="text-cyan-400">evolucionaron</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article key={i} className="glass p-10 rounded-3xl relative">
              <div className="absolute top-0 right-10 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-slate-950 overflow-hidden shadow-xl bg-slate-800">
                  <img 
                    src={t.image} 
                    alt={`Retrato de ${t.name}, cliente de Dilaf`} 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                    decoding="async"
                    width="80"
                    height="80"
                  />
                </div>
              </div>
              <blockquote className="text-slate-300 italic mb-8 pt-6 leading-relaxed">
                <p>"{t.content}"</p>
              </blockquote>
              <footer>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-cyan-400 text-sm">{t.company}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
