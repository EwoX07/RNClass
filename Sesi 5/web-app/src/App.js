import React from 'react';
import Navbar from './components/organism/Navbar';
import Invitation from './components/organism/Invitation';
import Detail from './components/organism/Detail';
import About from './components/organism/About';
import Members from './components/organism/Members';
import Past from './components/organism/Past';
import Line from './components/atoms/Line';
import Footer from './components/atoms/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Invitation />
      <Detail />
      <About />
      <Members />
      <Past />
      <Line />
      <Footer />
    </>
  );
};

export default App;
