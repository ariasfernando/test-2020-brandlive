import React, {Fragment} from 'react';
import './App.scss';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Instagram from './components/instagram/instagram';
import Newsletter from './components/newsletter/newsletter';
import Products from './components/products/products';
import logoPufi from './assets/logo.png';

import { slide as Menu } from 'react-burger-menu'


function App() {
  return (
    <Fragment>
      <div className="common__shadow structure__index-two"></div>
      <Header />
      <Menu className={ "menu-mobile" }>
        <img src={logoPufi} alt="Pufi" />
        <div className="menu-divider"></div>
        <a className="menu-item" href="/">Pufi RAIN</a>
        <a className="menu-item" href="/">Pufi PUFF</a>
        <a className="menu-item" href="/">Pufi CART</a>
        <a className="menu-item" href="/">Pufi NAP</a>
        <div className="menu-divider"></div>
        <a className="menu-item" href="/">Mi cuenta</a>
        <a className="menu-item" href="/">Mi compra</a>
      </Menu>
      <Carousel />
      <div className="structure__container">
        <Products />
        <Instagram />
        <Newsletter />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
