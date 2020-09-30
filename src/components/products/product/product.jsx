import React from 'react';
import './product.scss';

const Product = (props) => {

  const { productName, productDescription, productImage, illustrationImage, imagePosition, buyButton, backgroundGray } = props;

  return (
    <div className={"product product--" + imagePosition}>
    
      <div 
        className={"structure__half-width product__description" +
         (backgroundGray ? " product__description--gray" : "") }
        >
        <img src={productImage} alt={productName} />
        <h2>{ productName }</h2>
        <div className="product__line"></div>
        <p>{ productDescription }</p>
      </div>
      
      <div className="structure__half-width product__illustration">
        <img src={ illustrationImage } alt={productName} />
      </div>
    
    </div>
  )
}

export default Product;