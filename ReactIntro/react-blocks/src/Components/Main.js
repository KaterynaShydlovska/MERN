import React, { Component } from 'react';


const mainStyle = {
    border: '1px solid black',
    height: '300px',
    width: '800px',
    background: 'red', 
    margin: '20px'

    
    }

class Main extends Component{
    render(){
        return(
            <div style={mainStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main;