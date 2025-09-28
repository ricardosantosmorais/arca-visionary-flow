import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Users, Building2, Landmark, ArrowRight } from 'lucide-react';
import consultingTeamImage from '@/assets/consulting-team.jpg';

const Servicos = () => {
  const services = [
    {
      id: 1,
      title: 'Consultoria Pessoa Física',
      description: 'Auxiliamos pessoas a organizarem suas finanças e tomarem decisões estratégicas para garantir mais segurança, eficiência e crescimento patrimonial.',
      icon: Users,
      image: consultingTeamImage,
    },
    {
      id: 2,
      title: 'Consultoria Empresas',
      description: 'Oferecemos soluções em gestão, eficiência tributária e tecnologia, ajudando empresas a reduzir custos, crescer de forma sustentável e se manterem competitivas no mercado.',
      icon: Building2,
      image: consultingTeamImage,
    },
    {
      id: 3,
      title: 'Consultoria Órgãos Públicos',
      description: 'Apoiamos prefeituras e entidades públicas na modernização da gestão, diagnóstico fiscal e implantação de práticas inovadoras, gerando mais eficiência, transparência e impacto social.',
      icon: Landmark,
      image: consultingTeamImage,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-section relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <ScrollAnimation animation="slide-up">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Serviços Oferecidos
              </h1>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Soluções personalizadas para pessoas físicas, empresas e órgãos públicos
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.id}
                animation="scale-in"
                delay={index * 200}
              >
                <Card className="group bg-black text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full">
                  <div className="relative">
                    {/* Service Image */}
                    <div className="h-48 overflow-hidden rounded-t-3xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    
                    {/* Service Title Badge */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-golden px-8 py-3 rounded-full">
                        <h3 className="text-black font-bold text-lg whitespace-nowrap">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 pt-12">
                    <div className="text-center mb-6">
                      <service.icon className="w-12 h-12 text-golden mx-auto mb-4" />
                    </div>
                    
                    <p className="text-white/90 leading-relaxed text-center mb-8">
                      {service.description}
                    </p>
                    
                    <Button variant="hero" className="w-full group">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="mt-20 text-center">
              <div className="bg-black/80 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-golden mb-4">
                  Precisa de uma solução personalizada?
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Nossa equipe está pronta para desenvolver estratégias sob medida para o seu negócio
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    Fale Conosco
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="secondary" size="lg">
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Servicos;