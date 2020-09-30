import React from 'react';
import Contacto from './contacto/contacto';
import './newsletter.scss';

const Newsletter = () => {
  return(
    <div className="newsletter structure__full-width">
      <p>Newsletter</p>
      <h2>SUSCRIBITE</h2>
      <span className="newsletter__subtitle">Y enterate de todas las novedades</span>
      <Contacto />
    </div>
  )
}

export default Newsletter;