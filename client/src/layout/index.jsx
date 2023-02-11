import { useEffect } from 'react';
import { useToggle } from 'domain/hooks';
import { useLocation } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { AppRouter } from 'pages';

export const Layout = () => {
  const [sidebarOpen, toggleSidebarOpen] = useToggle();
  const { pathname } = useLocation();

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
