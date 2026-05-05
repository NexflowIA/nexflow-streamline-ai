import { Linkedin, ArrowRight, Building2 } from "lucide-react";
import alexProfile from "@/assets/alex-profile.jpg";

const skills = [
  "Kubernetes",
  "Docker",
  "Linux",
  "Windows Server",
  "Active Directory",
  "Nginx",
  "SSL/TLS",
  "DNS",
  "Monitorización",
  "Backups",
  "Troubleshooting",
  "Automatización",
  "IA aplicada a procesos",
];

const experience = [
  {
    company: "Tenea Tecnologías",
    role: "Técnico de Sistemas Nivel 2",
    description:
      "Kubernetes, Docker, Linux, Windows Server, Active Directory, Nginx, monitorización e incidencias L2.",
    color: "from-purple-500 to-violet-600",
  },
  {
    company: "T-Systems Iberia",
    role: "Técnico SmartOPS",
    description:
      "Monitorización multicliente, backups, Oracle, servidores de aplicaciones, Control-M, Remedy, ServiceNow y Jira.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Indra",
    role: "Operador de Sistemas Informáticos",
    description:
      "Soporte de infraestructura para SEAT/CUPRA, VWG y VWFS, monitorización, servidores Windows/Linux, backups y transportes SAP.",
    color: "from-emerald-500 to-teal-600",
  },
];

const AboutSection = () => {
  const scrollToForm = () => {
    document.querySelector("#diagnostico")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="sobre-nexflow"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#06091c" }}
    >
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "hsl(265, 89%, 67%)" }}
      />

      <div className="px-6 md:px-12 lg:px-24 max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            El equipo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Quién está detrás de Nexflow
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Experiencia técnica real en sistemas productivos, no teoría de startup.
          </p>
        </div>

        {/* Profile card */}
        <div className="p-8 md:p-10 rounded-2xl border border-white/[0.07] bg-white/[0.03] mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
            {/* Avatar */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              {/* Replace src with @/assets/alex-profile.jpg once you add the file */}
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-2 ring-purple-500/30">
                  <img
                    src={alexProfile}
                    alt="Alex — Fundador de Nexflow"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#06091c]" />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-black text-2xl mb-0.5">Alex</h3>
              <p className="text-purple-400 font-semibold text-sm mb-5 tracking-wide">
                Fundador de Nexflow · Técnico de Sistemas L2
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
                Soy técnico de sistemas especializado en entornos productivos, automatización
                e infraestructura IT. He trabajado en operación y soporte de sistemas
                multicliente, monitorización, servidores Linux y Windows, Kubernetes, Docker,
                Active Directory, backups, reverse proxy, DNS, SSL/TLS, despliegues e
                incidencias L2.
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                Con Nexflow ayudo a empresas a automatizar procesos repetitivos con IA,
                conectando herramientas, documentación, tickets, emails y flujos internos
                para ahorrar tiempo y reducir errores operativos.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/alex-toscano-965265279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white/75 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium group"
                >
                  <Linkedin size={16} className="text-blue-400" />
                  Ver perfil de LinkedIn
                </a>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 group"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.11] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${exp.color} text-white mb-4`}
              >
                <Building2 size={18} />
              </div>
              <h4 className="text-white font-bold text-base mb-1 leading-snug">
                {exp.company}
              </h4>
              <p className="text-purple-400/80 text-xs font-semibold uppercase tracking-wide mb-3">
                {exp.role}
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills chips */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-purple-500/20 bg-purple-500/8 text-purple-300/80 hover:border-purple-500/40 hover:text-purple-200 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
