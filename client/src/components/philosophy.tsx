import { useEffect, useRef, useState } from "react";
import { Zap, Target, Gem } from "lucide-react";

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-philosophy-title">
            Философия разработки
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-philosophy-subtitle">
            Ломаем стереотипы российской разработки. Ценим результат, а не образ "загадочного программиста-крючкотвора".
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Speed Card */}
          <div 
            className={`gradient-border p-8 text-center group hover:scale-105 transition-all duration-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
            data-testid="card-speed"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <Zap className="text-primary text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid="text-speed-title">Скорость</h3>
              <p className="text-muted-foreground" data-testid="text-speed-description">
                Задачи решаются за часы, а не недели. Быстрый delivery в production без лишней бюрократии.
              </p>
            </div>
          </div>
          
          {/* Utility Card */}
          <div 
            className={`gradient-border p-8 text-center group hover:scale-105 transition-all duration-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
            data-testid="card-utility"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                <Target className="text-accent text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid="text-utility-title">Польза</h3>
              <p className="text-muted-foreground" data-testid="text-utility-description">
                Фокус на реальной пользе и результате. Никакой искусственной сложности ради сложности.
              </p>
            </div>
          </div>
          
          {/* Beauty Card */}
          <div 
            className={`gradient-border p-8 text-center group hover:scale-105 transition-all duration-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
            data-testid="card-beauty"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <Gem className="text-secondary text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid="text-beauty-title">Красота</h3>
              <p className="text-muted-foreground" data-testid="text-beauty-description">
                Элегантный код и прекрасный UX. Технологии должны радовать, а не пугать.
              </p>
            </div>
          </div>
        </div>
        
        {/* Manifesto */}
        <div 
          className={`gradient-border p-12 text-center ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
          data-testid="card-manifesto"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 gradient-text" data-testid="text-manifesto-title">
              Манифест разработчика
            </h3>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-4xl mx-auto" data-testid="text-manifesto-quote">
              "В мировых практиках современные фреймворки созданы именно для этого — задача должна решаться за несколько часов, 
              сразу попадать в прод, а не висеть в голове неделями. Пора ломать стереотип российской кастомной разработки 
              и создавать вокруг задач не ореол сакральной сложности, а культуру эффективности."
            </blockquote>
            <div className="mt-8">
              <span className="text-primary font-semibold" data-testid="text-manifesto-author">
                — Волшебник-программист, чародей разработки
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
