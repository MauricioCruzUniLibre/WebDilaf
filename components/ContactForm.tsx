
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'El nombre de la empresa es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Preparar mensaje de WhatsApp antes de limpiar el formulario
    const waMessage = `Hola Dilaf, mi nombre es ${formData.name} de la empresa ${formData.company}. Mi consulta es: ${formData.message}. (Contacto: ${formData.email})`;
    const generatedUrl = `https://wa.me/573135017664?text=${encodeURIComponent(waMessage)}`;
    setWhatsappUrl(generatedUrl);

    // Simulación de envío a servidor
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', company: '', email: '', message: '' });
    
    // No reseteamos el éxito automáticamente para que el usuario pueda elegir WhatsApp
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass p-8 md:p-16 rounded-[3rem] border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Inicie su <span className="text-gradient">transformación</span> hoy</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Estamos listos para blindar el futuro de su empresa. Complete el formulario o contáctenos directamente vía WhatsApp para una respuesta inmediata.
              </p>
              
              <div className="space-y-6">
                <a href="https://wa.me/573135017664" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Llámanos / WhatsApp</div>
                    <div className="text-xl font-medium group-hover:text-cyan-400 transition-colors">+57 313 501 7664</div>
                  </div>
                </a>
                
                <a href="mailto:contabilidad@contadilaf.com" className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Escríbenos</div>
                    <div className="text-xl font-medium group-hover:text-cyan-400 transition-colors">contabilidad@contadilaf.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              {isSuccess && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/95 rounded-3xl animate-in fade-in zoom-in duration-500 backdrop-blur-md p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-slate-950">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Procesada!</h3>
                  <p className="text-slate-400 mb-8">Hemos recibido sus datos. ¿Desea agilizar su consulta enviándola también por WhatsApp?</p>
                  
                  <div className="flex flex-col w-full space-y-4">
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center space-x-2"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      <span>Enviar por WhatsApp</span>
                    </a>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="w-full py-3 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      Volver al formulario
                    </button>
                  </div>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-400">Nombre</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`} 
                      placeholder="Ej: Carlos Gómez" 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-400">Empresa</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full bg-slate-950/50 border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`} 
                      placeholder="Nombre de su negocio" 
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.company}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-950/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors`} 
                    placeholder="carlos@empresa.com" 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-400">Mensaje</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-950/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors h-32`} 
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Procesando...</span>
                    </>
                  ) : (
                    <span>Enviar Solicitud</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-900/10 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
};

export default ContactForm;
