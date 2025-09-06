import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-nexflow-purple/10 via-background to-nexflow-pink/10 flex items-center justify-center section-padding">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-nexflow-purple/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search size={64} className="text-nexflow-purple animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-nexflow-dark mb-4">
          Página no encontrada
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          La página que buscas no existe o ha sido movida. 
          Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="btn-hero flex items-center gap-2"
          >
            <Home size={20} />
            Volver al inicio
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="btn-glass flex items-center gap-2 text-nexflow-dark hover:text-white"
          >
            <ArrowLeft size={20} />
            Página anterior
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-1 bg-gradient-to-r from-nexflow-purple to-nexflow-pink rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
