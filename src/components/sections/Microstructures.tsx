import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import nodularImg from "@/assets/microstructure-nodular.jpg";
import vermicularImg from "@/assets/microstructure-vermicular.jpg";
import cinzentoImg from "@/assets/microstructure-cinzento.jpg";

const Microstructures = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  const structures = [
    {
      name: "Nodular",
      image: nodularImg,
      shape: "Grafita Esferoidal",
      description: "A grafita se apresenta em forma de nódulos esféricos, proporcionando excelente resistência mecânica e ductilidade.",
      properties: ["Alta resistência à tração", "Excelente alongamento", "Boa tenacidade"],
      color: "from-orange-500 to-amber-600",
    },
    {
      name: "Vermicular",
      image: vermicularImg,
      shape: "Grafita Compactada",
      description: "Estrutura intermediária com grafita em forma de vermes, combinando propriedades do nodular e cinzento.",
      properties: ["Condutividade térmica superior", "Resistência à fadiga térmica", "Boa usinabilidade"],
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Cinzento",
      image: cinzentoImg,
      shape: "Grafita Lamelar",
      description: "Grafita em formato de lamelas ou flocos, oferecendo excelente capacidade de amortecimento e fundibilidade.",
      properties: ["Alto amortecimento", "Fácil usinabilidade", "Excelente fundibilidade"],
      color: "from-gray-400 to-gray-600",
    },
  ];

  return (
    <section id="microestruturas" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-molten blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            <span className="text-gradient-molten">Microestruturas</span> do Ferro Fundido
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Cada tipo de ferro fundido possui uma microestrutura única que define 
            suas propriedades mecânicas e aplicações ideais.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {structures.map((structure, index) => (
            <div
              key={structure.name}
              className={`group relative transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={structure.image}
                    alt={`Microestrutura do ferro fundido ${structure.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${structure.color} text-background text-sm font-semibold`}>
                    {structure.shape}
                  </div>

                  {/* Microscope overlay */}
                  <div className="absolute inset-0 border-4 border-accent/0 rounded-full m-8 transition-all duration-500 group-hover:border-accent/30 group-hover:m-4" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold uppercase mb-3 text-accent group-hover:text-accent transition-colors">
                    Ferro Fundido {structure.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {structure.description}
                  </p>
                  
                  {/* Properties */}
                  <ul className="space-y-2">
                    {structure.properties.map((prop, i) => (
                      <li
                        key={prop}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${structure.color}`} />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Microstructures;
