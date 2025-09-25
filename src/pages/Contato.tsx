import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <ScrollAnimation animation="fade-in">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-golden mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Entre em contato e descubra como a Arca Consultoria pode transformar seu negócio
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation animation="slide-up" delay={200}>
              <Card className="rounded-3xl border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-secondary mb-6">
                    Envie sua Mensagem
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Tipo de Serviço
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors">
                        <option>Selecione o tipo de serviço</option>
                        <option>Consultoria Pessoa Física</option>
                        <option>Consultoria Empresas</option>
                        <option>Consultoria Órgãos Públicos</option>
                        <option>Cybersegurança</option>
                        <option>Gestão Fiscal</option>
                        <option>Agro 4.0</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Mensagem
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-golden focus:ring-1 focus:ring-golden outline-none transition-colors resize-none"
                        placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full group">
                      Enviar Mensagem
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollAnimation animation="slide-up" delay={400}>
                <Card className="rounded-3xl border-0 shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-secondary mb-6">
                      Informações de Contato
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-1">Telefone</h4>
                          <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                          <p className="text-muted-foreground">+55 (11) 3333-3333</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-1">E-mail</h4>
                          <p className="text-muted-foreground">contato@arcaconsultoria.com.br</p>
                          <p className="text-muted-foreground">comercial@arcaconsultoria.com.br</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-1">Endereço</h4>
                          <p className="text-muted-foreground">
                            Av. Paulista, 1234, 10º andar<br />
                            Bela Vista, São Paulo - SP<br />
                            CEP: 01310-100
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-1">Horário de Funcionamento</h4>
                          <p className="text-muted-foreground">
                            Segunda a Sexta: 8h às 18h<br />
                            Sábado: 8h às 12h<br />
                            Domingo: Fechado
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="scale-in" delay={600}>
                <Card className="rounded-3xl border-0 bg-gradient-section">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="w-16 h-16 text-black mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black mb-4">
                      Atendimento Rápido
                    </h3>
                    <p className="text-black/80 mb-6">
                      Precisa de uma resposta urgente? Entre em contato via WhatsApp!
                    </p>
                    <Button variant="secondary" size="lg" className="w-full">
                      Falar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in" delay={800}>
                <Card className="rounded-3xl border-0 shadow-card">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-secondary mb-6">
                      Siga-nos nas Redes Sociais
                    </h3>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-golden rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Instagram className="w-6 h-6 text-black" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-golden rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-6 h-6 text-black" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-golden rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Facebook className="w-6 h-6 text-black" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;