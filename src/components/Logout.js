
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Logout extends Component {
  constructor(props) {
    super(props)
    localStorage.removeItem("token")
    }
  render() {
    return (
        <div>
          <h2>You have been logged out </h2>
          
        </div>
    );
  }
}

export default Logout;