import { Code, Palette, Zap, Coffee } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code, label: "Clean Code", value: "5+ Years" },
    { icon: Palette, label: "UI/UX Focus", value: "Pixel Perfect" },
    { icon: Zap, label: "Performance", value: "Optimized" },
    { icon: Coffee, label: "Coffee Consumed", value: "∞ Cups" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I transform ideas 
                into elegant, functional applications.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Code Snippet */}
              <div className="bg-card rounded-lg p-4 border border-border font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span> = {"{"}
                  <br />
                  <span className="ml-4 text-muted-foreground">name:</span>{" "}
                  <span className="text-green-400">"John Doe"</span>,
                  <br />
                  <span className="ml-4 text-muted-foreground">role:</span>{" "}
                  <span className="text-green-400">"Full-Stack Dev"</span>,
                  <br />
                  <span className="ml-4 text-muted-foreground">loves:</span>{" "}
                  <span className="text-green-400">["React", "TypeScript", "Coffee"]</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-xl font-bold mb-1">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
