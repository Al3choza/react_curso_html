import React from 'react';

class Regards extends React.Component{
    constructor(props){
      super()
    }

    render(){
        return (
            <div>
                <h1>
                    {/*  Ocupar props */}
                    Hola : {this.props.objectName.name + ' ' + this.props.objectName.lastName}
                </h1>
            </div>
        )
    }
}
export default Regards