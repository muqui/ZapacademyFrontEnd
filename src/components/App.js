import React, { Component } from 'react';
//import {Link, Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
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


class App extends Component{
  render(){
    return(
      <Router>
      
     
        <Switch>
            <Route exact path='/' component={Inicio} />
            <Route exact path='/login' component={Login} />
            <Route path='/event' component={Event} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/admin' component={Admin} />
            <Route path='/logout' component={Logout} />
        </Switch>
      
    </Router>
    );
  }
}

/*
class App extends Component {
  constructor(props) {
    let loggedIn = false;
    super(props);
    this.state={
      email:'',
      password:'', 
      loggedIn
      }
    ;
  }

  handleOnAddUser (event) {
    event.preventDefault();
    console.log("Alberto Corona NAvarro");
    axios.post('https://zapacademy.herokuapp.com/login', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      password: '123456',
      email: 'coronanavarro@gmail.com'
    })
    .then(function (response) {
      console.log(response);
    })

  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        
        <div>
          <p><strong>Login</strong></p>
        
          <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  }
}
*/
export default App;