import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight, User, Building2, Landmark } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Consultoria Pessoa Física',
      description: 'Auxiliamos pessoas a organizarem suas finanças e tomarem decisões estratégicas para garantir mais segurança, eficiência e crescimento patrimonial.',
      features: [
        'Planejamento financeiro pessoal',
        'Estruturação de investimentos',
        'Planejamento tributário',
        'Assessoria em previdência',
      ],
      icon: User,
      slug: 'pessoa-fisica',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Consultoria Empresas',
      description: 'Oferecemos soluções em gestão, eficiência tributária e tecnologia, ajudando empresas a reduzir custos, crescer de forma sustentável e se manterem competitivas no mercado.',
      features: [
        'Gestão e otimização financeira',
        'Diagnóstico de processos internos',
        'Planejamento estratégico',
        'Implementação de tecnologia',
      ],
      icon: Building2,
      slug: 'empresas',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Consultoria Órgãos Públicos',
      description: 'Apoiamos prefeituras e entidades públicas na modernização da gestão, diagnóstico fiscal e implantação de práticas inovadoras, gerando mais eficiência, transparência e impacto social.',
      features: [
        'Modernização da gestão administrativa',
        'Diagnóstico fiscal e arrecadação',
        'Implementação de práticas de eficiência',
        'Suporte em políticas públicas',
      ],
      icon: Landmark,
      slug: 'orgaos-publicos',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-golden rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-golden rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-golden/30 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-golden mb-6">
              Serviços Oferecidos
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Soluções estratégicas personalizadas para cada perfil de cliente
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.id}
              animation="slide-up"
              delay={index * 200}
            >
              <Card className="group bg-gradient-to-br from-golden/10 to-transparent border-golden/20 rounded-3xl overflow-hidden hover-lift h-full">
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-r ${service.color} flex items-center justify-center relative overflow-hidden`}>
                    <service.icon className="w-16 h-16 text-white z-10" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 pt-12">
                  <h3 className="text-2xl font-bold text-golden mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <div className="w-2 h-2 bg-golden rounded-full mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="hero" className="w-full group" asChild>
                    <Link to={`/servicos/${service.slug}`}>
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="scale-in" delay={600}>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-golden text-golden hover:bg-golden hover:text-black" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;