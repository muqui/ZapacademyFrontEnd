// Contact.js

import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

import Menu from '../components/menu';
import Beneficiario from '../components/listBeneficiaries';
const axios = require('axios')
class Admin extends Component {
    constructor(props) {
        super(props)
         const token = localStorage.getItem("token")
         let loggedIn = true
         if(token == null){
            loggedIn = false
         }

         this.state={
          curp:'',
            loggedIn,
            beneficiaries:[],
            }
            this.onChange = this.onChange.bind(this)
            this.handleOnFindPerson = this.handleOnFindPerson.bind(this)  //si falta: Unhandled Rejection (TypeError): Cannot read property 'setState' of undefined
            
        }      
         onChange(e){
          this.setState({
            [e.target.name]: e.target.value
          })
        }
        handleOnFindPerson (event) {
    
      event.preventDefault();
      let currentComponent = this;
      const {curp} = this.state
      var url = 'https://zapacademy.herokuapp.com/beneficiario/list/' + curp;
     
      axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `bearer ${localStorage.getItem("token")}`
          
        }
      })
        .then(res => {
          const token  = res.data
          currentComponent.setState({
            beneficiaries : token      
            
        })
         
         
          console.log(res.data)
          return token
        });
        console.log("GET")
     

      
  
    }

        componentDidMount() {
          let currentComponent = this;
          //axios.get('https://zapacademy.herokuapp.com/beneficiario/list/cona', {
            axios.get('https://zapacademy.herokuapp.com/beneficiario/beneficiario/list', {
              
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': `bearer ${localStorage.getItem("token")}`
            }
          })
            .then(res => {
              const token  = res.data
              currentComponent.setState({
                beneficiaries : token      
                
            })
            console.log(currentComponent.beneficiaries)
            });
            
        }
  render() {
    //Regresa al login
     if(this.state.loggedIn === false){
         return < Redirect to ="/login"/>
     }


    return (
        <div>
          <Menu />
          <form onSubmit={this.handleOnFindPerson}>
    <label> Busqueda de usuario por CURP: </label>
    <div className="input-group mb-3">
    <input type="text"  className="form-control" placeholder="CURP" name="curp" value={this.state.curp} onChange={this.onChange}   />
      
    </div>
         
          <input type="submit"  class="btn btn-primary"   value="Buscar" />
      </form>
          <h2>Usuarios del programa. </h2>
          {this.state.beneficiaries.length > 0 ? <Beneficiario  events={this.state.beneficiaries}/>: 'Sin resultado..'}
          
          
        </div>
    );
  }
}

export default Admin;