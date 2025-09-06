import Hero from "@/components/hero";
import Philosophy from "@/components/philosophy";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <Hero />
      <Philosophy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
