import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/index';
import SubscriptionSection from '../components/SubscriptionSection/index';
import { observer } from 'mobx-react-lite';

export const Subscription = observer(() => {
  const [isOpen, setOpen] = useState(false);

  const setReverse = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Navbar setReverse={setReverse} setStatic={true} />
      <Sidebar isOpen={isOpen} setReverse={setReverse} />
      <SubscriptionSection />
      <Footer />
    </>
  );
});
