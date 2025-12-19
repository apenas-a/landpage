import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5514991790555";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@fundicaodominio.com.br",
      href: "mailto:contato@fundicaodominio.com.br",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(14) 99179-0555",
      href: whatsappLink,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Quintana - SP",
      href: "https://maps.google.com/?q=Quintana+SP",
    },
  ];

  return (
    <section id="contato" className="py-24 gradient-dark">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Entre em <span className="text-gradient-molten">Contato</span>
          </h2>
          <div className="w-24 h-1 gradient-molten mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Estamos prontos para atender sua demanda. Entre em contato conosco 
            para solicitar um orçamento ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.label !== "E-mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full gradient-molten flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse">
                <info.icon size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase mb-2 text-foreground">
                {info.label}
              </h3>
              <p className="text-foreground/70 group-hover:text-accent transition-colors">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-background px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
