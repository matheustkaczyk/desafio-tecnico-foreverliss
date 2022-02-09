import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductCard = (product) => {

  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  
  return(
    <div>
      <img src={ product.img } />
      <div>
        <h4>{ product.title }</h4>
        <p>{ product.price }</p>
        <ReactStars
          count={5}
          value={product.rating}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  )
};

export default ProductCard;
