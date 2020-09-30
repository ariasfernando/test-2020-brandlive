import React from 'react';
import './instagram.scss';
import imgInstagram01 from '../../assets/instagram-01.jpg';
import imgInstagram02 from '../../assets/instagram-02.jpg';
import imgInstagram03 from '../../assets/instagram-03.jpg';
import imgInstagram04 from '../../assets/instagram-04.jpg';
import imgInstagram05 from '../../assets/instagram-05.jpg';
import imgInstagram06 from '../../assets/instagram-06.jpg';

const Instagram = () => {
  
  return(
    <div className="instagram structure__full-width">
      <p>Instagram</p>
      <h2>#ESPUFI</h2>
      <div className="instagram__gallery">
        <img src={imgInstagram01} alt="Instagram" />
        <img src={imgInstagram02} alt="Instagram" />
        <img src={imgInstagram03} alt="Instagram" />
        <img src={imgInstagram04} alt="Instagram" />
        <img src={imgInstagram05} alt="Instagram" />
        <img src={imgInstagram06} alt="Instagram" />
      </div>
    </div>
  )
}

export default Instagram;