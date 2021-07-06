import React, { Component } from 'react';
const AdvertisementStyle = {
    border: '1px solid black',
    height: '70px',
    width: '550px',
    background: 'purple', 
    margin: '10px'
    }

class Advertisement extends Component{
    render(){
        return(
            <div className="AdvertisementStyle"style={AdvertisementStyle}></div>
        )
    }
}

export default Advertisement;