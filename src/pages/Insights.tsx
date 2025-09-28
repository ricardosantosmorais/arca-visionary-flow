import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ArrowRight, Shield, Calculator, Wheat } from 'lucide-react';
import cybersecurityImage from '@/assets/cybersecurity-insight.jpg';
import fiscalImage from '@/assets/fiscal-management.jpg';
import agroImage from '@/assets/agro-technology.jpg';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: 'Cybersegurança',
      subtitle: 'O ativo invisível que protege o futuro do seu negócio',
      description: 'Descubra como implementar estratégias de segurança digital que protegem sua empresa contra ameaças crescentes no cenário tecnológico atual.',
      icon: Shield,
      slug: 'cyberseguranca',
      image: cybersecurityImage,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Gestão Fiscal Inteligente',
      subtitle: 'A chave para não pagar além do necessário',
      description: 'Estratégias avançadas de planejamento tributário para otimizar custos e maximizar resultados através de uma gestão fiscal eficiente.',
      icon: Calculator,
      slug: 'gestao-fiscal',
      image: fiscalImage,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Agro 4.0',
      subtitle: 'O papel da Arca Consultoria na internacionalização do setor',
      description: 'Como a tecnologia está revolucionando o agronegócio brasileiro e criando oportunidades globais para expansão internacional.',
      icon: Wheat,
      slug: 'agro-4.0',
      image: agroImage,
      gradient: 'from-amber-500 to-orange-500',
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
                Insights em Destaque
              </h1>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Conhecimento especializado que transforma desafios em oportunidades de crescimento
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <ScrollAnimation
                key={insight.id}
                animation="scale-in"
                delay={index * 200}
              >
                <Card className="group bg-black text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full">
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${insight.gradient} opacity-60`} />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <insight.icon className="w-12 h-12 text-white" />
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

          {/* Newsletter Section */}
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="mt-20 text-center">
              <div className="bg-black/80 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-golden mb-4">
                  Receba nossos insights
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  Fique por dentro das últimas tendências e estratégias do mercado
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  <Button variant="hero" size="default">
                    Inscrever-se
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

export default Insights;