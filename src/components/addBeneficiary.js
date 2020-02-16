import React, { Component } from 'react'
const axios = require('axios')

export default class modal extends Component{
    constructor(props) {
        super(props)
        axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem("token")}`}
        const token = localStorage.getItem("token")
        this.state={
            show : false
             
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
            
            let currentComponent = this;
            this.value = true;
            const { curp,
                
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
              correo} = this.state
            const id = localStorage.getItem("id")
            console.log("ID  " + id);
            //console.log("fechaInicio" +  fechaInicio);
            //console.log("fechaFin" +  fechaFin);
            console.log("token" +  localStorage.getItem("token"));
          
           
            
            axios.post('https://zapacademy.herokuapp.com/beneficiario', {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `bearer ${localStorage.getItem("token")}`
              },
             
              curp,
              id,
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
            correo
    
            })
            .then(function (response) {
              
              
              
              currentComponent.setState({disabled: false});
          
              console.log(response);
              
             
            })
            
        
          }
        render(){
            let show = this.props.show;
            let close = this.props.close;
            return (
                <div>
                   
                    <div className="modal-wrapper"
                    
                        style={{
                            transform: show? 'translateY(0vh)' : 'translateY(-100vh)',
                            opacity: show? '1' : '0'
                        }}>
                        <div className="modal-header">
                        <span className="close-modal-btn" onClick={close}>×</span>
                          
                        </div>
                        <div className="modal-body">
                            
                        <form onSubmit={this.handleOnAddUser}>
                       <div className="input-group ">
                            <input type="text" className="form-control 3l"  placeholder="CURP" name="curp" value={this.state.curp} onChange={this.onChange}/>
                            <input type="text" className="form-control "  placeholder="Nombre" name="nombre" value={this.state.nombre} onChange={this.onChange} />
                           
                        </div>
                       
                        <div className="input-group ">
                            
                            <input type="text" className="form-control"  placeholder="primer apellido" name="apellido_paterno" value={this.state.apellido_paterno} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="Segundo apellido" name="apellido_materno" value={this.state.apellido_materno} onChange={this.onChange}/>
                        </div>
                       
                        <div className="input-group">
                            <input type="text" className="form-control"  placeholder="sexo" name="sexo" value={this.state.sexo} onChange={this.onChange} />
                            <input type="text" className="form-control"  placeholder="calle" name="calle" value={this.state.calle} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="No. exterior" name="numero_ext" value={this.state.numero_ext} onChange={this.onChange}/>
                        </div>
                        <div className="input-group ">
                            <input type="text" className="form-control"  placeholder="No. interior" name="numero_int"  value={this.state.numero_int} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="Codigo postal" name="cp" value={this.state.cp} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="colonia" name="colonia" value={this.state.colonia} onChange={this.onChange}/>
                        </div>
                        <div className="input-group ">
                            <input type="text" className="form-control"  placeholder="municipio" name="municipio" value={this.state.municipio} onChange={this.onChange} />
                            <input type="text" className="form-control"  placeholder="estado" name="estado"  value={this.state.estado} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="telefono" name="telefono" value={this.state.telefono} onChange={this.onChange}/>
                        </div>
                        <div className="input-group ">
                            <input type="text" className="form-control"  placeholder="celular" name="celular"  value={this.state.celular} onChange={this.onChange}/>
                            <input type="text" className="form-control"  placeholder="correo" name="correo"  value={this.state.correo} onChange={this.onChange}/>
                           
                        </div>
                       


                        <input type="submit" class="btn btn-primary"   value="Crear Evento"   /> 

                       </form>
                            
                        </div>
                        <div className="modal-footer">
                            
                          
                        </div>
                    </div>
                </div>
            )
        }

 
}

