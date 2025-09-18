import { useState } from "react";
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  MapPin, 
  Clock, 
  Phone,
  Send,
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://n8n-n8n.vgnh4v.easypanel.host/webhook/0194390d-0061-42aa-b2b8-09459e5858f6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <MessageCircle size={32} />,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      value: "+34 622 064 070",
      link: "https://wa.me/34622064070?text=Hola,%20estoy%20interesado%20en%20vuestros%20servicios%20de%20automatización%20con%20IA",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Mail size={32} />,
      title: "Email",
      description: "Respuesta en 24h",
      value: "contacto@thenexflow.com",
      link: "mailto:contacto@thenexflow.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Instagram size={32} />,
      title: "Instagram",
      description: "Síguenos",
      value: "@the.nexflow",
      link: "https://www.instagram.com/the.nexflow",
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="contacto" className="section-spacing bg-gradient-to-br from-gray-50 to-white">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-nexflow-dark mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio con IA y automatización
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-nexflow-purple to-nexflow-pink rounded-2xl text-white">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-bold text-nexflow-dark">
                  Envíanos un mensaje
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-nexflow-purple transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-nexflow-purple transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 border-2 border-gray-200 focus:border-nexflow-purple transition-colors duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-2 border-gray-200 focus:border-nexflow-purple transition-colors duration-300"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-2 border-gray-200 focus:border-nexflow-purple transition-colors duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-nexflow-purple to-nexflow-pink hover:scale-105 transition-transform duration-300 shadow-premium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Enviar mensaje
                      <ArrowRight size={20} />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${method.bgColor} rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-gray-100 hover:shadow-premium group`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${method.color} text-white rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="font-semibold text-gray-800">
                          {method.value}
                        </p>
                      </div>
                      <ArrowRight className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="card-premium">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-nexflow-cyan to-nexflow-purple rounded-2xl text-white">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-nexflow-dark">
                    Información adicional
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Consultas gratuitas</p>
                      <p className="text-gray-600 text-sm">Primera consulta sin compromiso</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Respuesta rápida</p>
                      <p className="text-gray-600 text-sm">Contestamos en menos de 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Soluciones personalizadas</p>
                      <p className="text-gray-600 text-sm">Adaptadas a tu negocio específico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;