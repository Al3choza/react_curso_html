import React from 'react'
import '../App.css';
import faker from 'Faker/Faker'
import { date } from 'Faker/Faker'


// Componente de clase  para manipular el Estado
class Comments extends React.Component{


    //Constructor
    constructor(props){
        super()
        this.state = {
            userAvatar: props.userAvatar,
            userName: props.userName,
            date: props.date,
            text: props.comment,
        }
      }

    render(){
        return (
            <div className="ui comments" >
                <div className="comment">
                        <a className="avatar">
                            <img src={this.state.userAvatar} alt="User Avatar"/>
                        </a>
                        <div className="content">
                            <a className="author">{this.state.userName}</a>
                            <div className="metadata">
                                <div className="date">{this.state.date}</div>
                                <div className="rating">
                                    <i className="star icon"></i>
                                        5 Faves
                                </div>
                            </div>
                            <div className="text">
                                {this.state.text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments