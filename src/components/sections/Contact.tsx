import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const whatsappNumber = "5514991790555";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para a Fundição Domínio.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const googleMapsAddress = encodeURIComponent("Rua da Saudade, 30 - Distrito Industrial 2, Quintana - SP, 17674-228");
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${googleMapsAddress}`;

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@fundicaodominio.com.br",
      href: "mailto:contato@fundicaodominio.com.br",
      external: false,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(14) 99179-0555",
      href: whatsappLink,
      external: true,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Rua da Saudade, 30 - Dist. Industrial 2, Quintana - SP",
      href: googleMapsLink,
      external: true,
    },
  ];

  return (
    <section id="contato" className="py-24 gradient-dark">
      <div className="section-container">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Entre em <span className="text-gradient-molten">Contato</span>
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Estamos prontos para atender sua demanda. Entre em contato conosco 
            para solicitar um orçamento ou tirar suas dúvidas.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <a
              key={info.label}
              href={info.href}
              target={info.external ? "_blank" : undefined}
              rel={info.external ? "noopener noreferrer" : undefined}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 text-center transition-all duration-500 hover:border-accent/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 cursor-pointer overflow-hidden ${
                cardsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg gradient-molten flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon size={22} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-1 text-foreground group-hover:text-accent transition-colors duration-300">
                  {info.label}
                </h3>
                <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-background px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
          >
            <MessageCircle size={24} className="animate-pulse" />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
