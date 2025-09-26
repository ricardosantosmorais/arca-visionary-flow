import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import { ArrowRight } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Parallax Hero Illustration */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
        <div 
          className="w-96 h-96 lg:w-[500px] lg:h-[500px] opacity-20 lg:opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px)`,
          }}
        >
          <img 
            src={heroIllustration} 
            alt="Business Analytics Illustration" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-golden/20 rounded-3xl transform rotate-12 animate-float"
          style={{
            transform: `rotate(12deg) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-golden/30 rounded-2xl transform -rotate-12 animate-float"
          style={{
            transform: `rotate(-12deg) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            animationDelay: '1s',
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-golden/10 rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <ScrollAnimation animation="fade-in" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
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
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                Arca Consultoria é uma{' '}
                <strong className="text-golden">empresa especializada em soluções estratégicas para empresas e órgãos públicos.</strong>
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Nosso foco é entregar resultados concretos, sustentáveis e de alto impacto para nossos clientes. 
                Tudo isso, <strong className="text-golden">de forma totalmente personalizada.</strong>
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scale-in" delay={600}>
            <div className="flex justify-center mb-12">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contato">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={800}>
            <div className="text-center">
              <p className="text-golden text-xl md:text-2xl font-bold">
                Arca. Porque o futuro não espera!
              </p>
            </div>
          </ScrollAnimation>
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