import React, { Component } from 'react'

export default class UserForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddUser}>
         <input type="email" placeholder="Email" name="email"/>
          <input type="text" placeholder="Password" name="password" />
         
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}

