import { Terminal, FileSpreadsheet, MessagesSquare, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

const cases = [
  {
    icon: <Terminal size={26} />,
    gradient: "from-violet-500 to-purple-600",
    title: "Copiloto para tickets IT",
    description:
      "Analiza tickets, logs y documentación interna para generar diagnóstico, comandos seguros, respuesta al cliente e informe técnico.",
    problem: {
      label: "Problema",
      text: "El equipo L1/L2 invierte 20-40 min por ticket buscando en logs, wikis y documentación dispersa antes de poder responder.",
    },
    solution: {
      label: "Solución",
      text: "Un agente lee el ticket, cruza la documentación interna, los logs relevantes y genera diagnóstico + respuesta + comandos sugeridos en segundos.",
    },
    result: {
      label: "Resultado esperado",
      text: "Reducción del tiempo medio de resolución en más del 60%. El técnico valida y aprueba en lugar de investigar desde cero.",
    },
  },
  {
    icon: <FileSpreadsheet size={26} />,
    gradient: "from-blue-500 to-cyan-500",
    title: "Automatización de presupuestos",
    description:
      "Convierte formularios, emails, notas o audios en presupuestos estructurados listos para revisar y enviar.",
    problem: {
      label: "Problema",
      text: "Cada presupuesto requiere copiar datos del email al CRM, abrir una plantilla, ajustar líneas de producto y formatearlo. Entre 30 min y 2h por propuesta.",
    },
    solution: {
      label: "Solución",
      text: "El agente extrae los datos del canal de entrada (email, formulario, audio), los cruza con el catálogo y genera el presupuesto formateado y listo para aprobar.",
    },
    result: {
      label: "Resultado esperado",
      text: "Presupuesto generado en menos de 2 minutos. El comercial solo revisa y aprueba. Capacidad de gestionar 5x más propuestas sin aumentar el equipo.",
    },
  },
  {
    icon: <MessagesSquare size={26} />,
    gradient: "from-emerald-500 to-teal-500",
    title: "Chatbot privado de documentación",
    description:
      "Permite consultar manuales, PDFs, procedimientos y documentación interna mediante un asistente privado con respuestas contextualizadas.",
    problem: {
      label: "Problema",
      text: "Los empleados pierden tiempo buscando en carpetas compartidas, Confluence o PDFs sin encontrar la respuesta concreta que necesitan.",
    },
    solution: {
      label: "Solución",
      text: "Un chatbot privado conectado a tu documentación interna que responde en lenguaje natural con referencias exactas al documento fuente.",
    },
    result: {
      label: "Resultado esperado",
      text: "Búsqueda que tardaba 15 min resuelta en segundos. Onboarding de nuevos empleados más rápido. Documentación que por fin se usa.",
    },
  },
];

const UseCasesSection = () => {
  const scrollToForm = () => {
    document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="casos-de-uso"
      className="py-20 md:py-28"
      style={{ background: "#06091c" }}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Casos de uso
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Casos de uso reales
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Ejemplos concretos de lo que construimos. Cada uno parte de un
            problema real y entrega un resultado medible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden hover:border-white/[0.13] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card header */}
              <div className="p-7 pb-5">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-black text-xl mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mx-7 h-px bg-white/[0.06]" />

              {/* Problem / Solution / Result */}
              <div className="p-7 pt-5 flex flex-col gap-4 flex-grow">
                {/* Problem */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-red-500/10">
                    <AlertCircle size={13} className="text-red-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400/70 mb-1">
                      {item.problem.label}
                    </span>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {item.problem.text}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-purple-500/10">
                    <Lightbulb size={13} className="text-purple-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-purple-400/70 mb-1">
                      {item.solution.label}
                    </span>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {item.solution.text}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-green-500/10">
                    <TrendingUp size={13} className="text-green-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-green-400/70 mb-1">
                      {item.result.label}
                    </span>
                    <p className="text-white/45 text-sm leading-relaxed">
                      {item.result.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/35 text-sm mb-5">
            ¿Tienes un proceso similar? Te decimos si se puede automatizar y cuánto tarda.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            Solicitar diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
