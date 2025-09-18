import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import nexflowLogo from "@/assets/logonexflow.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#sectores", label: "Sectores" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#sobre-nexflow", label: "Sobre Nexflow" },
    { href: "#contacto", label: "Contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-premium border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={nexflowLogo}
              alt="NEXFLOW Logo"
              className="h-12 w-12 animate-glow"
            />
            <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-nexflow-dark" : "text-white"
            }`}>
              NEXFLOW
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? "text-gray-700 hover:text-nexflow-purple" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexflow-purple transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/the.nexflow"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-600 hover:text-nexflow-purple" : "text-white/80 hover:text-white"
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/34622064070?text=Hola,%20estoy%20interesado%20en%20vuestros%20servicios%20de%20automatización%20con%20IA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-white/20 section-padding py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-gray-700 hover:text-nexflow-purple font-medium transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a
                href="https://www.instagram.com/the.nexflow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-nexflow-purple transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/34622064070"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center gap-2 flex-1 justify-center"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;