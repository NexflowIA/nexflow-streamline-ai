import { Check, Zap, Sparkles, Building2, ArrowRight } from "lucide-react";

const packs = [
  {
    name: "Starter",
    price: "490 €",
    priceLabel: "desde",
    tagline: "Para probar sin riesgo.",
    description:
      "Una automatización concreta, bien hecha y entregada en 1-2 semanas.",
    icon: <Zap size={22} />,
    gradient: "from-blue-500 to-cyan-400",
    border: "border-white/[0.08]",
    highlighted: false,
    features: [
      "1 automatización a medida",
      "Análisis del proceso incluido",
      "Integración con herramientas existentes",
      "Documentación entregada",
      "1 mes de soporte post-entrega",
    ],
    cta: "Empezar con Starter",
  },
  {
    name: "Pro",
    price: "1.500 €",
    priceLabel: "desde",
    tagline: "Para automatizar un área entera.",
    description:
      "Comercial, soporte o backoffice: varias automatizaciones + un agente o chatbot.",
    icon: <Sparkles size={22} />,
    gradient: "from-purple-500 to-pink-500",
    border: "border-purple-500/35",
    highlighted: true,
    features: [
      "Hasta 4 automatizaciones",
      "Agente o chatbot incluido",
      "Integraciones con CRM/ERP",
      "Panel de monitorización básico",
      "3 meses de soporte y ajustes",
    ],
    cta: "Empezar con Pro",
  },
  {
    name: "Empresa",
    price: "3.000 €",
    priceLabel: "desde",
    tagline: "Transformación operativa real.",
    description:
      "Múltiples flujos, agentes internos y externos, formación del equipo y soporte continuo.",
    icon: <Building2 size={22} />,
    gradient: "from-emerald-500 to-teal-500",
    border: "border-white/[0.08]",
    highlighted: false,
    features: [
      "Automatizaciones ilimitadas en el proyecto",
      "Agentes internos y externos",
      "Formación al equipo incluida",
      "Infraestructura y hosting si se requiere",
      "Soporte y mantenimiento anual",
    ],
    cta: "Solicitar propuesta",
  },
];

const PacksSection = () => {
  const scrollToForm = () => {
    document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="packs"
      className="py-20 md:py-28"
      style={{ background: "#04081a" }}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Precios
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Elige tu punto de entrada
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Sin contrato de permanencia. Sin licencias ocultas. Pagas por el
            trabajo entregado.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`relative flex flex-col p-8 rounded-2xl border ${pack.border} ${
                pack.highlighted
                  ? "bg-gradient-to-br from-purple-500/12 to-pink-500/8"
                  : "bg-white/[0.03]"
              } hover:-translate-y-1 hover:border-white/20 transition-all duration-300`}
            >
              {/* Popular badge */}
              {pack.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-[11px] font-bold tracking-widest text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full uppercase">
                    Más popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${pack.gradient} text-white mb-5 w-fit`}
              >
                {pack.icon}
              </div>

              {/* Name + price */}
              <h3 className="text-white font-black text-2xl mb-1">{pack.name}</h3>
              <div className="mb-1">
                <span className="text-white/40 text-sm">{pack.priceLabel} </span>
                <span className="text-3xl font-black text-gradient">{pack.price}</span>
              </div>
              <p className="text-white/35 text-xs font-semibold uppercase tracking-wider mb-2">
                {pack.tagline}
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-7">
                {pack.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className="text-purple-400 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-white/65">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 group ${
                  pack.highlighted
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 hover:scale-[1.01]"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {pack.cta}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/28 text-sm mt-8">
          ¿Dudas sobre qué pack encaja mejor? El diagnóstico gratuito te lo
          aclara.
        </p>
      </div>
    </section>
  );
};

export default PacksSection;
