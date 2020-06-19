import React from 'react'
import { Form, TextArea,Button } from 'semantic-ui-react'

// Componente de clase para manipular el Estado
class InputComment extends React.Component{
    constructor(){
        super()
        this.state={
            text:''

        }
        this.handlerTextArea = this.handlerTextArea.bind(this)
    }
    handlerTextArea(event){
        console.log(event.target.value)
        this.setState({text:event.target.value})
        console.log(this.state.text)
    }
    handleSubmit(){
        console.log(this.state)
    }

    render(){
        return(
            <Form onSubmit={()=>this.handleSubmit()}>
                <Form.Field
                    control={TextArea}
                    label='Comentario'
                    placeholder='Danos un comentario...'
                    onChange={this.handlerTextArea}
                    value={this.state.text}
                />
            <Form.Field 
                control={Button}>
                    Submit
            </Form.Field>
            </Form>
        )
    }
}
export default InputComment