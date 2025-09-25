import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  isScrolled?: boolean;
}

const Navigation = ({ isScrolled = false }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = scrolled || isScrolled 
    ? 'bg-black/95 backdrop-blur-md shadow-elegant' 
    : 'bg-transparent';

  const textColor = scrolled || isScrolled ? 'text-white' : 'text-white';

  const navItems = [
    { name: 'Início', path: '/' },
    {
      name: 'Insights',
      path: '/insights',
      submenu: [
        { name: 'Todos os Insights', path: '/insights' },
        { name: 'Cybersegurança', path: '/insights/cyberseguranca' },
        { name: 'Gestão Fiscal', path: '/insights/gestao-fiscal' },
        { name: 'Agro 4.0', path: '/insights/agro-4.0' },
      ],
    },
    {
      name: 'Serviços',
      path: '/servicos',
      submenu: [
        { name: 'Pessoa Física', path: '/servicos/pessoa-fisica' },
        { name: 'Empresas', path: '/servicos/empresas' },
        { name: 'Órgãos Públicos', path: '/servicos/orgaos-publicos' },
      ],
    },
    { name: 'Diferenciais', path: '/diferenciais' },
    {
      name: 'Quem Somos',
      path: '/quem-somos',
      submenu: [
        { name: 'Nossa História', path: '/quem-somos' },
        { name: 'Equipe', path: '/quem-somos/equipe' },
      ],
    },
    { name: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
  ];

  const languages = [
    { code: 'PT', name: 'Português' },
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="w-10 h-10 bg-gradient-golden rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <div>
              <span className={`text-xl font-bold ${textColor}`}>ARCA</span>
              <span className="text-golden ml-1 text-sm">CONSULTORIA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className={`flex items-center space-x-1 ${textColor} hover:text-golden transition-colors font-medium`}>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black/95 backdrop-blur-md border-white/10">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.path} asChild>
                          <Link
                            to={subItem.path}
                            className="text-white hover:text-golden transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={`${textColor} hover:text-golden transition-colors font-medium ${
                      location.pathname === item.path ? 'text-golden' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 ${textColor} hover:text-golden transition-colors font-medium`}>
                <span>PT</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 backdrop-blur-md border-white/10">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="text-white hover:text-golden">
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button variant="hero" size="default" asChild>
              <Link to="/contato">FALE CONOSCO</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${textColor} hover:text-golden transition-colors`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-white hover:text-golden transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block py-1 text-white/80 hover:text-golden transition-colors text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="px-4 pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                    FALE CONOSCO
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;