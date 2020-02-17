import React, { Component } from 'react'
import Menu from '../components/menu';
import Encabezado from '../components/encabezado';

const axios = require('axios')



class modal extends Component {
    constructor(props) {
        super(props)
        axios.defaults.headers.common = { 'Authorization': `bearer ${localStorage.getItem("token")}` }
        const token = localStorage.getItem("token")

        this.state = {
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

    }

    componentWillReceiveProps(nextProps) {
        // alert(nextProps.beneficiary.nombre)
        var beneficiary = nextProps.beneficiary;
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
    handleChange(e) {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value
        });
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


            <div className= "modal-wrapper  " 

                style={{
                   
                    visibility: this.props.show ? 'visible' : 'hidden',
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header ">
                    <h3> {this.props.beneficiary.nombre}</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">


                    <div className="form-group ">
                        <p>Editar Usuario</p>
                    </div>
                    <form onSubmit={this.handleOnAddUser}>
                        <div class="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">CURP</label>
                                        <input type="text" className="form-control" name="curp" defaultValue={this.state.curp} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" value={this.state.nombre} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">Primer Apellido</label>
                                        <input type="text" className="form-control" name="apellido_paterno" defaultValue={this.state.apellido_paterno} onChange={this.onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">Primer Apellido</label>
                                        <input type="text" className="form-control" name="apellido_paterno" defaultValue={this.state.apellido_paterno} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">Segundo Apellido</label>
                                        <input type="text" className="form-control" name="apellido_materno" value={this.state.apellido_materno} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group ">
                                        <label for="apellido_paterno">Sexo</label>
                                        <select type="text" className="form-control" name="sexo" value={this.state.sexo} onChange={this.onChange} >
                                            <option value="HOMBRE">Hombre</option>
                                            <option value="MUJER">Mujer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Calle</label>
                                    <input type="text" className="form-control" name="calle" value={this.state.calle} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Número ext.</label>
                                    <input type="text" className="form-control" name="numero_ext" value={this.state.numero_ext} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Número Int.</label>
                                    <input type="text" className="form-control" name="numero_int" defaultValue={this.state.numero_int} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Código postal</label>
                                    <input type="text" className="form-control" name="cp" value={this.state.cp} onChange={this.onChange} />
                                </div>
                            </div>
                            </div>
                            
                           
                        </div>

                        <div className="row">
                          
                           
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Colonia</label>
                                    <input type="text" className="form-control" name="colonia" value={this.state.colonia} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">municipio</label>
                                    <input type="text" className="form-control" name="municipio" defaultValue={this.state.municipio} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Estado</label>
                                    <input type="text" className="form-control" name="estado" value={this.state.estado} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Teléfono</label>
                                    <input type="text" className="form-control" name="telefono" value={this.state.telefono} onChange={this.onChange} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                           
                            
                           
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Celular</label>
                                    <input type="text" className="form-control" name="celular" defaultValue={this.state.celular} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group ">
                                    <label for="apellido_paterno">Correo</label>
                                    <input type="text" className="form-control" name="correo" value={this.state.correo} onChange={this.onChange} />
                                </div>
                            </div>

                        </div>



                       




                    <input type="submit" class="btn btn-primary" value="Editar usurio" />

                    </form>



            </div>

            </div >

        )
    }

}

export default modal;
