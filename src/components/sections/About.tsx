import { Shield, Target, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

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
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-card border border-border rounded-lg p-8 transition-all duration-700 group hover:border-accent/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-lg gradient-molten flex items-center justify-center mb-6 group-hover:animate-glow-pulse transition-all duration-300 group-hover:scale-110">
                <value.icon size={32} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-semibold uppercase mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
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
