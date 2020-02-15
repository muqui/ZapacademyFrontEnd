//Lista de mis eventos Inicio

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from '../components/popup';
import '../components/modal.css';



class Events extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowing: false,
            selectListEvent: [],
        }

    }

    openModalHandler = (image) => {
       
        this.setState({
            isShowing: true,
            image: image
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        let events = this.props.events;
        
        
            return (
                <div>


           
                <table className="table table-striped">
                <tr>
       <th scope="col" >CURP</th>
       <th>Nombre</th>
       <th>Primer Apellido</th>
       <th>Segundo Apellido</th>
       <th>status</th>
       <th>Evidencia</th>
       
   
     </tr>      
               {events.map((events) => (   
                  
                          
                <tr >
                    <td  scope="row">{events.CURP}</td>
                    <td >{events.nombre}</td>  
                    <td >{events.apellido_paterno}</td>
                    <td >{events.apellido_materno}</td>  
                  
   
                   </tr>
                ))}
              </table>

            
             </div>
        )
    }
}

export default Events;