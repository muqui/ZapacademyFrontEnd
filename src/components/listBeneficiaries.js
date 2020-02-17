

import React, {Component} from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from '../components/editBeneficiary';
import '../components/modal.css';



class Beneficiario extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowing: false,
            beneficiary: [],
            selectListEvent: [],
        }

    }

    openModalHandler = (beneficiary) => {
      
        this.setState({
            isShowing: true,
            beneficiary :beneficiary
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
        window.location.reload();
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
      
       
   
     </tr>       
     
               { events.map((events) => (             
                <tr >
                    <td  scope="row">{events.CURP}</td>
                    <td >{events.nombre}</td>  
                    <td >{events.apellido_paterno}</td>
                    <td >{events.apellido_materno}</td>  
                    <td > <button className="btn btn-primary"     onClick={()=> this.openModalHandler(events)}>Editar</button> </td>      
                 
                         </tr>
                ))}
              </table>
              <Modal
                    className="invisible"
                   
                    show={this.state.isShowing}
                    beneficiary = {this.state.beneficiary}
                    close={this.closeModalHandler}>
                       
                </Modal>
             </div>
              )
    }
}

export default Beneficiario;