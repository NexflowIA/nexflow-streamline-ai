import { MessageCircle, Mail, Instagram, ArrowUp } from "lucide-react";
import nexflowLogo from "@/assets/nexflow-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-nexflow-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nexflow-purple to-transparent"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nexflow-purple/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding section-spacing max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={nexflowLogo}
                  alt="NEXFLOW Logo"
                  className="h-12 w-12 animate-glow"
                />
                <span className="text-3xl font-black tracking-tight">
                  NEXFLOW
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transformamos empresas a través de la automatización inteligente y la IA. 
                Eliminamos tareas repetitivas para que puedas enfocarte en lo que realmente importa.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/the.nexflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-nexflow-purple hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/34622064070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-xl hover:bg-green-500 hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:info@nexflow.com"
                  className="p-3 bg-white/10 rounded-xl hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gradient">
                Navegación
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#funcionalidades", label: "Funcionalidades" },
                  { href: "#sectores", label: "Sectores" },
                  { href: "#contacto", label: "Contacto" },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gradient">
                Servicios
              </h3>
              <ul className="space-y-3">
                {[
                  "Automatización RPA",
                  "Chatbots IA",
                  "Integración APIs",
                  "Consultoría Tech",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-nexflow-purple/20 to-nexflow-pink/20 rounded-3xl p-8 mb-12 border border-nexflow-purple/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para automatizar tu negocio?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Empieza tu transformación digital hoy. Consulta gratuita disponible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/34622064070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Hablar por WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection("#contacto")}
                  className="btn-glass flex items-center gap-2"
                >
                  <Mail size={18} />
                  Enviar Email
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 NEXFLOW. Todos los derechos reservados.
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-nexflow-purple rounded-full hover:bg-nexflow-pink hover:scale-110 transition-all duration-300 group"
            >
              <ArrowUp 
                size={20} 
                className="group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;