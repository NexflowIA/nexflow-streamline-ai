import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import nexflowLogo from "@/assets/logonexflow.png";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#como-trabajamos", label: "Proceso" },
  { href: "#packs", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#04081a]/90 backdrop-blur-lg border-b border-white/[0.06] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-3 group"
          >
            <img
              src={nexflowLogo}
              alt="Nexflow"
              className="h-10 w-10 animate-glow"
            />
            <span className="text-xl font-black tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">
              NEXFLOW
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/65 hover:text-white font-medium text-sm transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/the.nexflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-white transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <button
              onClick={() => scrollToSection("#diagnostico")}
              className="btn-hero flex items-center gap-2 text-sm px-5 py-3"
            >
              Diagnóstico gratis
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#04081a]/95 backdrop-blur-lg border-t border-white/[0.06] px-6 py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-white/65 hover:text-white font-medium transition-colors duration-300 animate-slide-up text-sm"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href="https://www.instagram.com/the.nexflow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/34622064070"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <button
                onClick={() => scrollToSection("#diagnostico")}
                className="btn-hero flex-1 justify-center flex items-center text-sm py-3"
              >
                Diagnóstico gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
