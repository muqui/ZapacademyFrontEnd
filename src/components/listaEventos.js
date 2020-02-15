//Lista de mis eventos Inicio

import React, {Component} from 'react';
import moment from 'moment'
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

   

  
    render(){
        let events = this.props.events;
        
        
            return (
                <div className="container mt-3">


           
                <table className="table table-striped">
                <tr>
     
       <th>Nombre</th>
       <th>FECHA</th>
       <th>LUGAR</th>
       
   
     </tr>    
     
               {events.map((events) => (   
                    <tr> 
                <td>{events.nombreEvento}</td> 
                <td>{ moment(events.fechaInicio).format('DD/MM/YYYY')} </td> 
                <td>{events.lugar}</td>           
                 </tr>
                ))}
              </table>

            
             </div>
        )
    }
}

export default Events;