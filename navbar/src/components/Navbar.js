import React, { useContext }  from 'react';
import Context from '../context/Context';

const Navbar = (props) =>{
    const context = useContext(Context);
const style ={
    height: "50px",
    backgroundColor: "purple",
    color: "white",
    margin: "20px"
}
const h1Style={
    marginLeft: "300px",
    padding: "12px"
}
    return (
        <div style={style}>
          <h3 style={h1Style}>Welcome {context.name} !</h3>
        </div>
    )
}

export default Navbar;