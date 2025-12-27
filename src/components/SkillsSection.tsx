const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    },
    {
      title: "UI/UX",
      skills: ["Responsive Design", "Framer Motion", "Sass", "Bootstrap", "Material UI"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Chrome DevTools"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">// SKILLS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My Tech <span className="text-gradient">Stack</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
