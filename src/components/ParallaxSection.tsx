import { useEffect, useState } from "react";
import abstractTechBg from "@/assets/abstract-tech-bg.jpg";

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center overflow-hidden my-24"
      style={{
        backgroundImage: `url(${abstractTechBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      {/* Dynamic Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-nexflow-dark/80 via-nexflow-purple/60 to-nexflow-pink/60 transition-all duration-1000"
        style={{
          opacity: 0.7 + Math.sin(scrollY * 0.01) * 0.1,
        }}
      ></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-nexflow-purple/40 rounded-full blur-sm"></div>
          </div>
        ))}
        
        {/* Larger glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-glow"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-8 h-8 bg-nexflow-pink/30 rounded-full blur-lg"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 animate-slide-up"
          style={{
            textShadow: "0 0 30px rgba(123, 91, 255, 0.5)",
          }}
        >
          EL CAMBIO YA HA
          <br />
          <span className="text-gradient bg-gradient-to-r from-nexflow-purple to-nexflow-pink bg-clip-text text-transparent">
            EMPEZADO
          </span>
        </h1>
        
        <h2 
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 animate-slide-up"
          style={{
            textShadow: "0 0 20px rgba(255, 94, 247, 0.3)",
            animationDelay: "0.2s",
          }}
        >
          ¿TE UNES?
        </h2>

        {/* Interactive Tech Cards */}
        <div className="flex justify-center gap-6 mt-16">
          {["AI", "RPA", "ML"].map((tech, i) => (
            <div
              key={tech}
              className="group relative"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-nexflow-purple via-nexflow-pink to-nexflow-purple rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 animate-pulse"></div>
              
              {/* Main Card */}
              <div className="relative glass-card px-8 py-4 interactive-scale cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl group-hover:bg-white/20 transition-all duration-500">
                <span className="text-white font-bold text-xl tracking-wider drop-shadow-lg">{tech}</span>
                
                {/* Floating Particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-nexflow-pink/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-nexflow-purple/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 opacity-0 animate-fade-scale" style={{ animationDelay: '1s' }}>
          <a
            href="https://wa.me/34622064070"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-2xl text-white font-bold text-lg shadow-premium hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            <span>¡Únete al cambio!</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ParallaxSection;