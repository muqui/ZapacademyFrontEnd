// INICIO

import React, { Component } from 'react';
import Eventos from '../components/listaEventos';
import  Encabezado from '../components/encabezado';
import '../components/inicio.css';
const axios = require('axios')
class About extends Component {
    constructor(props) {
        super(props)
          let loggedIn = false;
          this.state={
            curp:'',
            selectListEvent: [],
           
            }
            this.onChange = this.onChange.bind(this)
            this.handleOnAddUser = this.handleOnAddUser.bind(this)  //si falta: Unhandled Rejection (TypeError): Cannot read property 'setState' of undefined
            
        }
        onChange(e){
            this.setState({
              [e.target.name]: e.target.value
            })
          }
    handleOnAddUser (event) {
      
        event.preventDefault();
        let currentComponent = this;
        const {curp} = this.state
        var url = 'https://zapacademy.herokuapp.com/beneficiarios/' + curp;
       
        axios.get(url, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            
          }
        })
          .then(res => {
            const token  = res.data
            currentComponent.setState({
              selectListEvent : token      
              
          })
           
           if(res.data.lenght < 0){
            console.log("Sin resultados")
           
           }
           alert("OK")
            var r = res.data;
            console.log(r);
           // return token
          });
         
       
 
        
    
      }

  render() {
    return (
        <div className="container mt-3 ">
         
          <Encabezado />
         
<form onSubmit={this.handleOnAddUser}>
    <label>Capture su CURP para verificar su evento: </label>
    <div className="input-group mb-3">
    <input type="text"  className="form-control" placeholder="CURP" name="curp" value={this.state.curp} onChange={this.onChange}   />
      
    </div>
         
          <input type="submit"  class="btn btn-primary"   value="Buscar" />
      </form>
     
      <Eventos  className="form-control" events={this.state.selectListEvent}/>
      
    
        </div>
    );
  }
}

export default About;