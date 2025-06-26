
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-4xl font-bold">
              PB
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Olá, eu sou{" "}
            <span className="text-primary">Pedro Henrique Bugica</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transformo ideias em experiências digitais incríveis. 
            Especializado em React, Node.js, Supabase e tecnologias modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
              Entre em contato
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Baixar CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a
                href="https://github.com/pedro-bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a
                href="https://instagram.com/pedro.bugica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
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
