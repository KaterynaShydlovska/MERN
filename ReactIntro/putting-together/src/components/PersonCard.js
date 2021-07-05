import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            hairColor: props.haircolor
        }
    }

    addeAge=()=>{
        console.log(this.state)
        this.state.age+=1;
        this.setState(this.state);
    }
    render(){
        return (
        <>
            <div>
                <h2>{this.props.firstName}, {this.props.lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>hair Color: {this.props.hairColor}</p>
                <button onClick={ this.addeAge }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        </>
        );
    }
}

export default PersonCard;