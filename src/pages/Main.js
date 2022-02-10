import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Header/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Main = () => {
  return(
    <div>
      <Header />
      <Navbar />
      <Products />
      <Products />
      <Newsletter />
    </div>
  ) 
};

export default Main;
