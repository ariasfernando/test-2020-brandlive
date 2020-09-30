import React, { Fragment } from 'react';
import Product from './product/product';
import productRainIllustration from './../../assets/product-rain-illustration.jpg';
import productPuffIllustration from './../../assets/product-puff-illustration.jpg';
import productCartIllustration from './../../assets/product-cart-illustration.jpg';
import productNapIllustration from './../../assets/product-nap-illustration.jpg';
import productRainImage from './../../assets/product-rain.jpg';
import productPuffImage from './../../assets/product-puff.jpg';
import productCartImage from './../../assets/product-cart.jpg';
import productNapImage from './../../assets/product-nap.jpg';

const Products = () => {

  return (
    <Fragment>
      <Product 
        productName={"Pufi RAIN"}
        productDescription={["Descripción del producto,",<br/> ,"este es un texto simulado"]}
        productImage={productRainImage}
        illustrationImage={productRainIllustration}
        imagePosition={"left"}
        buyButton={true} 
        backgroundGray={true}
      />
      <Product 
        productName={"Pufi PUFF"}
        productDescription={["Descripción del producto,",<br/> ,"este es un texto simulado"]}
        productImage={productPuffImage}
        illustrationImage={productPuffIllustration}
        imagePosition={"right"}
        buyButton={false} 
        backgroundGray={false}
      />
      <Product 
        productName={"Pufi CART"}
        productDescription={["Descripción del producto,",<br/> ,"este es un texto simulado"]}
        productImage={productCartImage}
        illustrationImage={productCartIllustration}
        imagePosition={"left"}
        buyButton={false} 
        backgroundGray={false}
      />
      <Product 
        productName={"Pufi NAP"}
        productDescription={["Descripción del producto,",<br/> ,"este es un texto simulado"]}
        productImage={productNapImage}
        illustrationImage={productNapIllustration}
        imagePosition={"right"}
        buyButton={false} 
        backgroundGray={false}
    />
    </Fragment>
  )
}

export default Products;