// Menu.js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
         
            <li><Link to={'/event'} className="nav-link">Crear evento</Link></li>
            <li><Link to={'/logout'} className="nav-link">Salir</Link></li>


           
          </ul>
          </nav>
       
    );
  }
}

export default Menu;