import React from 'react';
import './footer.scss';
import logoFooter from './../../assets/logo-footer.png';
import dataFiscal from './../../assets/data-fiscal.png';
import secure from './../../assets/secure.png';
import facebook from './../../assets/logo-facebook.png';
import twitter from './../../assets/logo-twitter.png';
import instagram from './../../assets/logo-instagram.png';
import brandLive from './../../assets/logo-brandlive.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="structure__container">
        <div className="structure__full-width footer__container">

          <div className="structure__fifth-width">
            <a href="/">
              <img src={logoFooter} alt="Pufi" />
            </a>
          </div>

          <div className="structure__fifth-width footer__division">
            <ul className="footer__menu">
              <li><a href="/">pupi rain</a></li>
              <li><a href="/">pupi puff</a></li>
              <li><a href="/">pupi cart</a></li>
              <li><a href="/">pupi nap</a></li>
            </ul>
          </div>

          <div className="structure__fifth-width footer__division">
            <ul className="footer__menu">
              <li><a href="/">contacto</a></li>
              <li><a href="/">ayuda</a></li>
              <li><a href="/">cómo comprar</a></li>
              <li><a href="/">términos y condiciones</a></li>
            </ul>
          </div>

          <div className="structure__fifth-width footer__division">
            <p className="footer__secure-buy">Compra 100% segura</p>
            <div className="footer__fiscal">
              <img src={dataFiscal} alt="Data Fiscal" className="footer__afip" />
              <img src={secure} alt="Secure" className="footer__secure" />
              <span className="footer__guarantee">comprá con <br/>la garantía<br/>de pufi</span>
            </div>
          </div>

          <div className="structure__fifth-width">
            <div className="footer__networks">
              <span>seguinos en</span>
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="structure__container">
          <div className="structure__full-width footer__disclaimer">
            <span>PUFI Copyright 2017 - Todos los derechos reservados</span>
            <a href="https://www.brandlivecommerce.com/" target="_blank">
              <img src={brandLive} alt="brandlive" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;