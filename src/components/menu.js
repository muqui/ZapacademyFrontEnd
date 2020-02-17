// Menu.js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Logo from '../images/zap_academy.png';
class Menu extends Component {
  render() {
    return (
        
          <nav className="navbar navbar-expand-lg navbar-light   navbar-dark bg-primary">
            <a class="navbar-brand" href="#">              <img src={Logo} alt='website logo' width="150px" /></a>


            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
          <li className="nav-item"><Link to={'/events'}  className="nav-link" >Eventos</Link></li>
          <li className="nav-item"><Link to={'/event'} className="nav-link">Crear evento</Link></li>
        
          <li className="nav-item"><Link to={'/registrar'} className="nav-link">alta beneficiario</Link></li>
           
          <li className="nav-item"><Link to={'/admin'} className="nav-link">Beneficiarios</Link></li>
            
            <li className="nav-item"><Link to={'/logout'} className="nav-link">Salir</Link></li>

            
           
          </ul>

            </div>
         
          </nav>
       
    );
  }
}

export default Menu;