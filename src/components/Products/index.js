import React from 'react';
import ProductCard from '../../components/Products/ProductCard';

const mockedProducts = [
  {title: 'Lorem Ipsum', price: 9.99, rating: 5},
  {title: 'Lorem Ipsum', price: 9.99, rating: 5},
  {title: 'Lorem Ipsum', price: 9.99, rating: 5},
  {title: 'Lorem Ipsum', price: 9.99, rating: 5}
];

const Products = () => {
  return(
    <div>
      <h3>FOREVER BABY <span>DESTAQUES</span></h3>
      { mockedProducts.map((product) => ProductCard(product)) }
    </div>
  )
};

export default Products;
