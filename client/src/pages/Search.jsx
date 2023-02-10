import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/index';
import SearchComponent from '../components/Search';

export const Search = () => {
  const [isOpen, setOpen] = useState(false);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Navbar setReverse={setReverse} setStatic={true} />
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <SearchComponent />
      <Footer />
    </>
  );
};
