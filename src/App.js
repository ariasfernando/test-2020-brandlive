import React, {Fragment} from 'react';
import './App.scss';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Instagram from './components/instagram/instagram';
import Newsletter from './components/newsletter/newsletter';
import Products from './components/products/products';

function App() {
  return (
    <Fragment>
      <div className="common__shadow structure__index-two"></div>
      <Header />
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
