import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight, User, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: 'Thiago Sersun',
      role: 'CEO e Sócio da Consultoria',
      slug: 'thiago-sersun',
      image: '/placeholder-team-1.jpg',
    },
    {
      id: 2,
      name: 'Ricardo Morais',
      role: 'CTO e Sócio de T.I.',
      slug: 'ricardo-morais',
      image: '/placeholder-team-2.jpg',
    },
    {
      id: 3,
      name: 'Sidney Coelho',
      role: 'CFO e Sócio de Consultoria',
      slug: 'sidney-coelho',
      image: '/placeholder-team-3.jpg',
    },
    {
      id: 4,
      name: 'Edilton Chepanski',
      role: 'CRO e Sócio de Consultoria',
      slug: 'edilton-chepanski',
      image: '/placeholder-team-4.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Conheça a equipe de especialistas por trás da Arca Consultoria
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <ScrollAnimation
              key={member.id}
              animation="scale-in"
              delay={index * 200}
            >
              <Card className="group bg-black text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-golden/20 to-golden/5 flex items-center justify-center">
                    <User className="w-24 h-24 text-golden/60" />
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-golden rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Linkedin className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-golden mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {member.role}
                  </p>
                  
                  <Button variant="hero" size="sm" className="w-full group" asChild>
                    <Link to={`/quem-somos/equipe/${member.slug}`}>
                      Ver Bio Completa
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in" delay={800}>
          <div className="text-center bg-golden rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Arca. Porque o futuro não espera!
            </h3>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/quem-somos">
                Conheça Nossa História
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TeamSection;