
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">Pedro</span>
            <span className="text-foreground">Bugica</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors duration-300"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors duration-300"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors duration-300"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors duration-300"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-primary transition-colors duration-300"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-primary transition-colors duration-300"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors duration-300"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
