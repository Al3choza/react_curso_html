import React from 'react';
import './App.css';
import faker from 'Faker/Faker'

import Comments from './Componentes/comments'
import Button from './Componentes/button'
import InputComment from './Componentes/inputComment'

  class App extends React.Component{
    constructor(props){
      super()
      this.state = {
        comments:[]
        
      }
    }

  render (){
    return (
      <div className="App">
        <InputComment /> 
      </div>
    );
  }
}

export default App;
