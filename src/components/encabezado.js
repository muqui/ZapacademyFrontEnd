import React, { Component } from 'react';
import Logo from '../images/zap_academy.png';
class Encabezado extends Component {
  render() {
    return (
        <div className="input-group mb-3  bg-primary fondo">
        <img src={Logo} alt='website logo' className="center" />
        </div>
    );
  }
}

export default Encabezado;