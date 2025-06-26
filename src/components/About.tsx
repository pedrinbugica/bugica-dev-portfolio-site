
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const technologies = [
    "React",
    "TypeScript", 
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Lovable"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou desenvolvedor especializado em <strong className="text-foreground">sites institucionais modernos</strong>, 
                com foco em criar experiências digitais elegantes que realmente convertem e 
                impressionam seus clientes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu estilo de trabalho prioriza <strong className="text-foreground">design elegante, performance otimizada</strong> e 
                funcionalidades reais que fazem a diferença no seu negócio. Cada projeto 
                é desenvolvido com atenção aos detalhes e total responsividade.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilizo <strong className="text-primary">Supabase e Node.js</strong> para criar backends robustos, 
                garantindo formulários funcionais, integração com banco de dados e 
                todas as funcionalidades que sua empresa precisa.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integro ferramentas de <strong className="text-accent">inteligência artificial</strong> como ChatGPT e 
                Lovable em meu processo de desenvolvimento, permitindo criar soluções 
                mais eficientes e inovadoras para meus clientes.
              </p>
            </div>
            
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Tecnologias</h3>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 justify-center py-2 text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <h4 className="font-semibold mb-3 text-foreground">Domínio</h4>
                  <p className="text-primary font-mono text-lg">pedrobugica.dev</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
