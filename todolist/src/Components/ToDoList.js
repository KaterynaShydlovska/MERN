import React, { useState } from 'react';
import '../style.css';
 

export default function ToDoListForm() {
    const [tasks, setTasks] = useState([]);
    const [addedTask, setaddedTask] = useState("");
    // const [done, setDone] = useState(false);
    const [isDone, setIsDone] = useState({});
   
    function handleSubmit(event) {
        event.preventDefault();
        const newTask = addedTask;
        setTasks([...tasks, addedTask]);
    }
    
    function handleDelete(i){
        setTasks([
            ...tasks.slice(0,i),
            ...tasks.slice(i+1)
        ])
    }

    function handleCheck(task){
        setIsDone({
            ...isDone,
            [task]:!isDone[task]
        })
        console.log(isDone, 'doneeeeeee')
    }




return (
    <div className="main">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={ (e) => setaddedTask(e.target.value) } className="input" />
            <br></br>
            <input type="submit" value="Add" className="button" />
        </form>
        {tasks.map((task, i) =>(
            <div>
                <span style={isDone[task] ? { textDecoration: 'line-through'} : {textDecoration: 'none' }} className="text">{task} </span>
                <input type="checkbox" checked={isDone[task]}   onChange={e => handleCheck(task)} /> 
                <button onClick={()=>handleDelete(i)}className="delete">Delete</button>
            </div>
        ))}
    </div>
    );
}