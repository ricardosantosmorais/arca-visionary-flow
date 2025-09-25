import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean;
}

const Layout = ({ children, transparentNav = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={!transparentNav} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;