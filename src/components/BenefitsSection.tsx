import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Shield,
  BarChart3,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock size={36} />,
      title: "Ahorro de Tiempo",
      description: "Automatiza hasta el 80% de tareas repetitivas",
      metric: "80%",
      detail: "Menos tiempo en tareas manuales",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign size={36} />,
      title: "Reducción de Costes",
      description: "ROI visible desde el primer mes",
      metric: "40%",
      detail: "Reducción promedio de costes operativos",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Mayor Productividad",
      description: "Tu equipo se enfoca en tareas estratégicas",
      metric: "3x",
      detail: "Aumento en productividad",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield size={36} />,
      title: "Reducción de Errores",
      description: "Procesos perfectos, sin errores humanos",
      metric: "95%",
      detail: "Menos errores en procesos automatizados",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    "Implementación rápida (2-4 semanas)",
    "Soporte técnico 24/7",
    "Actualizaciones automáticas",
    "Integración con sistemas existentes",
    "Escalabilidad garantizada",
    "Reporting en tiempo real"
  ];

  return (
    <section id="beneficios" className="section-spacing bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BarChart3 className="text-nexflow-purple animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-black text-nexflow-dark">
              Beneficios Reales
            </h2>
            <Zap className="text-nexflow-pink animate-pulse" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados medibles que transforman tu negocio desde el primer día
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="card-premium text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-3xl bg-gradient-to-br ${benefit.color} text-white shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                    {benefit.icon}
                  </div>
                </div>

                {/* Metric */}
                <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-nexflow-dark mb-3 group-hover:text-nexflow-purple transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>

                {/* Detail */}
                <p className="text-sm text-gray-500 font-medium">
                  {benefit.detail}
                </p>

                {/* Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div>
              <h3 className="text-3xl font-bold text-nexflow-dark mb-8">
                ¿Por qué elegir NEXFLOW?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="text-green-500" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <div className="bg-gradient-to-br from-nexflow-purple/10 to-nexflow-pink/10 rounded-2xl p-8 border border-nexflow-purple/20">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Users className="text-nexflow-purple" size={28} />
                  <h4 className="text-2xl font-bold text-nexflow-dark">
                    Únete a +100 empresas
                  </h4>
                </div>
                <p className="text-gray-600 mb-6">
                  Que ya han transformado sus procesos con nuestra tecnología
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/34622064070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero flex items-center gap-2 justify-center"
                  >
                    Solicitar demo gratuita
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-nexflow-purple/10 to-nexflow-pink/10 rounded-2xl border border-nexflow-purple/20">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-nexflow-purple to-nexflow-pink border-2 border-white flex items-center justify-center text-white font-bold text-sm`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-nexflow-dark">
                +100 empresas satisfechas
              </p>
              <p className="text-sm text-gray-600">
                Promedio 4.9/5 estrellas en satisfacción
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;