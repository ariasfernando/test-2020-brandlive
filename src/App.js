import React, {Fragment} from 'react';
import './App.scss';
import Carousel from './components/carousel/carousel';
import Header from './components/header/header';
import Products from './components/products/products';

function App() {
  return (
    <Fragment>
      <div className="common__shadow structure__index-two"></div>
      <Header />
      <Carousel />
      <div className="structure__container">
        <Products />
      </div>
    </Fragment>
  );
}

export default App;
