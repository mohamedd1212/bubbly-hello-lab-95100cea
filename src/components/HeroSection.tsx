import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              Available for freelance work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{" "}
            <span className="text-gradient">Mohamed Shaaban</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Frontend Developer
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I build exceptional digital experiences with modern technologies.
            Passionate about clean code, intuitive design, and solving complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="glow px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm font-mono">Scroll</span>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
