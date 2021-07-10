import React, { useEffect, useState } from 'react';
import axios from 'axios'


const PlanetsComponent = (props) =>{
    console.log(props.id, 'proooops')

    const [planet, setPlanet] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
    console.log('here')
    axios.get(`https://swapi.dev/api/planets/${props.id}/`).then(response => setPlanet(response.data)).catch(e=> setError('These arent the droids youre looking fow'));
}, []);

const style={
    color: 'red'
}

    return (
        <div>
            {error.length > 0 ? (<h1 style={style}>{error}</h1>) : (
            <div>
                <h1>{planet.name}</h1>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
            )
        }
        </div>
    )
}

export default PlanetsComponent;