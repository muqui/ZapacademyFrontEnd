import React, { Component } from 'react'
import Menu from '../components/menu';
import Encabezado from '../components/encabezado';

const axios = require('axios')

 class modal extends Component{
    constructor(props) {
        super(props)
        axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem("token")}`}
        const token = localStorage.getItem("token")
        
        this.state={
             visible :true,
             x: props.close,
           
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
              
               
          alert(response.data)
          
           
          currentComponent.setState({
            
            curp:'',
            id:'',
            nombre:'',
            apellido_paterno:'',
            apellido_materno:'',
            sexo:'',
            calle:'',
            numero_int:'',
            numero_ext:'',
          cp:'',
              colonia:'',
            municipio:'',
            estado:'',
            telefono:'',
            celular:'',
          correo:'',
          });
            
              
            })
            
           
          }
        render(){
            var a = this.props.show;
            
            
            //let close = this.props.close;
            console.log( this.props.show)
            return (
                <div>
                    <Menu />
      
                  
                    
                   
                     
                        <div >
                        <div className="form-group ">
                          <h3>Alta Usuario</h3>
                         </div> 
                        <form onSubmit={this.handleOnAddUser}>

                        <div className="form-group ">
                        <label for="curp">CURP</label>  
                        <label for=""></label>  
                        <input type="text" className="form-control "  name="curp" value={this.state.curp} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="nombre">Nombre</label>  
                        <input type="text" className="form-control "   name="nombre" value={this.state.nombre} onChange={this.onChange} />
                        </div>
                       
                        
                
                       
                        <div className="form-group ">
                        <label for="apellido_paterno">Primer Apellido</label>  
                            <input type="text" className="form-control"  name="apellido_paterno" value={this.state.apellido_paterno} onChange={this.onChange}/>
                       </div>
                       <div className="form-group ">
                       <label for="apellido_materno">Segundo Apellido</label>  
                            <input type="text" className="form-control"   name="apellido_materno" value={this.state.apellido_materno} onChange={this.onChange}/>
                        </div>
                       
                        <div className="form-group">
                        <label for="sexo">Sexo</label>  
                            <select  type="text" className="form-control"  name="sexo" value={this.state.sexo} onChange={this.onChange} >
                            <option value="HOMBRE">Hombre</option> 
                            <option value="MUJER">Mujer</option> 
                             </select> 
                        </div>   
                        <div className="form-group "> 
                        <label for="calle">Calle</label>   
                            <input type="text" className="form-control" name="calle" value={this.state.calle} onChange={this.onChange}/>
                         </div>
                         <div className="form-group ">
                         <label for="numero_ext">Numero exterior</label>  
                            <input type="text" className="form-control"   name="numero_ext" value={this.state.numero_ext} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="numero_int">Numero interior</label>  
                            <input type="text" className="form-control"  name="numero_int"  value={this.state.numero_int} onChange={this.onChange}/>
                        </div>    
                        <div className="form-group ">
                        <label for="cp">Codigo postal</label>  
                            <input type="text" className="form-control"  name="cp" value={this.state.cp} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="coloni">Colonia</label>  
                            <input type="text" className="form-control"  name="colonia" value={this.state.colonia} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="municipio">Municipio</label>  
                            <input type="text" className="form-control"  name="municipio" value={this.state.municipio} onChange={this.onChange} />
                        </div>
                        <div className="form-group ">   
                        <label for="estado">Estado</label>  
                            <input type="text" className="form-control"   name="estado"  value={this.state.estado} onChange={this.onChange}/>
                        </div>  
                        <div className="form-group ">
                        <label for="telefono">Telefono</label>  
                            <input type="text" className="form-control" name="telefono" value={this.state.telefono} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="celukar">Celular</label>  
                            <input type="text" className="form-control"  name="celular"  value={this.state.celular} onChange={this.onChange}/>
                        </div>
                        <div className="form-group ">
                        <label for="correo">Correo</label>  
                            <input type="text" className="form-control"  name="correo"  value={this.state.correo} onChange={this.onChange}/>
                           
                        </div>
                       


                        <input type="submit" class="btn btn-primary"   value="Alta usurio"  /> 

                       </form>
                            
                        </div>
                      
                
                </div>
            )
        }

 
}

export default modal;