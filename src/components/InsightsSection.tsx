import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight, Shield, Calculator, Wheat } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      title: 'Cybersegurança',
      subtitle: 'O ativo invisível que protege o futuro do seu negócio',
      description: 'Descubra como implementar estratégias de segurança digital que protegem sua empresa contra ameaças crescentes.',
      icon: Shield,
      slug: 'cyberseguranca',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Gestão Fiscal Inteligente',
      subtitle: 'A chave para não pagar além do necessário',
      description: 'Estratégias avançadas de planejamento tributário para otimizar custos e maximizar resultados.',
      icon: Calculator,
      slug: 'gestao-fiscal',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Agro 4.0',
      subtitle: 'O papel da Arca Consultoria na internacionalização do setor',
      description: 'Como a tecnologia está revolucionando o agronegócio brasileiro e criando oportunidades globais.',
      icon: Wheat,
      slug: 'agro-4.0',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Insights em Destaque
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Conhecimento especializado que transforma desafios em oportunidades de crescimento
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <ScrollAnimation
              key={insight.id}
              animation="scale-in"
              delay={index * 200}
            >
              <Card className="group bg-black text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full">
                <div className="relative">
                  <div className={`h-48 bg-gradient-to-r ${insight.gradient} flex items-center justify-center`}>
                    <insight.icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-golden mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-lg font-semibold text-white mb-4">
                    {insight.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {insight.description}
                  </p>
                  
                  <Button variant="hero" className="w-full group" asChild>
                    <Link to={`/insights/${insight.slug}`}>
                      Ler Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in" delay={600}>
          <div className="text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/insights">
                Ver Todos os Insights
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default InsightsSection;