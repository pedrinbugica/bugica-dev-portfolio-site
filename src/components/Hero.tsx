
import { Button } from "@/components/ui/button";
import { Github, Instagram, Mail, ExternalLink } from "lucide-react";

export const Hero = () => {
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
              <span className="text-white">Hi! I'm </span>
              <span className="text-primary">Pedro Henrique</span>
              <br />
              <span className="text-primary">Bugica.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              A passionate <span className="text-primary">pa</span>|
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button 
                size="lg" 
                onClick={scrollToProjects} 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                VIEW MY WORK
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto font-semibold"
              >
                <a href="mailto:pedrobugica2@gmail.com">
                  SUPPORT ME
                </a>
              </Button>
            </div>

            <div className="flex space-x-6">
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

          {/* Right Side - Photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 border-4 border-primary/30 flex items-center justify-center relative overflow-hidden">
              <div className="w-72 h-72 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground text-lg">
                Sua foto aqui
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
