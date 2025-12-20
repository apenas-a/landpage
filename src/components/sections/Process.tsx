import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Box, Flame, FlaskConical, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Moldagem",
      subtitle: "Preparação das Caixas",
      icon: Box,
      description: "Criação dos moldes em areia verde ou shell molding, reproduzindo com precisão o formato da peça desejada.",
      details: [
        "Preparação da areia de moldagem",
        "Confecção do modelo",
        "Montagem das caixas de moldagem",
        "Aplicação de revestimentos refratários"
      ],
      color: "from-amber-500 to-orange-600",
    },
    {
      number: "02",
      title: "Fusão",
      subtitle: "Derretimento do Material",
      icon: Flame,
      description: "O metal é aquecido em fornos de indução a temperaturas superiores a 1400°C até atingir o estado líquido.",
      details: [
        "Carregamento do forno com carga metálica",
        "Aquecimento controlado a 1400-1500°C",
        "Adição de ligas e elementos de ajuste",
        "Monitoramento contínuo da temperatura"
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      number: "03",
      title: "Análise",
      subtitle: "Controle Químico",
      icon: FlaskConical,
      description: "Análise espectrométrica em tempo real para garantir a composição química exata da liga.",
      details: [
        "Coleta de amostras do metal líquido",
        "Análise no espectrômetro de emissão",
        "Correção da composição química",
        "Validação dos parâmetros metalúrgicos"
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "04",
      title: "Vazamento",
      subtitle: "Preenchimento dos Moldes",
      icon: Wrench,
      description: "O metal fundido é vazado cuidadosamente nos moldes, respeitando tempo e temperatura ideais.",
      details: [
        "Transporte do metal em panelas refratárias",
        "Vazamento controlado nos moldes",
        "Tempo de solidificação adequado",
        "Desmoldagem e limpeza inicial"
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      number: "05",
      title: "Acabamento",
      subtitle: "Finalização",
      icon: CheckCircle,
      description: "Processos de rebarbação, jateamento, tratamento térmico e usinagem conforme especificação.",
      details: [
        "Rebarbação e corte de canais",
        "Jateamento com granalha de aço",
        "Tratamento térmico quando necessário",
        "Inspeção final e expedição"
      ],
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="processo" className="py-24 gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-molten blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Nosso <span className="text-gradient-molten">Processo</span> de Fundição
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Conheça cada etapa do nosso processo de produção, desde a preparação 
            dos moldes até a entrega do produto final.
          </p>
        </div>

        {/* Process Timeline */}
        <div ref={cardsRef} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border/50 -translate-y-1/2 z-0">
            <div 
              className="h-full gradient-molten transition-all duration-1000"
              style={{ width: cardsVisible ? "100%" : "0%" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.number}
                  className={`transition-all duration-700 ${
                    cardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    onClick={() => setActiveStep(isActive ? null : index)}
                    className={`group cursor-pointer bg-card border rounded-xl p-6 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 ${
                      isActive 
                        ? "border-accent shadow-xl shadow-accent/20 scale-105" 
                        : "border-border hover:border-accent/50 hover:-translate-y-2"
                    }`}
                  >
                    {/* Step Number */}
                    <div className={`text-5xl font-heading font-bold mb-4 transition-all duration-300 bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-50 group-hover:opacity-100`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isActive ? "animate-pulse" : ""}`}>
                      <Icon size={28} className="text-background" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold uppercase mb-1 text-foreground group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-accent mb-3">{step.subtitle}</p>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Expand Indicator */}
                    <div className={`flex items-center gap-2 text-accent text-sm font-medium transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      <span>{isActive ? "Ver menos" : "Ver detalhes"}</span>
                      <ArrowRight size={16} className={`transition-transform duration-300 ${isActive ? "rotate-90" : ""}`} />
                    </div>

                    {/* Expanded Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-48 mt-4 pt-4 border-t border-border" : "max-h-0"}`}>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                            style={{ 
                              opacity: isActive ? 1 : 0,
                              transform: isActive ? "translateX(0)" : "translateX(-10px)",
                              transition: `all 0.3s ease ${i * 0.1}s`
                            }}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mt-1.5 flex-shrink-0`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-foreground/60 text-lg mb-6">
            Quer saber mais sobre nosso processo de produção?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 gradient-molten text-accent-foreground px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
