import { useState } from "react";
import { 
  UtensilsCrossed, 
  ClipboardList, 
  Rocket, 
  Truck, 
  ArrowRight,
  Building2,
  Users,
  TrendingUp 
} from "lucide-react";

const SectorsSection = () => {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);

  const sectors = [
    {
      icon: <UtensilsCrossed size={40} />,
      title: "Restauración",
      description: "Asistentes de reservas 24/7 y optimización de la rotación. Integración de pedidos por WhatsApp y respuestas automáticas a reseñas.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&h=400&fit=crop",
      features: ["Reservas Automáticas", "Gestión de Pedidos", "Atención 24/7"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Administración",
      description: "Procesamiento automático de facturas, clasificación inteligente de documentos y generación de informes contables.",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=600&h=400&fit=crop",
      features: ["OCR Inteligente", "Clasificación Automática", "Informes en Tiempo Real"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Rocket size={40} />,
      title: "Startups/Retail",
      description: "Atención al cliente 24/7 con chatbots entrenados en productos y FAQs, inventarios, campañas personalizadas y seguimiento postventa.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=400&fit=crop",
      features: ["E-commerce Bot", "Personalización", "Marketing Automation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Truck size={40} />,
      title: "Logística/Transporte",
      description: "Optimización de rutas, seguimiento automático de pedidos y procesamiento de documentos (albaranes, facturas...).",
      image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      features: ["Optimización de Rutas", "Tracking Automático", "Gestión Documental"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="sectores" className="section-spacing bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="text-nexflow-purple animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-black text-nexflow-dark">
              Casos Prácticos Por Sector
            </h2>
            <Users className="text-nexflow-pink animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones específicas adaptadas a las necesidades de cada industria
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="space-y-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredSector(index)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              {/* Content Side */}
              <div className="flex-1 lg:max-w-xl">
                <div className="card-premium group hover:shadow-premium transition-all duration-500">
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${sector.color} text-white shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                      {sector.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-nexflow-dark group-hover:text-nexflow-purple transition-colors duration-300">
                      {sector.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {sector.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`px-4 py-2 bg-gradient-to-r ${sector.color} text-white text-sm font-semibold rounded-full shadow-md transform hover:scale-105 transition-all duration-300`}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className={`transition-all duration-500 ${
                    hoveredSector === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
                  }`}>
                    <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${sector.color} text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-premium`}>
                      Ver casos de éxito
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 lg:max-w-xl">
                <div className="relative group">
                  {/* Main Image */}
                  <div 
                    className="relative overflow-hidden rounded-3xl shadow-card group-hover:shadow-premium transition-all duration-500"
                    style={{
                      backgroundImage: `url(${sector.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "400px",
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${sector.color} rounded-full animate-pulse`}></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sector.color} rounded-full animate-glow`}></div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br ${sector.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br ${sector.color} opacity-15 rounded-full blur-lg group-hover:opacity-25 transition-opacity duration-700`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-nexflow-purple/5 to-nexflow-pink/5 rounded-3xl p-12 border border-nexflow-purple/10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="text-nexflow-purple" size={28} />
              <h3 className="text-2xl font-bold text-nexflow-dark">
                ¿No encuentras tu sector?
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Estas son algunas de las tareas que automatizamos con IA. Si no ves tu caso aquí no te preocupes, 
              <strong> diseñamos un flujo de trabajo a medida para tu empresa.</strong>
            </p>
            <a
              href="https://wa.me/34622064070"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center gap-2"
            >
              Consulta tu caso específico
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;