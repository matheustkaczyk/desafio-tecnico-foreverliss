import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Header/Navbar';
import Products from '../components/Products';

const Main = () => {
  return(
    <div>
      <Header />
      <Navbar />
      <Products />
      <Products />
    </div>
  ) 
};

export default Main;
