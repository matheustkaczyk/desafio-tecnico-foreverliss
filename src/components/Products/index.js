import React from 'react';
import ProductCard from '../../components/Products/ProductCard';

const mockedProducts = [
  {title: 'Lorem Ipsum', price: 9.99, rating: 3, img: 'https://static.natura.com/cdn/ff/ize5NnoK68yZD8LFWhR76rW1i725cL7l5TveW0BV1YA/1644397880/public/products/92800_3.jpg'},
  {title: 'Lorem Ipsum', price: 9.99, rating: 5, img: 'https://m.media-amazon.com/images/I/71Ov97SGBuL._AC_SL1500_.jpg'},
  {title: 'Lorem Ipsum', price: 9.99, rating: 2, img: 'https://static.natura.com/sites/default/files/styles/medium/public/products/92795_1_8.jpg?itok=75aYIUa2'},
  {title: 'Lorem Ipsum', price: 9.99, rating: 5, img: 'https://images-shoptime.b2w.io/produtos/4274975606/imagens/colonia-avon-care-baby-100ml/4274975606_1_large.jpg'}
];

const Products = () => {
  return(
    <div className="products-session">
      <h3>FOREVER BABY <span>DESTAQUES</span></h3>
      <div className="products">
        { mockedProducts.map((product) => ProductCard(product)) }
      </div>
    </div>
  )
};

export default Products;
