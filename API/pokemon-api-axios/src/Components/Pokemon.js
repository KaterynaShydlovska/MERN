import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokemon = (props) =>{
    const [pokemons, setPokemons] = useState([]) 

    const [showPokemons, setShowPokemons] = useState(false);

   const handleShowPokemons = (boolean) =>{
        setShowPokemons(boolean);
        console.log(showPokemons, 'pok')
    }

    useEffect(() => {
        console.log('here')
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => setPokemons(response.data.results));
    }, []);

    const buttonStyle={
        height: "30px",
        margin: "20px"

    }
 
    return (
        <div>
            <button onClick={()=> handleShowPokemons(!showPokemons)} style ={buttonStyle}>Fetch Pokemons</button>
            {pokemons.length > 0 && showPokemons && pokemons.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    );
}

export default Pokemon;