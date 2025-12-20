import logo from "@/assets/logo-fundacao-dominio.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Fundição Domínio" className="h-12 w-auto" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Início
            </a>
            <a href="#sobre" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Sobre
            </a>
            <a href="#ligas" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Ligas
            </a>
            <a href="#processo" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Processo
            </a>
            <a href="#produtos" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Produtos
            </a>
            <a href="#contato" className="text-foreground/60 hover:text-accent transition-colors text-sm">
              Contato
            </a>
          </nav>

          <p className="text-foreground/50 text-sm">
            © {currentYear} Fundição Domínio. Todos os direitos reservados.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-foreground/40 text-xs">
            Quintana - SP | contato@fundicaodominio.com.br | (14) 99179-0555
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
