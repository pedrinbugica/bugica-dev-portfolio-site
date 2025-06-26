
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Impulso Digital",
      description: "Site de marketing digital com landing page focada em vendas e conversão de leads. Design moderno e estratégico para maximizar resultados.",
      image: "/lovable-uploads/f6003135-945c-4d94-b598-37e409e76d2f.png",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
      demo: "https://impulso-digital-landing.lovable.app",
      github: "https://github.com/pedrinbugica"
    },
    {
      title: "Essenza Clínica Estética",
      description: "Site institucional para clínica de estética com sistema de agendamento integrado. Interface elegante e funcional.",
      image: "/lovable-uploads/f6003135-945c-4d94-b598-37e409e76d2f.png",
      technologies: ["React", "Node.js", "Supabase", "Tailwind CSS"],
      demo: "https://essenza-bella-landing.lovable.app",
      github: "https://github.com/pedrinbugica"
    },
    {
      title: "RJB & RJB Advogado",
      description: "Site institucional jurídico com visual sério e moderno. Desenvolvido para transmitir confiança e profissionalismo.",
      image: "/lovable-uploads/f6003135-945c-4d94-b598-37e409e76d2f.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      demo: "https://rivelino.com.br",
      github: "https://github.com/pedrinbugica"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi com foco em design moderno, 
            funcionalidade e resultados reais para meus clientes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-primary text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="border-primary/30 hover:bg-primary/10 flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      asChild 
                      className="bg-primary hover:bg-primary/90 flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Site
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
