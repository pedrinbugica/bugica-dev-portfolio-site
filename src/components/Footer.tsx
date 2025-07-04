
import { Github, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-4">
              <span className="text-primary">Pedro Henrique</span>
              <span className="text-foreground"> Bugica</span>
            </div>
            <p className="text-muted-foreground text-lg">
              Desenvolvedor de sites institucionais modernos
            </p>
            <p className="text-primary font-mono mt-2">
              pedrobugica.dev
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="https://github.com/pedro-bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="https://instagram.com/pedro.bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="mailto:pedrobugica2@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Pedro Henrique Bugica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
