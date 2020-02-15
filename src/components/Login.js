import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
const axios = require('axios')

export default class Login extends Component{
    constructor(props) {
      super(props)
        let loggedIn = false;
        this.state={
          email:'',
          password:'', 
          loggedIn
          }
          this.onChange = this.onChange.bind(this)
          this.handleOnAddUser = this.handleOnAddUser.bind(this)
          
      }
      onChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleOnAddUser (event) {
        let currentComponent = this;
        const {email, password} = this.state
        //console.log("Email " + email);
        //console.log("password" +  password);
        event.preventDefault();
       
        
        axios.post('https://zapacademy.herokuapp.com/login', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
         
          password,
          email
        })
        .then(function (response) {
          
          const token  = response.data.token
         
          

          if (typeof token !== "undefined") {
            const id = response.data.user.id
          //  console.log(token.length);
            localStorage.setItem("token", token)
            localStorage.setItem("id", id)
            console.log("ID = " + id);
            currentComponent.setState({
                
                loggedIn: true
            })
           
        }
        else{
        }
          
         
        })
        
    
      }
  render(){
    if(this.state.loggedIn){
      return <Redirect to ="/admin" />
    }
    return ( 
      <div className="container mt-3">
        <h1>Login</h1>
<form onSubmit={this.handleOnAddUser}>
<div className="input-group mb-3">
<input type="email"  className="form-control"  placeholder="email" name="email" value={this.state.email} onChange={this.onChange}   />
       
</div>

<div className="input-group mb-3">
<input type="text"  className="form-control"  placeholder="password" name="password"  value={this.state.password} onChange={this.onChange}  />
       
</div>

         
          <input type="submit" className="btn btn-primary" value="Entrar" />
      </form>
      </div>
      
    );
  }
  
}

