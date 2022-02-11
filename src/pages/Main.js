import React, { useState } from 'react';

import Header from '../components/Header';
import Navbar from '../components/Header/Navbar';
import Hamburguer from '../components/Hamburguer';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import Disclaimer from '../components/Footer/Disclaimer';

const Main = () => {
  const [hamburguer, setHamburguer] = useState(false)

  return(
    <div>
      <Hamburguer setHamburguer={ setHamburguer } />
      <Header hamburguer={ hamburguer } setHamburguer={ setHamburguer } />
      <Navbar />
      <Carousel />
      <Products />
      <Products />
      <Newsletter />
      <Footer />
      <Disclaimer />
    </div>
  ) 
};

export default Main;
