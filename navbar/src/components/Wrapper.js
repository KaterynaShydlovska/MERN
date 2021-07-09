import React from 'react';



const Wrapper = (props) =>{
    const style ={
        width: "700px",
        height: "500px",
        backgroundColor: "whitesmoke",
        margin: "auto",
        display: "block"
    }
return (
    <div style={style}>
         <p>{props.children}</p>
    </div>
   

)
}

export default Wrapper;