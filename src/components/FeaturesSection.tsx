import { useState } from "react";
import { RefreshCw, Bot, Link, ArrowRight, Zap, Brain, Workflow, MessageCircle } from "lucide-react";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <RefreshCw size={48} />,
      title: "Automatización de Procesos Repetitivos",
      description: "Eliminamos tareas repetitivas como facturación, gestión de correos o entrada de datos usando RPA e inteligencia artificial.",
      color: "from-purple-500 to-indigo-600",
      link: "https://thenexflow.com/procesos-repetitivos/",
      highlights: ["RPA Inteligente", "Procesamiento de Documentos", "Workflow Automation"]
    },
    {
      icon: <Bot size={48} />,
      title: "Chatbots y Asistentes Virtuales",
      description: "Implementamos chatbots que responden automáticamente a tus clientes o empleados en WhatsApp, web o email.",
      color: "from-indigo-500 to-purple-600",
      highlights: ["AI Conversacional", "Multicanal", "Aprendizaje Continuo"]
    },
    {
      icon: <Link size={48} />,
      title: "Integraciones con APIs y CRMs",
      description: "Automatizamos el flujo de información entre tus plataformas (CRM, hojas de cálculo, formularios, emails).",
      color: "from-purple-600 to-pink-600",
      highlights: ["Sincronización en Tiempo Real", "CRM Integration", "Data Pipeline"]
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-gray-50">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="text-nexflow-purple animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-black text-nexflow-dark">
              Funcionalidades
            </h2>
            <Brain className="text-nexflow-pink animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de IA transforman tu negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="card-premium h-full relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-nexflow-dark mb-4 group-hover:text-nexflow-purple transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                {feature.highlights && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-nexflow-purple/10 text-nexflow-purple text-sm font-medium rounded-full border border-nexflow-purple/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hover Effect - Learn More Button */}
                <div className={`transition-all duration-500 ${
                  hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {feature.link ? (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${feature.color} text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-premium`}
                    >
                      Saber más
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${feature.color} text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-premium`}>
                      Saber más
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-nexflow-pink/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-nexflow-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-nexflow-purple">
            <Workflow size={24} />
            <span className="text-lg font-semibold">¿No ves tu caso específico?</span>
          </div>
          <p className="text-gray-600 mt-2 mb-6">
            Diseñamos soluciones personalizadas para cada empresa
          </p>
          <a
            href="https://wa.me/34622064070?text=Hola,%20estoy%20interesado%20en%20vuestros%20servicios%20de%20automatización%20con%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Consulta tu caso
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;