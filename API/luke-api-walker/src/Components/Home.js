import React, {useState, useEffect} from 'react';
import { Link, navigate} from '@reach/router';


const Home = (props) =>{

    const options = [
        'people',
        'planets',
        'starships',
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [chosenId, setChosenId] = useState(0);


    function handleSubmit(event) {
        event.preventDefault();
    }

    function onClickHandler(e){
        e.preventDefault();
        navigate(`/${selectedOption}/${chosenId}/`);
        
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                    {options.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                    ))}
                </select>
                <input onChange={ (e) => setChosenId(e.target.value)}></input>
                <button type="submit" value="Search" onClick={onClickHandler}> Search</button> 
            </form>
            
        </div>

    )
}

export default Home;




