import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Mail, Phone, MapPin, Facebook, Twitter, MessageCircle } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'Início',
    path: '/'
  }, {
    name: 'Insights',
    path: '/insights'
  }, {
    name: 'Serviços',
    path: '/servicos'
  }, {
    name: 'Diferenciais',
    path: '/diferenciais'
  }, {
    name: 'Quem Somos',
    path: '/quem-somos'
  }, {
    name: 'Trabalhe Conosco',
    path: '/trabalhe-conosco'
  }, {
    name: 'Contato',
    path: '/contato'
  }];
  const services = [{
    name: 'Consultoria Pessoa Física',
    path: '/servicos/pessoa-fisica'
  }, {
    name: 'Consultoria Empresas',
    path: '/servicos/empresas'
  }, {
    name: 'Consultoria Órgãos Públicos',
    path: '/servicos/orgaos-publicos'
  }];
  const socialLinks = [{
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }];
  return <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">ARCA</span>
                <span className="text-golden ml-1 text-sm">CONSULTORIA</span>
              </div>
            </Link>
            
            <p className="text-white/80 leading-relaxed">
              Transformando negócios, potencializando pessoas e criando impacto positivo para o Brasil.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden" />
                <span className="text-white/80">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden" />
                <span className="text-white/80">contato@arcaconsultoria.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-golden mt-1" />
                <span className="text-white/80">
                  Av. Paulista, 1234<br />
                  São Paulo, SP - 01310-100
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-golden mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-white/80 hover:text-golden transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-golden mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map(service => <li key={service.path}>
                  <Link to={service.path} className="text-white/80 hover:text-golden transition-colors">
                    {service.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-golden mb-6">Conecte-se</h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-white/80">
                Receba insights exclusivos e novidades da Arca Consultoria.
              </p>
              
              <div className="flex flex-col space-y-3">
                <input type="email" placeholder="Seu e-mail" className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden" />
                <Button variant="hero" size="sm" className="w-full">
                  Inscrever-se
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-golden mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-golden hover:text-black transition-all duration-300 hover:scale-110" aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 text-sm">
                © 2024 Arca Consultoria. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <Link to="/politica-privacidade" className="text-white/60 hover:text-golden text-sm transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos-uso" className="text-white/60 hover:text-golden text-sm transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Desenvolvido com</span>
              <span className="text-golden">❤</span>
              <span>pela Arca Consultoria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button variant="hero" size="lg" className="rounded-full shadow-golden animate-float" asChild>
          
        </Button>
      </div>
    </footer>;
};
export default Footer;