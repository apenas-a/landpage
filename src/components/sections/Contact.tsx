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

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={info.label}
              href={info.href}
              target={info.external ? "_blank" : undefined}
              rel={info.external ? "noopener noreferrer" : undefined}
              className={`bg-card border border-border rounded-lg p-8 text-center transition-all duration-700 group hover:border-accent/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer ${
                cardsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full gradient-molten flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse transition-all duration-300 group-hover:scale-110">
                <info.icon size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                {info.label}
              </h3>
              <p className="text-foreground/70 group-hover:text-accent transition-colors duration-300">
                {info.value}
              </p>
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
