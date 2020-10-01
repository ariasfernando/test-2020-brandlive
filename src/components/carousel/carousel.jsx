import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import slideImage from '../../assets/slider.jpg';
import './carousel.scss';

const Carousel = () => {

  return(
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      infinite={true}
      className="carousel structure__index-one"
    >
      <Slider>
        <Slide index={0}>
        <img src={slideImage} alt="Prueba"/>
          <div className="carousel__box">
            <h2>Estár cómodo, <br/>nunca fue tan fácil</h2>
            <a href="/" className="common__button">shop</a>
          </div>
        </Slide>
        <Slide index={1}>
          <img src={slideImage} alt="Prueba" />
          <div className="carousel__box">
            <h2>Estár cómodo, <br/>nunca fue tan fácil</h2>
            <a href="/" className="common__button">shop</a>
          </div>
        </Slide>
        <Slide index={2}>
          <img src={slideImage} alt="Prueba" />
          <div className="carousel__box">
            <h2>Estár cómodo, <br/>nunca fue tan fácil</h2>
            <a href="/" className="common__button">shop</a>
          </div>
        </Slide>
      </Slider>
      <DotGroup />
    </CarouselProvider>
  )

}

export default Carousel;