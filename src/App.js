import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <div className="App">

      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Banner />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
