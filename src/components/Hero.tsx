
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const [nameText, setNameText] = useState("");
  const fullText = "Desenvolvedor especializado em sites institucionais modernos e funcionais";
  const nameFullText = "Olá! Eu sou Pedro Henrique Bugica.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    let isTyping = true;
    
    const typewriterLoop = () => {
      const timer = setInterval(() => {
        if (isTyping) {
          setNameText(nameFullText.slice(0, index));
          index++;
          if (index > nameFullText.length) {
            isTyping = false;
            setTimeout(() => {
              clearInterval(timer);
              // Wait 30 seconds before starting to erase
              setTimeout(() => {
                eraseText();
              }, 30000);
            }, 1000);
          }
        }
      }, 100);
    };

    const eraseText = () => {
      const timer = setInterval(() => {
        setNameText(nameFullText.slice(0, index));
        index--;
        if (index < 0) {
          clearInterval(timer);
          index = 0;
          isTyping = true;
          // Start typing again after erasing
          setTimeout(() => {
            typewriterLoop();
          }, 500);
        }
      }, 50);
    };

    typewriterLoop();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{nameText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light h-16">
            {text}<span className="animate-pulse">|</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              VER PROJETOS
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto font-semibold"
            >
              FALE COMIGO
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-all duration-300">
              <a
                href="https://github.com/pedrinbugica"
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToContact}
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
