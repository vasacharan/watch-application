import React from 'react';

import Achievements from '../Component/Achievements';
import Ambasidor from '../Component/Ambasidor';
import Background from '../Component/Background';
import Cards from '../Component/Cards';
import Features from '../Component/Features';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import VRproduct from '../Component/VRproduct';
import VRrange from '../Component/VRrange';
import VRset from '../Component/VRset';
import Watches from '../Component/Watches';

export const Home=()=> {

  return (
    <div>
     
      <Navbar />
      <Background />
      <Features />
      <VRproduct />
      <VRrange />
      <Ambasidor />
      <Cards />
      <VRset />
      <Watches />
      <Achievements />
      <Footer />
      
    </div>
  )
}

export default Home;
