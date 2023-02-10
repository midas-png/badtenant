import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Footer from '../components/Footer/index';
import Options from '../components/Options/index';
import { homeObject1, homeObject2 } from '../components/Info/Data';

export const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <Navbar setReverse={setReverse} />
      <Hero />
      <Info {...homeObject1} />
      <Options />
      <Info {...homeObject2} />
      <Footer />
    </>
  );
}
