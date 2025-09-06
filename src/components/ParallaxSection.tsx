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
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${abstractTechBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-nexflow-dark/70"></div>
      
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

        {/* Interactive elements */}
        <div className="flex justify-center gap-8 mt-12">
          {["AI", "RPA", "ML"].map((tech, i) => (
            <div
              key={tech}
              className="glass-card px-6 py-3 animate-fade-scale interactive-scale cursor-pointer"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <span className="text-white font-bold text-lg">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ParallaxSection;