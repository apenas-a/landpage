import { CheckCircle } from "lucide-react";
import ironParts from "@/assets/iron-parts.jpg";

const Products = () => {
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
        <div className="text-center mb-16">
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
          <div className="relative">
            <img
              src={ironParts}
              alt="Peças em ferro fundido"
              className="rounded-lg shadow-2xl border border-border"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-molten rounded-lg opacity-20 blur-2xl" />
          </div>

          {/* Products List */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-semibold uppercase mb-3 text-accent">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
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
