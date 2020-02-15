// Event.js
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Menu from '../components/menu';
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
            lugar:'',
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
        const {nombre, fecha_inicio, fecha_fin, lugar} = this.state
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
          lugar,
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
         return < Redirect to ="/login"/>
     }
    return ( 
        <div>
         <Menu />
     <h1>Crear evento</h1>
   
       
      <form onSubmit={this.handleOnAddUser}>
      <div class="input-group mb-3">
      <input type="text" className="form-control"  placeholder="Nombre" name="nombre" value={this.state.nombre} onChange={this.onChange}   />
      </div>
      <div class="input-group mb-3">
      <input type="text" className="form-control"  placeholder="lugar" name="lugar" value={this.state.lugar} onChange={this.onChange}   />
         
      </div>
      <div class="input-group mb-3">
      <input type="date" className="form-control"  placeholder="Fecha inicio" name="fecha_inicio"  value={this.state.fecha_inicio} onChange={this.onChange}  />
       
        </div>   
        <div class="input-group mb-3">
        <input type="date"  className="form-control" placeholder="Fecha Fin" name="fecha_fin"  value={this.state.fecha_fin} onChange={this.onChange}  />
        
        </div>
     
        
         
         
         
          <input type="submit" class="btn btn-primary"  ref="btn" value="Crear Evento"   /> 
      </form>
     
        </div>
   
    );
  }
  
}

