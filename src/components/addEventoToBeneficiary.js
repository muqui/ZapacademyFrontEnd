import React, { Component } from 'react'
import DynamicSelect from './DynamicSelect';
import Eventos from '../components/listaEventos';

const axios = require('axios')



class modal extends Component {
    constructor(props) {
        super(props)
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }
        const token = localStorage.getItem("token")
       
        this.state = {
            curp : '',
            selectListEvent: [],
            events:[],
            evento : '',
            id : '',
            corona : '',
            visible: true,
            x: props.close,
            'nombre': '',
            'curp': '',
            'apellido_paterno': '',
            'apellido_materno': '',
            'sexo': '',
            'calle': '',
            'numero_int': '',
            'numero_ext': '',
            'cp': '',
            'colonia': '',
            'municipio': '',
            'estado': '',
            'telefono': '',
            'celular': '',
            'correo': ''
        }


        this.onChange = this.onChange.bind(this)
        this.handleOnAddUser = this.handleOnAddUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOnAddEvent = this.handleOnAddEvent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        
        
        var beneficiary = nextProps.beneficiary;
        var id = beneficiary.id;
        var nombre = beneficiary.nombre
        var curp = beneficiary.CURP
        var apellido_paterno = beneficiary.apellido_paterno
        var apellido_materno = beneficiary.apellido_materno
        var sexo = beneficiary.sexo
        var calle = beneficiary.calle
        var numero_int = beneficiary.numero_int
        var numero_ext = beneficiary.numero_ext
        var cp = beneficiary.codigo
        var colonia = beneficiary.colonia
        var municipio = beneficiary.municipio
        var estado = beneficiary.estado
        var telefono = beneficiary.estado
        var celular = beneficiary.celular
        var correo = beneficiary.correo
        this.setState({
            
            'id':id,
            'nombre': nombre,
            'curp': curp,
            'apellido_paterno': apellido_paterno,
            'apellido_materno': apellido_materno,
            'sexo': sexo,
            'calle': calle,
            'numero_int': numero_int,
            'numero_ext': numero_ext,
            'cp': cp,
            'colonia': colonia,
            'municipio': municipio,
            'estado': estado,
            'telefono': telefono,
            'celular': celular,
            'correo': correo
        })
      
       
    }
    componentDidMount  () {
       
        let currentComponent = this;
        axios.get('https://zapacademy.herokuapp.com/evento/eventos', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${localStorage.getItem("token")}`
          }
        })
          .then(res => {
            const token  = res.data
            currentComponent.setState({
              events : token      
              
          })
            
          });

     
      }
    handleChange(e) {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value
        });
    }
    handleOnAddEvent (event) {
        event.preventDefault();
        
        let currentComponent = this;
         const beneficiary_id = this.state.id;
         const event_id = this.state.evento ;
        axios.post('https://zapacademy.herokuapp.com/evento/beneficiario', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${localStorage.getItem("token")}`
          },
         
          beneficiary_id,
          event_id
          
        })
        .then(function (response) {
            alert(response.data);
      
        })


       
        
        
    
      }
    handleSelectChange = async (selectedValue ) =>{
    
        await this.setState({
            evento: selectedValue,
            id : this.props.beneficiary.id,
            curp: this.props.beneficiary.CURP
        });

    
   

     //   await alert(this.state.evento + " ID " + this.state.id);
        
      }
    onChange(e) {
        this.setState({

            [e.target.name]: e.target.value

        })
    }
    handleOnAddUser(event) {

        event.preventDefault();



        const {
            curp,
            nombre,
            apellido_paterno,
            apellido_materno,
            sexo,
            calle,
            numero_int,
            numero_ext,
            cp,
            colonia,
            municipio,
            estado,
            telefono,
            celular,
            correo } = this.state





        axios.put('https://zapacademy.herokuapp.com/beneficiario', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `bearer ${localStorage.getItem("token")}`
            },

            curp,
            nombre,
            apellido_paterno,
            apellido_materno,
            sexo,
            calle,
            numero_int,
            numero_ext,
            cp,
            colonia,
            municipio,
            estado,
            telefono,
            celular,
            correo,

        })
            .then(function (response) {


                alert(response.data)





            })


    }
    render() {
        var x = this.props.beneficiary.nombre
        return (


            <div className="modal-wrapper  "

                style={{

                    visibility: this.props.show ? 'visible' : 'hidden',
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    width : '600px',
                    high: '800px',
                    'overflow-y': 'auto'

                }}>
                <div className="modal-header ">
                    <h3>Asignar evento</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                <form onSubmit={this.handleOnAddEvent} >
                <DynamicSelect arrayOfData={this.state.events} onSelectChange={this.handleSelectChange} /> <br /><br />


                <input type="submit"  class="btn btn-primary"   value="Asignar evento" />
                    </form>

                    <Eventos  className="form-control" events={this.props.myevents}/>






                </div >

            </div >

        )
    }

}

export default modal;
