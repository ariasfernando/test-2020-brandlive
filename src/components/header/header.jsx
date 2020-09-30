import React from 'react';
import logo from './../../assets/logo.png';
import pufiPuff from './../../assets/pufi-puff.png';
import pufiRain from './../../assets/pufi-rain.png';
import pufiCart from './../../assets/pufi-cart.png';
import pufiNap from './../../assets/pufi-nap.png';
import chevronDown from './../../assets/chevron-down.png';
import './header.scss';

const Header = () => {
  return (
    <header className="structure__full-width header">
      <h1 className="header__logo">
        <a href="/">
          <img src={ logo } alt="Pufi"/>
        </a>
      </h1>

      <ul className="header__sections">
        <li>
          <a href="/">
            <img src={ pufiPuff } alt="pufi puff" />
            <span>pufi puff</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={ pufiRain } alt="pufi rain" />
            <span>pufi rain</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={ pufiCart } alt="pufi cart" />
            <span>pufi cart</span>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={ pufiNap } alt="pufi nap" />
            <span>pufi nap</span>
          </a>
        </li>
      </ul>

      <nav className="header__user">
        <ul>
          <li>
            <a href="/">Mi Cuenta
              <img src={chevronDown} alt="" />
            </a>
          </li>
          <li>
            <a href="/">Mi Compra</a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;