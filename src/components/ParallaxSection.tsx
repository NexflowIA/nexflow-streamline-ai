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
    <section className="relative my-32 overflow-hidden">
      {/* Background Container */}
      <div
        className="relative min-h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${abstractTechBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-nexflow-dark/85 via-nexflow-purple/75 to-nexflow-pink/65"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(123, 91, 255, 0.1) 0%, transparent 50%)`
        }}></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Main Message */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  EL CAMBIO YA HA
                  <br />
                  <span className="bg-gradient-to-r from-nexflow-purple via-nexflow-pink to-white bg-clip-text text-transparent animate-pulse">
                    EMPEZADO
                  </span>
                </h1>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-6">
                  ¿TE UNES?
                </h2>
              </div>

              {/* Call to Action Button */}
              <div className="pt-8">
                <a
                  href="https://wa.me/34622064070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500"
                >
                  <Sparkles className="w-6 h-6" />
                  <span>¡Únete al cambio!</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Interactive Tech Showcase */}
            <div className="space-y-8">
              {/* Tech Cards Grid */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Bot, label: "AI", color: "from-blue-500 to-purple-600" },
                  { icon: Zap, label: "RPA", color: "from-purple-500 to-pink-600" },
                  { icon: Sparkles, label: "ML", color: "from-pink-500 to-red-500" }
                ].map((tech, i) => (
                  <div
                    key={tech.label}
                    className="group relative"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {/* Glow Background */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 cursor-pointer group-hover:scale-110">
                      <tech.icon className="w-8 h-8 text-white mx-auto mb-3" />
                      <span className="text-white font-bold text-lg">{tech.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {["Reservas Automáticas", "Gestión de Pedidos", "Atención 24/7"].map((feature, i) => (
                  <div
                    key={feature}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              {/* Restaurant Image Showcase */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-2xl opacity-60 blur-lg"></div>
                <div 
                  className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&h=400&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Automatización en Acción</p>
                    <p className="text-xs opacity-80">Restaurante digitalizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
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
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
};

export default ParallaxSection;