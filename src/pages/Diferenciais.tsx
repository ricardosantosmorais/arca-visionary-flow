import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Users, Cog, Network, Building } from 'lucide-react';

const Diferenciais = () => {
  const differentials = [
    {
      id: 1,
      title: 'Know-how somado dos sócios é de mais de 60 anos de mercado.',
      icon: Users,
    },
    {
      id: 2,
      title: 'Hub de desenvolvimento tecnológico próprio, oferecendo máxima personalização.',
      icon: Cog,
    },
    {
      id: 3,
      title: 'Nossa rede de networking é vasta, possibilitando acessos exclusivos, em diversos setores.',
      icon: Network,
    },
    {
      id: 4,
      title: 'A Arca Consultoria é uma das portas de acesso ao Ecossistema Arca.',
      icon: Building,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-section relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,195,0,0.3)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,195,0,0.3)_0%,transparent_50%)]" />
          
          {/* Geometric Patterns */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-golden/20 rotate-45 rounded-lg" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-golden/20 rotate-12 rounded-lg" />
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-golden/20 -rotate-45 rounded-lg" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <ScrollAnimation animation="slide-up">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Diferenciais
              </h1>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                O que nos torna únicos no mercado de consultoria
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/6 text-golden/30 text-6xl font-bold transform rotate-12">
            Innovation
          </div>
          <div className="absolute top-1/2 right-1/4 text-golden/30 text-4xl font-bold transform -rotate-6">
            Excellence
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-golden/30 text-5xl font-bold transform rotate-45">
            Expertise
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {differentials.map((differential, index) => (
              <ScrollAnimation
                key={differential.id}
                animation="scale-in"
                delay={index * 150}
              >
                <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 text-white hover-lift h-full flex flex-col items-center text-center">
                  <differential.icon className="w-12 h-12 text-golden mb-6" />
                  <p className="text-white leading-relaxed text-lg">
                    {differential.title}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-black border-b-[25px] border-b-golden transform rotate-180" />
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-black border-r-[50px] border-r-transparent border-b-[25px] border-b-golden transform rotate-180" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <ScrollAnimation animation="fade-in">
            <div className="text-center">
              <Button variant="hero" size="xl" className="px-16 py-6 text-xl" asChild>
                <Link to="/contato">
                  FALE COM A NOSSA EQUIPE DE ESPECIALISTAS
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default Diferenciais;