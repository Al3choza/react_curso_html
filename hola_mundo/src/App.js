import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'Faker/Faker'

import Regards from './Componentes/regards'

  class App extends React.Component{
    constructor(){
      super()
      this.state = {
        name: 'Nombre',
        lastName: 'Apellido',

      }
      this.ChangeJoaquin = this.ChangeJoaquin.bind(this)
      this.ChangeAlexis = this.ChangeAlexis.bind(this) 
    }
    ChangeJoaquin(){
      // this.state.name='Joaquin'
      this.setState({name:'Joaquin',lastName:'Ramirez'})
    }
    ChangeAlexis(){
      this.setState({name:'Alexis',lastName:'Choza'})
    }
    ChangeState(objName){
      // Al ocupar arrowFunction no se necesita el bind
      this.setState(objName)
    }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Regards objectName={this.state}/>
          <button onClick={this.ChangeJoaquin}>
            Joaquin
          </button>
          <button onClick={this.ChangeAlexis}>
            Alexis
          </button>
          <button onClick={()=> this.ChangeState({name:'Manuel',lastName:'Trujillo'})}>
            Manuel
          </button>       
          
        </header>
      </div>
    );
  }
}

export default App;
