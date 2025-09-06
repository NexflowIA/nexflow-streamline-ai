import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, MessageCircle, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setGlitchActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nexflow-dark/60 via-nexflow-purple/20 to-nexflow-pink/30"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-6xl mx-auto">
        <div className="blur-overlay rounded-3xl p-12 md:p-16 lg:p-20 animate-fade-scale">
          {/* Main Title with Glitch Effect */}
          <h1
            className={`glitch-text mb-6 transition-all duration-500 ${
              glitchActive ? "animate-pulse" : ""
            }`}
          >
            NEXFLOW
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-gradient animate-slide-up">
            Automatización con inteligencia.
            <br />
            Sin complicaciones.
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium animate-slide-up max-w-3xl mx-auto">
            ¿Tu empresa sigue atascada en tareas repetitivas?
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-12 animate-slide-up">
            <Sparkles className="text-nexflow-purple animate-pulse" size={24} />
            <p className="text-lg text-gray-600">
              Transformamos tu negocio con IA y automatización inteligente
            </p>
            <Sparkles className="text-nexflow-pink animate-pulse" size={24} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <a
              href="https://wa.me/34622064070"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center gap-3 group"
            >
              <MessageCircle size={22} />
              Habla con nosotros por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button
              onClick={scrollToContact}
              className="btn-glass flex items-center gap-3 group"
            >
              <Mail size={20} />
              Contáctanos por Email
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--nexflow-purple))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--nexflow-pink))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--nexflow-cyan))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
            className="animate-pulse"
          />
          <path
            fill="white"
            d="M0,80 C480,140 960,20 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;