import { CheckCircle } from "lucide-react";
import ironParts from "@/assets/iron-parts.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Products = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation({ threshold: 0.1 });

  const products = [
    {
      name: "Ferro Fundido Nodular",
      description: "Alta resistência mecânica, ductilidade e tenacidade. Ideal para peças que exigem resistência a impactos e fadiga.",
      features: ["Alta resistência à tração", "Excelente ductilidade", "Boa usinabilidade"],
    },
    {
      name: "Ferro Fundido Vermicular",
      description: "Combina propriedades do nodular e cinzento. Excelente condutividade térmica e resistência à fadiga térmica.",
      features: ["Condutividade térmica superior", "Resistência à fadiga térmica", "Amortecimento de vibrações"],
    },
    {
      name: "Ferro Fundido Cinzento",
      description: "Excelente capacidade de amortecimento e usinabilidade. Ideal para bases de máquinas e componentes estruturais.",
      features: ["Fácil usinabilidade", "Alto amortecimento", "Excelente fundibilidade"],
    },
  ];

  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="section-container">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Nossos <span className="text-gradient-molten">Produtos</span>
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Trabalhamos com as principais ligas de ferro fundido para atender às mais diversas 
            aplicações industriais, sempre com foco em qualidade e desempenho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src={ironParts}
              alt="Peças em ferro fundido"
              className="rounded-lg shadow-2xl border border-border transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-molten rounded-lg opacity-20 blur-2xl animate-pulse" />
            <div className="absolute -top-4 -left-4 w-24 h-24 gradient-molten rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Products List */}
          <div ref={listRef} className="space-y-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`bg-card border border-border rounded-lg p-6 transition-all duration-700 group hover:border-accent/50 hover:-translate-x-2 hover:shadow-xl hover:shadow-accent/5 ${
                  listVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-accent group-hover:translate-x-2 transition-transform duration-300">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <CheckCircle size={16} className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
