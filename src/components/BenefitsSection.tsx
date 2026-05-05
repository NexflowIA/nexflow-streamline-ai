import { Mail, Clock, Ticket, FileText, GitMerge, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: <Mail size={26} />,
    title: "Demasiados emails manuales",
    description:
      "Respuestas repetitivas, seguimientos que se pierden, tiempo enterrado en la bandeja de entrada.",
  },
  {
    icon: <Clock size={26} />,
    title: "Presupuestos lentos",
    description:
      "Generar un presupuesto tarda horas porque implica copiar datos de varios sitios y reformatearlos.",
  },
  {
    icon: <Ticket size={26} />,
    title: "Tickets repetitivos",
    description:
      "El equipo de soporte responde las mismas 20 preguntas todos los días sin ningún valor añadido.",
  },
  {
    icon: <FileText size={26} />,
    title: "Documentos dispersos",
    description:
      "Contratos, informes y fichas en carpetas distintas, sin control de versiones ni búsqueda rápida.",
  },
  {
    icon: <GitMerge size={26} />,
    title: "Datos duplicados entre herramientas",
    description:
      "CRM, hoja de cálculo, email y ERP no hablan entre sí. Los datos se desincronizán constantemente.",
  },
];

const ProblemsSection = () => {
  const scrollToForm = () => {
    document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="problemas"
      className="py-20 md:py-28"
      style={{ background: "#06091c" }}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            El problema
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            ¿Te suena algo de esto?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Estos bloqueos operativos cuestan horas cada semana y frenan el
            crecimiento de tu empresa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-red-500/25 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10 text-red-400 group-hover:bg-red-500/18 transition-colors duration-300">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-white/48 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="p-7 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/8 flex flex-col justify-center">
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Si reconoces más de dos de estos problemas,{" "}
              <strong className="text-white font-semibold">
                ya tienes potencial real para automatizar.
              </strong>
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors duration-200 group"
            >
              Pide tu diagnóstico gratuito
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
