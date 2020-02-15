
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
  constructor(props) {
    super(props)
    localStorage.removeItem("token")
    }
  render() {
    return < Redirect to ="/login"/>
    return (
        <div>
          <h2>You have been logged out </h2>
          
        </div>
    );
  }
}

export default Logout;