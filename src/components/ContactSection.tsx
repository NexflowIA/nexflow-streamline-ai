import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    process: "",
    hours: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://n8n-n8n.vgnh4v.easypanel.host/webhook/0194390d-0061-42aa-b2b8-09459e5858f6",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "diagnostico_form",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "¡Solicitud enviada!",
          description: "Te contactaremos en menos de 24h.",
        });
        setFormData({ name: "", email: "", company: "", process: "", hours: "" });
      } else {
        throw new Error("Error al enviar");
      }
    } catch {
      toast({
        title: "Error",
        description: "Inténtalo de nuevo o escríbenos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="diagnostico"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#06091c" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "hsl(265, 89%, 67%)" }}
      />

      <div className="px-6 md:px-12 lg:px-24 max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
            Gratuito
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
            Pide tu diagnóstico gratuito
          </h2>
          <p className="text-lg text-white/50">
            Cuéntanos qué proceso te quita tiempo. Te diremos si se puede
            automatizar y cómo.
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-12 rounded-2xl border border-green-500/20 bg-green-500/5">
            <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-2xl mb-2">
              ¡Solicitud recibida!
            </h3>
            <p className="text-white/55">
              Te contactaremos en menos de 24 horas para hablar de tu caso.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/55 mb-2">
                  Nombre *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/28 focus:border-purple-500/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/55 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@empresa.com"
                  className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/28 focus:border-purple-500/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/55 mb-2">
                Empresa
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/28 focus:border-purple-500/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/55 mb-2">
                ¿Qué proceso quieres automatizar? *
              </label>
              <Textarea
                name="process"
                value={formData.process}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Ej: Generamos presupuestos copiando datos del CRM a una plantilla Word y enviándolo por email. Hacemos 15 al día."
                className="bg-white/[0.05] border-white/10 text-white placeholder:text-white/28 focus:border-purple-500/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/55 mb-2">
                Horas semanales que pierdes en esa tarea
              </label>
              <Input
                type="text"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                placeholder="Ej: 10 horas/semana"
                className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/28 focus:border-purple-500/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-base font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 hover:scale-[1.01] transition-all duration-300 shadow-lg border-0"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  Recibir diagnóstico
                  <ArrowRight size={20} />
                </div>
              )}
            </Button>

            <p className="text-center text-white/28 text-xs">
              Sin spam. Sin compromiso. Respondemos en menos de 24h.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadFormSection;
