import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import consultingTeamImage from '@/assets/consulting-team.jpg';

const QuemSomos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Thiago Sersun',
      position: 'CEO e Sócio da Consultoria',
      image: consultingTeamImage,
      bio: 'Especialista em gestão empresarial com mais de 15 anos de experiência no mercado.'
    },
    {
      id: 2,
      name: 'Ricardo Morais',
      position: 'CTO e Sócio de T.I.',
      image: consultingTeamImage,
      bio: 'Líder em tecnologia e inovação, responsável pelo desenvolvimento de soluções digitais.'
    },
    {
      id: 3,
      name: 'Sidney Coelho',
      position: 'CFO e Sócio de Consultoria',
      image: consultingTeamImage,
      bio: 'Especialista em finanças corporativas e planejamento estratégico financeiro.'
    },
    {
      id: 4,
      name: 'Edilton Chepanski',
      position: 'CRO e Sócio de Consultoria',
      image: consultingTeamImage,
      bio: 'Especialista em relacionamento com clientes e desenvolvimento de negócios.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

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
                Quem Somos
              </h1>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Conheça a equipe de especialistas que move a Arca Consultoria
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/6 text-golden/50 text-8xl font-bold transform rotate-12">
            TEAM
          </div>
          <div className="absolute bottom-1/4 right-1/6 text-golden/50 text-6xl font-bold transform -rotate-12">
            EXCELLENCE
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-16">
              {teamMembers.map((member, index) => (
                <ScrollAnimation
                  key={member.id}
                  animation="scale-in"
                  delay={index * 150}
                >
                  <Card className="group bg-black/90 backdrop-blur-sm text-white rounded-3xl overflow-hidden hover-lift border-0 shadow-card h-full">
                    <div className="relative">
                      {/* Member Photo */}
                      <div className="h-80 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      {/* Member Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 mb-4">
                          <h3 className="text-xl font-bold text-golden mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {member.position}
                          </p>
                        </div>
                        
                        <Button variant="hero" className="w-full text-sm">
                          VER BIO COMPLETA
                        </Button>
                      </div>
                    </div>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Company Message */}
          <ScrollAnimation animation="fade-in" delay={600}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-golden rounded-full px-12 py-6 inline-block">
                <h2 className="text-2xl font-bold text-black">
                  Arca. Porque o futuro não espera!
                </h2>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="slide-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-golden mb-8">
                Nossa História
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                A Arca Consultoria nasceu da visão de profissionais experientes que acreditam no poder da transformação através do conhecimento especializado. Com mais de 60 anos de experiência somada entre nossos sócios, construímos uma trajetória sólida baseada na excelência, inovação e resultados concretos.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Nosso compromisso é ser mais que uma consultoria - somos parceiros estratégicos na jornada de crescimento e transformação dos nossos clientes, oferecendo soluções personalizadas que geram impacto real e duradouro.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
};

export default QuemSomos;