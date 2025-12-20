import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-fundacao-dominio.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#ligas", label: "Ligas" },
    { href: "#processo", label: "Processo" },
    { href: "#produtos", label: "Produtos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="Fundição Domínio" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="gradient-molten text-accent-foreground px-6 py-2.5 rounded font-semibold uppercase text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium uppercase tracking-wide text-sm py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="gradient-molten text-accent-foreground px-6 py-2.5 rounded font-semibold uppercase text-sm tracking-wide text-center mt-2"
              >
                Orçamento
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
