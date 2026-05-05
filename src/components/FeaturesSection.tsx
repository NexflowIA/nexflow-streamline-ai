import { Mail, FileText, Headphones, BookOpen, TrendingUp, GitMerge, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: <Mail size={28} />,
    title: "Automatización de emails",
    description:
      "Respuestas automáticas, seguimientos programados y clasificación inteligente de tu bandeja de entrada.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FileText size={28} />,
    title: "Generación de documentos",
    description:
      "Contratos, presupuestos e informes generados al instante desde plantilla y datos de tu CRM.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: <Headphones size={28} />,
    title: "Copilotos para soporte IT",
    description:
      "Asistentes internos que resuelven tickets técnicos repetitivos sin intervención humana.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Chatbots sobre documentación",
    description:
      "Tu equipo pregunta en lenguaje natural y el chatbot encuentra la respuesta en tus manuales y políticas.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Automatización comercial y CRM",
    description:
      "Pipeline de ventas actualizado solo, seguimientos automáticos y cualificación de leads con IA.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: <GitMerge size={28} />,
    title: "Workflows entre herramientas",
    description:
      "Conectamos CRM, ERP, email, hojas de cálculo y formularios para que los datos fluyan sin fricción.",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const SolutionsSection = () => {
  const scrollToForm = () => {
    document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="soluciones"
      className="py-20 md:py-28"
      style={{ background: "#04081a" }}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Lo que creamos para ti
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Cada automatización está diseñada para un caso de negocio real, no
            para una demo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.11] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.gradient} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {solution.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                {solution.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/35 mb-5 text-sm">
            ¿Tu caso no aparece aquí? Diseñamos soluciones a medida.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            Cuéntanos tu proceso
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
