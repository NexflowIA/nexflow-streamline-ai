import { Mail, Instagram, ArrowUp, MessageCircle } from "lucide-react";
import nexflowLogo from "@/assets/logonexflow.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#soluciones", label: "Soluciones" },
    { href: "#como-trabajamos", label: "Cómo trabajamos" },
    { href: "#packs", label: "Precios" },
    { href: "#diagnostico", label: "Diagnóstico" },
    { href: "#faq", label: "FAQ" },
  ];

  const services = [
    "Automatización de emails",
    "Generación de documentos",
    "Chatbots sobre documentación",
    "Copilotos internos",
    "Automatización comercial",
    "Workflows entre herramientas",
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.06]"
      style={{ background: "#020810" }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={nexflowLogo} alt="Nexflow" className="h-10 w-10" />
              <span className="text-2xl font-black tracking-tight text-white">
                NEXFLOW
              </span>
            </div>
            <p className="text-white/45 leading-relaxed mb-6 max-w-sm text-sm">
              Automatización con IA para empresas. Creamos agentes, asistentes y
              flujos inteligentes que eliminan tareas manuales y conectan tus
              herramientas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/the.nexflow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/[0.07] rounded-xl text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/34622064070"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 border border-white/[0.07] rounded-xl text-white/50 hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/20 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:contacto@thenexflow.com"
                className="p-2.5 bg-white/5 border border-white/[0.07] rounded-xl text-white/50 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/45 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA band */}
        <div className="p-7 md:p-8 rounded-2xl border border-purple-500/15 bg-gradient-to-r from-purple-500/8 to-pink-500/6 mb-12 text-center">
          <h3 className="text-white font-bold text-xl mb-2">
            ¿Listo para recuperar horas cada semana?
          </h3>
          <p className="text-white/45 text-sm mb-6">
            El diagnóstico es gratuito y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollToSection("#diagnostico")}
              className="btn-hero inline-flex items-center gap-2 justify-center"
            >
              Solicitar diagnóstico gratuito
            </button>
            <a
              href="mailto:contacto@thenexflow.com"
              className="btn-glass inline-flex items-center gap-2 justify-center"
            >
              <Mail size={16} />
              contacto@thenexflow.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06]">
          <p className="text-white/30 text-sm mb-4 md:mb-0">
            © 2025 Nexflow. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 border border-white/[0.07] rounded-xl text-white/40 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group"
            aria-label="Volver arriba"
          >
            <ArrowUp
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
