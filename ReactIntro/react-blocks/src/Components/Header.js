import React, { Component } from 'react';

const headerStyle = {
    border: '1px solid black',
    height: '80px',
    background: 'green', 
    margin: '20px'
    }
class Header extends Component{
    render(){
        return(
            <div style ={headerStyle}></div>
        )
    }
}

export default Header;