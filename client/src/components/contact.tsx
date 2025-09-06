import { useState, useEffect, useRef } from "react";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите email адрес",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email адрес",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Успешно!",
      description: "Спасибо за подписку! Мы свяжемся с вами, когда появятся новости о проекте."
    });
    setEmail("");
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", testId: "link-github" },
    { icon: Twitter, href: "#", label: "Twitter", testId: "link-twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn", testId: "link-linkedin" },
    { icon: Send, href: "#", label: "Telegram", testId: "link-telegram" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-title">
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
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-subscribe-title">
              Следите за развитием проекта
            </h3>
            <p className="text-muted-foreground mb-8" data-testid="text-subscribe-description">
              Подпишитесь на обновления и станьте частью сообщества современных разработчиков.
            </p>
            
            {/* Email subscription form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-muted border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                data-testid="input-email"
              />
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-all"
                data-testid="button-subscribe"
              >
                Подписаться
              </Button>
            </form>
            
            {/* Social links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-muted hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all group"
                    aria-label={social.label}
                    data-testid={social.testId}
                  >
                    <Icon className="text-xl text-muted-foreground group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
