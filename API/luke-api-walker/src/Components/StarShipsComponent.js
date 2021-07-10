import React, { useEffect, useState } from 'react';
import axios from 'axios'


const StarShipsComponent = (props) =>{
    console.log(props.id, 'proooops')

    const [starship, setStarship] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
    console.log('here')
    axios.get(`https://swapi.dev/api/starships/${props.id}/`).then(response => setStarship(response.data)).catch(e=> setError('These arent the droids youre looking fow'));
}, []);

const style={
    color: 'red'
}
    return (
        <div>
            {error.length > 0 ? (<h1 style={style}>{error}</h1>) : (
            <div>
                <h1>{starship.name}</h1>
                <p>Model: {starship.model}</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Starship Class: {starship.starship_class}</p>
                <p>Length: {starship.length}</p>
            </div>
            )
            }
        </div>
    )
}

export default StarShipsComponent;