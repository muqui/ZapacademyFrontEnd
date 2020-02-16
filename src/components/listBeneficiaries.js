

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from '../components/popup';
import '../components/modal.css';



class Beneficiario extends Component{
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
        //this.props && this.props.partners.length > 0 ?
       
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
                    <td > <button className="btn btn-primary"     onClick={this.openModalHandler}>Editar</button> </td>      
                 
                         </tr>
                ))}
              </table>
              <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                       
                </Modal>
             </div>
              )
    }
}

export default Beneficiario;