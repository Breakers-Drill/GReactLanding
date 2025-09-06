import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Philosophy from "@/components/philosophy";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
