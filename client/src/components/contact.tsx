import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" data-testid="text-contact-title">
          Присоединяйтесь к революции
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
          Если вы разделяете философию быстрой, полезной и красивой разработки — давайте создавать будущее вместе.
        </p>
        
        <div 
          className={`gradient-border p-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          data-testid="card-contact"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 font-heading" data-testid="text-subscribe-title">
              Свяжитесь со мной
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-subscribe-description">
              Волшебник-программист, чародей разработки, маг конструирующий программные системы.
            </p>
            
            <div className="flex justify-center">
              <a
                href="https://t.me/nikita_biziaev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                data-testid="link-telegram"
              >
                <Send className="mr-2 h-5 w-5" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
