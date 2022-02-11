import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const ProductCard = (product) => {
  const [bought, setBought] = useState(false);

  const handleClick = () => {
    setBought(true);
  };

  setTimeout(() => setBought(false), 3000)
  
  return(
    <div className="product-card">
      <a href='/'>
        <img src={ product.img } />
      </a>
        <div className="information">
          <a href="/">
            <h4>{ product.title }</h4>
            <p>R$ { product.price }</p>
          </a>
        </div>
        <ReactStars
          count={5}
          value={product.rating}
          size={24}
          activeColor="#ffd700"
          classNames="stars"
        />
        <button onClick={handleClick}>
          Adicionar ao carrinho
        </button>
        { bought && <span className="bought">Item adicionado ao carrinho</span> }
    </div>
  )
};

export default ProductCard;
