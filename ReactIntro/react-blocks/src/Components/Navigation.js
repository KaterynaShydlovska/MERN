import React, { Component } from 'react';
// import './styles.css';

const navigationStyle = {
    border: '1px solid black',
    height: '220px',
    width: '170px',
    background: 'blue', 
    marginTop: '20px'

    
    }


class Navigation extends Component{
    render(){
        return(
            <div style={navigationStyle}></div>
        )
    }
}

export default Navigation;