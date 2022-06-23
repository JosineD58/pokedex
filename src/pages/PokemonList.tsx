import React, { useState, useEffect } from "react";
import axios from "axios"; 

type pokemonProps = {
    id: number; 
    name: string; 
    url: string; 
}

const PokemonList = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>();

   useEffect (() => {
       const doSomeDataFetching = async() => {
        const res = axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");

        setPokemon(
            res.data.map((pokemonProps: pokemonProps)=> {
                return {
                    id: pokemonProps.id, 
                    name: pokemonProps.name,
                    url: pokemonProps.url,
                };
            })
        );

       }
       doSomeDataFetching();
   }, [setPokemon])


    return (
        <div>
            <p>A list of Pokemon:</p>
            {pokemon ? : }
        </div>

    );
}

export default PokemonList; 