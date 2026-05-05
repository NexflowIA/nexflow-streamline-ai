import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020b18 0%, #04081a 50%, #060414 100%)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "hsl(265, 89%, 67%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "hsl(320, 100%, 74%)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 11) % 100}%`,
              background:
                i % 3 === 0
                  ? "hsl(265,89%,67%)"
                  : i % 3 === 1
                  ? "hsl(320,100%,74%)"
                  : "hsl(190,100%,70%)",
              opacity: 0.35 + (i % 4) * 0.1,
              animationDelay: `${(i * 0.7) % 6}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto pt-24 pb-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10 animate-fade-scale">
          <Sparkles size={13} className="text-purple-400" />
          <span className="text-sm text-white/65 font-medium tracking-wide">
            Automatización con IA para empresas
          </span>
          <Sparkles size={13} className="text-pink-400" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-7 animate-slide-up">
          Automatiza procesos de
          <br />
          <span className="text-gradient">tu empresa con IA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/55 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Creamos agentes, asistentes y flujos inteligentes que reducen tareas
          manuales, responden clientes, generan documentos y conectan tus
          herramientas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button
            onClick={() => scrollTo("#diagnostico")}
            className="btn-hero flex items-center gap-3 group"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <button
            onClick={() => scrollTo("#soluciones")}
            className="btn-glass flex items-center gap-3 group"
          >
            Ver casos de uso
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Trust pills */}
        <div className="mt-14 flex items-center justify-center gap-6 flex-wrap animate-fade-scale">
          {[
            "Sin cambiar tus herramientas",
            "Primera consulta gratis",
            "Resultados en semanas",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#problemas")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/50 transition-colors duration-300 animate-bounce"
        aria-label="Siguiente sección"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
