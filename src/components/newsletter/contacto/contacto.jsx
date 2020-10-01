import React, { useState } from 'react';
import './contacto.scss';

const Contacto = () => {

  const [email, actualizarEmail] = useState("");

  const formSubmit = e => {
    e.preventDefault();
    if(!validateEmail(email)) {
      alert("Por favor ingresá un correo electrónico válido");
    } else {
      alert("Gracias por suscribirte a nuestro newsletter!");
    }
  }

  const updateEmail = e => {
    actualizarEmail(e.target.value);
  }

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  return (
    <form
      className="contacto"
      onSubmit={formSubmit}>

      <input 
        type="text"
        className="contacto__email"
        placeholder="Ingresa tu email"
        onChange={updateEmail} />

      <button
        type="submit"
        className="contacto__submit">
      </button>

    </form>
  );
}

export default Contacto;