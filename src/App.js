import React, {Fragment} from 'react';
import './App.scss';
import Carousel from './components/carousel/carousel';
import Header from './components/header/header';

function App() {
  return (
    <Fragment>
      <div className="common__shadow structure__index-two"></div>
      <div className="structure__container structure__index-three">
        <Header />
      </div>
      <Carousel />
    </Fragment>
  );
}

export default App;
