// Event.js
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
const axios = require('axios')
//import Menu from './components/menu';
export default class Event extends Component{
    constructor(props) {
      super(props)
        axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem("token")}`}
        const token = localStorage.getItem("token")
        let loggedIn = true
        
        if(token == null){
          loggedIn = false
       }
        this.state={
          disabled : false,
            nombre:'',  
            fecha_inicio:'',
            fecha_fin:'', 
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
        event.preventDefault();
        this.refs.btn.setAttribute("disabled", "disabled");
        let currentComponent = this;
        this.value = true;
        const {nombre, fecha_inicio, fecha_fin} = this.state
        const id = localStorage.getItem("id")
        console.log("ID  " + id);
        //console.log("fechaInicio" +  fechaInicio);
        //console.log("fechaFin" +  fechaFin);
        console.log("token" +  localStorage.getItem("token"));
      
       
        
        axios.post('https://zapacademy.herokuapp.com/evento', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${localStorage.getItem("token")}`
          },
         
          nombre,
          fecha_inicio,
          fecha_fin,
          id

        })
        .then(function (response) {
          
          
          
          currentComponent.setState({disabled: false});
      
          console.log(response);
          
          currentComponent.refs.btn.removeAttribute("disabled");
        })
        
    
      }
  render(){
    console.log("token en event ==="  +  localStorage.getItem("token"));
     if(this.state.loggedIn === false){
         return < Redirect to ="/"/>
     }
    return ( 
        <div>
         
     <h1>Crear evento</h1>
      <form onSubmit={this.handleOnAddUser}>
         <input type="text" placeholder="Nombre" name="nombre" value={this.state.nombre} onChange={this.onChange}   />
         <br></br>
         <input type="date" placeholder="Fecha inicio" name="fecha_inicio"  value={this.state.fecha_inicio} onChange={this.onChange}  />
         <br></br>
          <input type="date" placeholder="Fecha Fin" name="fecha_fin"  value={this.state.fecha_fin} onChange={this.onChange}  />
          <br></br>
          <input type="submit" ref="btn" value="Crear Evento"   /> 
      </form>
        </div>
   
    );
  }
  
}

