// INICIO

import React, { Component } from 'react';
import Eventos from '../components/listaEventos';
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
            
        }
        onChange(e){
            this.setState({
              [e.target.name]: e.target.value
            })
          }
    handleOnAddUser (event) {
      
        event.preventDefault();
        let currentComponent = this;
        var url = 'https://zapacademy.herokuapp.com/evento/beneficiarios/CONA850603HJCRVL09';
       
        axios.get(url, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${localStorage.getItem("token")}`
          }
        })
          .then(res => {
            const token  = res.data
            
           
           
            console.log(res.data)
            return token
          });
          console.log("GET")
       
 
        
    
      }

  render() {
    return (
        <div>
         
<form onSubmit={this.handleOnAddUser}>
    <label>Capture su CURP para verificar su evento</label>
         <input type="text" placeholder="CURP" name="curp" value={this.state.curp} onChange={this.onChange}   />
         
          <input type="submit" value="Buscar" />
      </form>
      <Eventos  events={this.state.selectListEvent}/>
        </div>
    );
  }
}

export default About;