import { useEffect, useState } from "react";
import { Sparkles, Zap, Bot } from "lucide-react";
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
    <section className="relative my-20 overflow-hidden">
      {/* Background Container */}
      <div
        className="relative min-h-screen flex items-center justify-center py-20"
        style={{
          backgroundImage: `url(${abstractTechBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nexflow-purple/40 via-transparent to-nexflow-pink/40"></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-12">
            
            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight">
                EL CAMBIO YA HA
              </h1>
              
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black">
                <span className="bg-gradient-to-r from-nexflow-purple via-nexflow-pink to-white bg-clip-text text-transparent">
                  EMPEZADO
                </span>
              </h1>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8">
                ¿TE UNES?
              </h2>
            </div>

            {/* Tech Cards */}
            <div className="flex flex-wrap justify-center gap-6 mt-16">
              {[
                { icon: Bot, label: "AI", description: "Inteligencia Artificial" },
                { icon: Zap, label: "RPA", description: "Automatización de Procesos" },
                { icon: Sparkles, label: "ML", description: "Machine Learning" }
              ].map((tech, i) => (
                <div
                  key={tech.label}
                  className="group relative transform hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 cursor-pointer min-w-[200px]">
                    <tech.icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <h3 className="text-white font-bold text-2xl mb-2">{tech.label}</h3>
                    <p className="text-white/80 text-sm">{tech.description}</p>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <a
                href="https://wa.me/34622064070?text=Hola,%20estoy%20interesado%20en%20vuestros%20servicios%20de%20automatización%20con%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500"
              >
                <Sparkles className="w-6 h-6" />
                <span>¡Únete al cambio!</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
    </section>
  );
};

export default ParallaxSection;