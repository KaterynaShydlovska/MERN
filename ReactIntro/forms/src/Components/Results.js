import React from  'react';
import '../result.css';


const Results = props =>{
    console.log(props, 'prooops')

    return(
        <div>  
            <div>
                <h3>Your Form Data:</h3>
            </div>
            <div className="content">
                <p>First Name: {props.username}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Password: {props.password}</p>
                <p>Confirm Password: {props.confirm}</p>
            </div>
        </div>
    )
}

export default Results;
