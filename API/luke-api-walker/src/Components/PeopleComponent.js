import React, { useEffect, useState } from 'react';
import axios from 'axios'


const PeopleComponent = (props) =>{
    console.log(props.id, 'proooops')

    const [person, setPerson] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
    console.log('here')
    axios.get(`https://swapi.dev/api/people/${props.id}/`).then(response => setPerson(response.data)).catch(e=> setError('These arent the droids youre looking fow'));
}, []);

const style={
    color: 'red'
}
    return (
        <div>
            {error.length > 0 ? (<h1 style={style}>{error}</h1>) : (
            <div>
                <h1>{person.name}</h1>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Skin Color: {person.skin_color}</p>
            </div>
            )
        }
        </div>
    )
}

export default PeopleComponent;