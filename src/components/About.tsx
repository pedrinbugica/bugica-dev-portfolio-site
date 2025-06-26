
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
    "Figma"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Sou um desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência 
                criando soluções web modernas e eficientes. Minha jornada começou com curiosidade 
                sobre como as coisas funcionam na web, e hoje trabalho com as mais recentes 
                tecnologias para criar experiências digitais excepcionais.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Especializo-me em desenvolvimento full stack, com foco especial em React no 
                frontend e Node.js no backend. Para projetos que precisam de uma infraestrutura 
                robusta e escalável, utilizo Supabase como minha principal ferramenta de backend, 
                aproveitando sua capacidade para autenticação, banco de dados e APIs em tempo real.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Sou um entusiasta da inteligência artificial e integro ferramentas como ChatGPT e 
                outras IAs em meu fluxo de trabalho para aumentar a produtividade, resolver problemas 
                complexos e acelerar o desenvolvimento de soluções inovadoras.
              </p>
              <p className="text-lg text-muted-foreground">
                Quando não estou codando, gosto de aprender novas tecnologias, contribuir 
                para projetos open source e compartilhar conhecimento com a comunidade dev.
              </p>
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tecnologias que uso</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
