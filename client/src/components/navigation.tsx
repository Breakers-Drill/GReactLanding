import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text" data-testid="logo-greact">
              GReact
            </span>
          </div>
          
          {!isMobile ? (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-home"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection("philosophy")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-philosophy"
                >
                  Философия
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-projects"
                >
                  Проекты
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-contact"
                >
                  Контакты
                </button>
              </div>
            </div>
          ) : (
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="button-mobile-menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="md:hidden bg-card border border-border rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-mobile-home"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("philosophy")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-mobile-philosophy"
              >
                Философия
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-mobile-projects"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-mobile-contact"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
