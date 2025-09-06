import { useEffect, useRef, useState } from "react";
import { 
  Layers, 
  Wrench, 
  Cloud, 
  BookOpen, 
  Users, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

export default function Projects() {
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

  const projects = [
    {
      icon: Layers,
      title: "UI Framework",
      description: "Компонентная библиотека с фокусом на скорость разработки и прекрасный developer experience.",
      status: "Скоро",
      statusColor: "text-primary",
      iconColor: "text-primary",
      bgColor: "bg-primary/20",
      hoverColor: "group-hover:bg-primary/30",
      testId: "card-project-ui-framework"
    },
    {
      icon: Wrench,
      title: "Dev Tools",
      description: "Набор инструментов для автоматизации рутинных задач и ускорения delivery процессов.",
      status: "В планах",
      statusColor: "text-accent",
      iconColor: "text-accent",
      bgColor: "bg-accent/20",
      hoverColor: "group-hover:bg-accent/30",
      testId: "card-project-dev-tools"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Облачные сервисы для быстрого развертывания и масштабирования современных приложений.",
      status: "Идея",
      statusColor: "text-secondary",
      iconColor: "text-secondary",
      bgColor: "bg-secondary/20",
      hoverColor: "group-hover:bg-secondary/30",
      testId: "card-project-cloud-services"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Интерактивная документация и обучающие материалы по современным практикам разработки.",
      status: "Готовится",
      statusColor: "text-primary",
      iconColor: "text-primary",
      bgColor: "bg-primary/20",
      hoverColor: "group-hover:bg-primary/30",
      testId: "card-project-documentation"
    },
    {
      icon: Users,
      title: "Community",
      description: "Сообщество разработчиков, разделяющих философию быстрой и качественной разработки.",
      status: "Формируется",
      statusColor: "text-accent",
      iconColor: "text-accent",
      bgColor: "bg-accent/20",
      hoverColor: "group-hover:bg-accent/30",
      testId: "card-project-community"
    },
    {
      icon: Sparkles,
      title: "И многое другое...",
      description: "Каждый проект будет нести философию простоты, скорости и элегантности в мир разработки.",
      status: "Мечты",
      statusColor: "text-secondary",
      iconColor: "text-secondary",
      bgColor: "bg-secondary/20",
      hoverColor: "group-hover:bg-secondary/30",
      testId: "card-project-dreams"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-projects-title">
            Будущие проекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            GReact — это только начало. Впереди целая экосистема инструментов для современной разработки.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className={`bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={project.testId}
              >
                <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mb-6 ${project.hoverColor} transition-colors`}>
                  <Icon className={`${project.iconColor} text-xl`} />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`text-${project.testId}-title`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-${project.testId}-description`}>
                  {project.description}
                </p>
                <div className={`flex items-center ${project.statusColor} font-medium`}>
                  <span className="mr-2" data-testid={`text-${project.testId}-status`}>
                    {project.status}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
