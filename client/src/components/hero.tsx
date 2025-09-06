import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPhilosophy = () => {
    const element = document.getElementById("philosophy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      ></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading" data-testid="text-hero-title">
            <span className="gradient-text">GReact</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-heading" data-testid="text-hero-subtitle">
            Магия современной разработки
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            Начало большой цепочки удивительных IT проектов, библиотек, сервисов и фреймворков. 
            Где скорость, польза и красота важнее сложности.
          </p>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToPhilosophy}
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="text-muted-foreground text-2xl" />
      </div>
    </section>
  );
}
