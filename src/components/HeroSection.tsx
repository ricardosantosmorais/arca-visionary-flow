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
    <section className="relative min-h-screen bg-black pt-24 flex items-center overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:pr-8">
            <ScrollAnimation animation="fade-in" delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-golden">Transformando</span>{' '}
                <span className="text-white">negócios,</span>
                <br />
                <span className="text-white">potencializando</span>{' '}
                <span className="text-golden">pessoas</span>{' '}
                <span className="text-white">e criando</span>
                <br />
                <span className="text-golden">impacto positivo</span>{' '}
                <span className="text-white">para o Brasil.</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-up" delay={400}>
              <div className="mb-8">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
                  Arca Consultoria é uma{' '}
                  <strong className="text-golden">empresa especializada em soluções estratégicas para empresas e órgãos públicos.</strong>
                </p>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Nosso foco é entregar resultados concretos, sustentáveis e de alto impacto para nossos clientes. 
                  Tudo isso, <strong className="text-golden">de forma totalmente personalizada.</strong>
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={600}>
              <div className="mb-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">
                    Fale Conosco
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={800}>
              <div>
                <p className="text-golden text-lg md:text-xl font-bold">
                  Arca. Porque o futuro não espera!
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-80 h-80 lg:w-[450px] lg:h-[450px] relative"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <img 
                src={heroIllustration} 
                alt="Business Analytics Illustration" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-golden rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;