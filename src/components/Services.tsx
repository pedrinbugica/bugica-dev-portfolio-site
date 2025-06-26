
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Headphones, Smartphone } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Desenvolvimento de Sites Institucionais",
      description: "Sites modernos e responsivos para empresas que querem impressionar e converter visitantes em clientes.",
      icon: Code,
      features: ["Design responsivo", "Performance otimizada", "SEO integrado"]
    },
    {
      title: "Integração com Supabase",
      description: "Formulários funcionais, banco de dados e autenticação para seu site ter funcionalidades reais.",
      icon: Database,
      features: ["Formulários de contato", "Banco de dados", "Sistema de usuários"]
    },
    {
      title: "Back-end Funcional",
      description: "Desenvolvimento de APIs e sistemas backend para envio de dados e funcionalidades avançadas.",
      icon: Smartphone,
      features: ["APIs personalizadas", "Envio de emails", "Integrações"]
    },
    {
      title: "Suporte e Manutenção",
      description: "Suporte contínuo e manutenção mensal para manter seu site sempre atualizado e funcionando.",
      icon: Headphones,
      features: ["Suporte técnico", "Atualizações", "Backups regulares"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meus <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Ofereço soluções completas para sua presença digital, desde o desenvolvimento 
            até o suporte contínuo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
