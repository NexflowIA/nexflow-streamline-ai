import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito cambiar mis herramientas actuales?",
    answer:
      "No. Trabajamos sobre lo que ya tienes: tu CRM, tu email, tus hojas de cálculo, tu ERP. Automatizamos los puentes entre ellas, no las reemplazamos. Si alguna herramienta no tiene API, exploramos alternativas como RPA o conectores intermedios.",
  },
  {
    question: "¿Es seguro usar IA con datos internos de mi empresa?",
    answer:
      "Sí, con el enfoque correcto. En proyectos con datos sensibles usamos modelos que se ejecutan localmente o en entornos privados, sin enviar información a servidores externos. También trabajamos con proveedores que ofrecen contratos DPA si tu empresa lo requiere por normativa.",
  },
  {
    question: "¿Cuánto tarda en estar lista una automatización?",
    answer:
      "Depende de la complejidad, pero la mayoría de automatizaciones del pack Starter están listas en 1-2 semanas. Las implementaciones más complejas del pack Pro o Empresa suelen tardar entre 3 y 8 semanas, incluyendo pruebas con datos reales.",
  },
  {
    question: "¿Puedo empezar con algo pequeño para probar?",
    answer:
      "Sí, y lo recomendamos. El pack Starter está diseñado exactamente para eso: automatizar una tarea concreta, ver resultados reales y decidir si ampliar. No pedimos contratos largos ni compromisos de volumen mínimo.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      style={{ background: "#04081a" }}
    >
      <div className="px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-white/50">
            Lo que suelen preguntar antes de empezar.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/[0.07] bg-white/[0.03] rounded-xl px-6 data-[state=open]:border-purple-500/30 data-[state=open]:bg-white/[0.05] transition-all duration-300"
            >
              <AccordionTrigger className="text-white font-semibold text-left hover:no-underline hover:text-purple-300 transition-colors duration-200 py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/55 leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
