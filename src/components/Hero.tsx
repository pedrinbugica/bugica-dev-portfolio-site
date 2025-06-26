
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor especializado em sites institucionais modernos e funcionais";
  
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

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Olá! Eu sou </span>
              <span className="text-primary">Pedro Henrique</span>
              <br />
              <span className="text-primary">Bugica.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light h-16">
              {text}<span className="animate-pulse">|</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
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
                asChild
                className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto font-semibold"
              >
                <a href="mailto:pedrobugica2@gmail.com">
                  FALE COMIGO
                </a>
              </Button>
            </div>

            <div className="flex space-x-6">
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

          {/* Right Side - Abstract Code Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 border border-primary/30 rounded-lg"></div>
              
              {/* Animated code lines */}
              <div className="absolute inset-0 p-8 font-mono text-sm">
                <div className="space-y-3 opacity-60">
                  <div className="text-primary animate-pulse">{"<"}<span className="text-accent">div</span> <span className="text-muted-foreground">className</span>=<span className="text-green-400">"hero"</span>{">"}</div>
                  <div className="ml-4 text-blue-400 animate-pulse" style={{animationDelay: '0.5s'}}>{"function"} <span className="text-yellow-400">createSite</span>() {"{"}</div>
                  <div className="ml-8 text-muted-foreground animate-pulse" style={{animationDelay: '1s'}}>{"return"} <span className="text-green-400">"amazing"</span>;</div>
                  <div className="ml-4 text-blue-400 animate-pulse" style={{animationDelay: '1.5s'}}>{"}"}</div>
                  <div className="text-primary animate-pulse" style={{animationDelay: '2s'}}>{"</"}<span className="text-accent">div</span>{">"}</div>
                  
                  <div className="mt-6 text-purple-400 animate-pulse" style={{animationDelay: '2.5s'}}>const <span className="text-yellow-400">tech</span> = [</div>
                  <div className="ml-4 text-green-400 animate-pulse" style={{animationDelay: '3s'}}>"React",</div>
                  <div className="ml-4 text-green-400 animate-pulse" style={{animationDelay: '3.5s'}}>"TypeScript",</div>
                  <div className="ml-4 text-green-400 animate-pulse" style={{animationDelay: '4s'}}>"Tailwind"</div>
                  <div className="text-purple-400 animate-pulse" style={{animationDelay: '4.5s'}}>];</div>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
              
              {/* Floating symbols */}
              <div className="absolute top-4 right-4 text-primary/40 text-2xl animate-pulse">{"{ }"}</div>
              <div className="absolute bottom-4 left-4 text-accent/40 text-2xl animate-pulse" style={{animationDelay: '1s'}}>{"< />"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
