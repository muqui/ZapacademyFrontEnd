import React, { Component } from 'react';
import DynamicSelect from './DynamicSelect';
import Menu from '../components/menu';
import Events from './listEvents'; 
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Nothing selected',
      selectListEvent: [],
      events:[]
      
    }
  }

  handleSelectChange = async (selectedValue ) =>{
    
 

    
    await this.setState({
      selectedValue: selectedValue,
      
    });
    await this.listaEventos();
    
  }
  listaEventos() {
    let currentComponent = this;
    var url = 'https://zapacademy.herokuapp.com/evento/eventos/'+ this.state.selectedValue;
    console.log("Busqueda " + this.state.selectedValue)
    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        const token  = res.data
        currentComponent.setState({
          selectListEvent : token      
          
      })
     
        console.log(res.data)
        return token
      });
      console.log("GET")
  }
  componentDidMount() {
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
      console.log("GET")
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
        
          <h1 className="App-title">Lista de eventos.</h1>
        </header>
        <p className="App-intro">
          <DynamicSelect arrayOfData={this.state.events} onSelectChange={this.handleSelectChange} /> <br /><br />
          
          <div>
         
           
            
            <Events  events={this.state.selectListEvent}/>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
