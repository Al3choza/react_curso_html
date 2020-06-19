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
      this.AddComment = this.AddComment.bind(this)
      this.DeleteComment = this.DeleteComment.bind(this) 
    }
    AddComment(){
      // let comment = {
      //   userAvatar: faker.Image.avatar(),
      //   userName: faker.Name.firstName(),
      //   date: Date.now().toLocaleString(),
      //   comment:faker.Lorem.paragraph(),
      // }
      // let copyState = {...this.state, comments: this.state.comments.push(comment)}
      // this.setState([copyState])
      console.log('Add')
      console.log(this.props.InputComment)
    }

      DeleteComment(){
        let copyState = this.state.comments
        copyState.pop() 
        this.setState({comments:copyState})
      }
      // deleteComment(){
      //   let copyState={...this.state, comments: this.state.comments.pop()}
      //   this.setState([copyState])
      // }

  render (){
    return (
      <div className="App">
        <InputComment />
        <Button clickea={this.AddComment} text={'Comentar'}/>
        <Button clickea={this.DeleteComment} text={'Borrar'}/> 
          {
            this.state.comments.map((commit)=>{
              return <Comments 
                key={`${commit.userName}_${Date.now()}`}
                userAvatar={commit.userAvatar}
                userName={commit.userName}
                date={commit.date}
                comment={commit.comment}
              />
            })
          }
      </div>
    );
  }
}

export default App;
