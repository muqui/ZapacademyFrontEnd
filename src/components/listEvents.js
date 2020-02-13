import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Events = ({events}) => {
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
                 <td >{events.status}</td>
                 <td > <Link to={events.imagen+'.jpg'} className="nav-link"> {events.imagen+'.jpg'}</Link> </td>      
                 </tr>
             ))}
           </table>
          </div>
    )
};

export default Events