import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductCard = (product) => {

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  
  return(
    <div className="product-card">
      <img src={ product.img } />
        <div className="information">
          <h4>{ product.title }</h4>
          <p>R$ { product.price }</p>
        </div>
        <ReactStars
          count={5}
          value={product.rating}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          classNames="react-stars"
        />
        <button>Adicionar ao carrinho</button>
    </div>
  )
};

export default ProductCard;
