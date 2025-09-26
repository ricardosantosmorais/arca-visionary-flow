import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-black pt-20 flex items-center">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Transformando</span>{' '}
                <span className="text-golden">negócios</span>
                <span className="text-white">, potencializando</span>{' '}
                <span className="text-golden">pessoas</span>
                <span className="text-white"> e criando</span>{' '}
                <span className="text-golden">impacto positivo</span>{' '}
                <span className="text-white">para o</span>{' '}
                <span className="text-golden">Brasil</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={400}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Arca Consultoria é uma empresa especializada em soluções estratégicas para empresas e órgãos públicos. 
                Nosso foco é entregar resultados concretos, sustentáveis e de alto impacto.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">
                    Fale Conosco
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                  Conheça Nossos Serviços
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={800}>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Soluções personalizadas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-2 h-2 bg-golden rounded-full"></div>
                  <span>Resultados concretos</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Badge flutuante */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-20">
              <div className="bg-golden text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Excelência comprovada
              </div>
            </div>
            
            {/* Imagem principal */}
            <div 
              className="w-full max-w-lg lg:max-w-xl relative"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <img 
                  src={heroIllustration} 
                  alt="Business Analytics and Consulting Illustration" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline na parte inferior */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ScrollAnimation animation="fade-in" delay={1000}>
          <p className="text-golden text-lg font-semibold text-center">
            Arca. Porque o futuro não espera!
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;