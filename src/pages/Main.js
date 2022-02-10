import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Header/Navbar';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import Disclaimer from '../components/Footer/Disclaimer';

const Main = () => {
  return(
    <div>
      <Header />
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
