import React, { Component } from 'react';


const subCompStyle = {
    border: '1px solid black',
    height: '170px',
    width: '130px',
    background: 'yellow', 
    margin: '10px'
    }

class SubContents extends Component{
    render(){
        return(
            <div style={subCompStyle}></div>
        )
    }
}

export default SubContents;