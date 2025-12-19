import { Shield, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Rigoroso controle de qualidade em todas as etapas do processo de fundição.",
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Peças fundidas com alta precisão dimensional para atender às especificações mais exigentes.",
    },
    {
      icon: Award,
      title: "Experiência",
      description: "Anos de expertise no mercado de fundição, garantindo resultados consistentes.",
    },
  ];

  return (
    <section id="sobre" className="py-24 gradient-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Sobre a <span className="text-gradient-molten">Fundição Domínio</span>
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Localizada em Quintana-SP, somos uma fundição especializada na produção de peças 
            em ferro fundido de alta qualidade. Nossa missão é entender as necessidades 
            de cada cliente para oferecer soluções personalizadas e eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-lg gradient-molten flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <value.icon size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold uppercase mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
