import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from './ScrollAnimation';
import { Clock, Lightbulb, Network, Building } from 'lucide-react';

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      id: 1,
      title: 'Know-how somado dos sócios é de mais de 60 anos de mercado.',
      icon: Clock,
      delay: 0,
    },
    {
      id: 2,
      title: 'Hub de desenvolvimento tecnológico próprio, oferecendo máxima personalização.',
      icon: Lightbulb,
      delay: 200,
    },
    {
      id: 3,
      title: 'Nossa rede de networking é vasta, possibilitando acessos exclusivos, em diversos setores.',
      icon: Network,
      delay: 400,
    },
    {
      id: 4,
      title: 'A Arca Consultoria é uma das portas de acesso ao Ecossistema Arca.',
      icon: Building,
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC300' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Diferenciais
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de consultoria estratégica
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {diferenciais.map((diferencial, index) => (
            <ScrollAnimation
              key={diferencial.id}
              animation="scale-in"
              delay={diferencial.delay}
            >
              <Card className="group bg-black text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full min-h-[280px] flex flex-col">
                <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full">
                  <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <diferencial.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <p className="text-white font-medium leading-relaxed text-lg">
                    {diferencial.title}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in" delay={800}>
          <div className="text-center bg-black/5 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Descubra como nossos diferenciais podem impulsionar seus resultados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-black/90 hover:scale-105 transition-all duration-300 shadow-elegant">
                FALE COM A NOSSA EQUIPE DE ESPECIALISTAS
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DiferenciaisSection;