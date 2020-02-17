import React, { Component } from 'react';
//import {Link, Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Admin from '../components/Admin';
import Logout from '../components/Logout';
import Event from '../components/event';
import Inicio from '../components/inicio';



import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
//import logo from '../assets/logo.svg';

import '../assets/App.css';
const axios = require('axios')


class App extends Component {
  render() {
    return (
      <Router>


        <Switch>
          <Route path='/admin' component={Admin} />
          <Route exact path='/' component={Inicio} />
          <Route exact path='/login' component={Login} />
          <Route path='/event' component={Event} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />

          <Route path='/logout' component={Logout} />
        </Switch>

      </Router>
    );
  }
}


export default App;