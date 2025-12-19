import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-foundry.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fundição de metal"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div>
          <h1
            className={`font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Fundição{" "}
            <span className="text-gradient-molten">Domínio</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-foreground/80 font-light italic mb-4 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            "Entender para atender"
          </p>
          <p
            className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Especialistas em ligas de ferro fundido nodular, vermicular e cinzento.
            Qualidade e precisão para a indústria brasileira.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <a
              href="#contato"
              className="gradient-molten text-accent-foreground px-8 py-4 rounded font-semibold uppercase tracking-wide text-lg hover:opacity-90 transition-all duration-300 glow-molten animate-glow-pulse hover:scale-105"
            >
              Solicite um Orçamento
            </a>
            <a
              href="#sobre"
              className="border-2 border-foreground/30 text-foreground px-8 py-4 rounded font-semibold uppercase tracking-wide text-lg hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
            >
              Conheça a Empresa
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#sobre"
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-accent transition-all duration-700 animate-float ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
