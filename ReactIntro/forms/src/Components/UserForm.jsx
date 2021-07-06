import React, { useState } from  'react';
import Results from './Results';
import '../style.css';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState("");   
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

const formMessage = () => {
    if( hasBeenSubmitted ) {
    return "Thank you for submitting the form!";
} else {
    return "Welcome, please submit the form";
    }
};

const handleUserNameError = (e) =>{
    console.log(e.target.value, 'nameee')
    setUsername(e.target.value);
    if(e.target.value.length < 2) {
        setNameError("User Name must be 2 characters or longer!");
    } else{
        setNameError("");
    }
}

const handleLastNameError = (e) =>{
    console.log(e.target.value, 'nameee')
    setLastName(e.target.value);
    if(e.target.value.length < 2) {
        setLastNameError("User Name must be 2 characters or longer!");
    } else{
        setLastNameError("");
    }
}

const handleEmailError = (e) =>{
    setEmail(e.target.value);
    if(e.target.value.length < 5) {
        setEmailError("Email must be 5 characters or longer!");
    } else{
        setEmailError("");
    }
}

const handlePasswordError = (e) =>{
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPasswordError("Password must be 5 characters or longer!");
    }else{
        setPasswordError("");
    }
}

const handleConfirm = (e) => {
    setPasswordConfirm(e.target.value);
if(!e.target.value.localeCompare(passwordConfirm)){
    setPasswordError("Password doesn't match, try again!")
}else{
    setPasswordError("");
    }
}
    return(
    <div className="main">
        <form onSubmit={ createUser } className="form">
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleUserNameError} />
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastNameError} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div className="email">
                <label className="labE">Email Address: </label> 
                <input type="text" onChange={ handleEmailError } />
                {
                    emailError?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className="password">
                <label className="labP">Password: </label>
                <input type="text" onChange={ handlePasswordError} />
                {
                    passwordError?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
             <div className="confirm">
                <label className="labC">Confirm Password: </label>
                <input type="text" onChange={ handleConfirm } />
                {
                    passwordError?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User"  className="button"/>
        </form>
        <Results username = {username} lastName = {lastName} email={email} password={password} confirm = {passwordConfirm}/>
        </div>
    );
};
    
export default UserForm;
