import React from 'react'
import Comments from './comments'

import Button from './button'
import { Form, TextArea } from 'semantic-ui-react'
import faker from 'Faker/Faker'


// Componente de clase para manipular el Estado
class InputComment extends React.Component{
    constructor(){
        super()
        this.state={
            userAvatar: '',
            userName: '',
            date: '',
            comment: '',
            comments:[]

        }
        this.AddComment = this.AddComment.bind(this)
    }
    handleChange = (event, { name, value }) =>{
        this.setState({ [name]: value })
        console.log(this.state)
    }
    AddComment(){
        let comment = {
          userAvatar: faker.Image.avatar(),
          userName: this.state.userName,
          date: Date.now().toLocaleString(),
          comment:this.state.comment,
        }
        let copyState = {...this.state, comments: this.state.comments.push(comment)}
        this.setState([copyState])
        console.log('Add')
        this.state.userName=''
        this.state.comment=''
        
    }
    DeleteComment= ()=> {
        let copyState = this.state.comments
        copyState.pop() 
        this.setState({comments:copyState})
      }
      // deleteComment(){
      //   let copyState={...this.state, comments: this.state.comments.pop()}
      //   this.setState([copyState])
      // }

    render(){
        const { userName, comment } = this.state
        return(
            <div>
            <Form>
                <Form.Input
                    placeholder='Nombre'
                    label='Nombre'
                    name='userName'
                    onChange={this.handleChange}
                    value={this.state.userName}
                />
                <Form.Field
                    control={TextArea}
                    label='Comentario'
                    name='comment'
                    placeholder='Danos un comentario...'
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <Button clickea={this.AddComment} text={'Comentar'}/>
                <Button clickea={this.DeleteComment} text={'Borrar'}/>
            </Form>
            {
                this.state.comments.map((commit)=>{
                return <Comments 
                    key={`${commit.userName}_${Date.now()}_${Math.random()*100}`}
                    userAvatar={commit.userAvatar}
                    userName={commit.userName}
                    date={commit.date}
                    comment={commit.comment}
                />
                })
            }
            </div>
        )
    }
}
export default InputComment