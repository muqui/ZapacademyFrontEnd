import React, { Component } from 'react';
//import {Link, Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Event from './components/event';
import MisEventos from './components/misEventos';


class App extends Component{
  render(){
    return(
      <Router>
      
     
        <Switch>
            
        <Route exact path='/' component={Login} />
            <Route path='/event' component={Event} />
            <Route path='/events' component={MisEventos} />
           
           
            <Route path='/admin' component={Admin} />
            <Route path='/logout' component={Logout} />

        </Switch>
      
    </Router>
    );
  }
}

export default App;