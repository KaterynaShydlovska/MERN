import React, { useContext } from 'react';
import Context from '../context/Context';


const FormWrapper = (props) =>{
    const context = useContext(Context);

    const style={
        backgroundColor: "grey"
    }
    const formstyle={
        marginRight: "170px"
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event, 'event')
        context.setName(context.name);
    }
    return (
        <div style={formstyle}>
           <form onSubmit={handleSubmit}>
               <lable>Your Name: </lable>
            <input style={style} type="text" onChange={ (e) => context.setName(e.target.value) } className="input" />
        </form>
        </div>
    )
}

export default FormWrapper;