import React from 'react';
import HeroSection from '@/components/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import ServicesSection from '@/components/ServicesSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import TeamSection from '@/components/TeamSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Insights Section */}
      <InsightsSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Diferenciais Section */}
      <DiferenciaisSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Call to Action Section */}
      <ScrollAnimation animation="fade-in">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-golden mb-6">
              Arca. Porque o futuro não espera!
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Transforme seu negócio com estratégias personalizadas e resultados concretos. 
              Entre em contato e descubra como podemos ajudar você a alcançar seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Fale com Nossa Equipe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="nav" size="xl" asChild>
                <Link to="/quem-somos">
                  Conheça a Arca
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Index;
