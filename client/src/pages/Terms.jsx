import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Notebook from '../components/Notebook';
import Footer from '../components/Footer';

export const Terms = () => {
  const [isOpen, setOpen] = useState(false);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  const bringToHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (window.scrollY >= 80) {
      bringToHome();
    }
  });

  return (
    <>
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <Navbar setReverse={setReverse} setStatic={true} />
      <Notebook />
      <Footer />
    </>
  );
};
