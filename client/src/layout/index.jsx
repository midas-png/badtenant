import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { AppRouter } from 'pages';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (window.scrollY > 80) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LayoutWrapper>
      <Navbar setReverse={toggleSidebarOpen} setStatic={pathname !== '/'} />
      <Sidebar isOpen={sidebarOpen} setReverse={toggleSidebarOpen} />
      <AppRouter />
      {pathname !== '/signin' && pathname !== '/signup' && <Footer />}
    </LayoutWrapper>
  );
};
