// Contact.js

import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import Menu from '../components/menu';
class Admin extends Component {
    constructor(props) {
        super(props)
         const token = localStorage.getItem("token")
         let loggedIn = true
         if(token == null){
            loggedIn = false
         }

         this.state={
            loggedIn
            }
        }

  render() {
    //Regresa al login
     if(this.state.loggedIn === false){
         return < Redirect to ="/login"/>
     }

    return (
        <div>
          <Menu />
          <h2>This is a Admin Page. Only Auth people   can see this.</h2>
           <Link to ="/logout">Logout</Link>
        </div>
    );
  }
}

export default Admin;