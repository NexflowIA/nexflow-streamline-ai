import { Search, Paintbrush2, Bot, FlaskConical, BookMarked } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={22} />,
    title: "Analizamos tu proceso",
    description:
      "Mapeamos el flujo actual, identificamos los cuellos de botella y calculamos el tiempo recuperable por semana.",
  },
  {
    number: "02",
    icon: <Paintbrush2 size={22} />,
    title: "Diseñamos el flujo",
    description:
      "Proponemos la arquitectura: qué herramientas conectar, qué modelo de IA usar y cómo encaja con lo que ya tienes.",
  },
  {
    number: "03",
    icon: <Bot size={22} />,
    title: "Creamos el agente o automatización",
    description:
      "Desarrollo real. Sin plantillas genéricas. Construimos el flujo, el agente o el chatbot adaptado a tu empresa.",
  },
  {
    number: "04",
    icon: <FlaskConical size={22} />,
    title: "Probamos con casos reales",
    description:
      "Validamos con datos y escenarios de tu negocio antes de entregar. Sin sorpresas cuando pase a producción.",
  },
  {
    number: "05",
    icon: <BookMarked size={22} />,
    title: "Lo dejamos documentado y mantenible",
    description:
      "Documentación técnica y funcional incluida. Tu equipo puede entenderlo, modificarlo y mantenerlo sin depender de nosotros.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section
      id="como-trabajamos"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#06091c" }}
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-[600px] opacity-8 blur-3xl pointer-events-none"
        style={{ background: "hsl(265, 89%, 67%)" }}
      />

      <div className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Un proceso estructurado para que la automatización encaje en tu
            empresa desde el primer día.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/25 transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-white/20 text-[10px] font-mono font-bold tracking-widest">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-white font-bold text-lg mb-1.5">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
