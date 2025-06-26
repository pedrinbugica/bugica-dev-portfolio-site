
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail, ExternalLink } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-accent to-primary/60 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              PB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">Pedro Henrique</span>
            <br />
            <span className="text-foreground">Bugica</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-muted-foreground mb-8 font-light">
            Desenvolvedor de sites institucionais modernos
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Especializado em criar experiências digitais elegantes com foco em 
            design moderno, performance e funcionalidades reais para sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Projetos
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto font-semibold"
            >
              <a href="mailto:rivelino@rivelino.com.br">
                Entrar em Contato
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="https://github.com/pedro-bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="https://instagram.com/pedro.bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="mailto:pedrobugica2@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
