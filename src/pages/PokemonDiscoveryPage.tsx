import React from "react";
import { NavLink } from "react-router-dom";
import PokemonList from "./PokemonList";

export type Pokemon = {
  name: string;
};

type Props = {
  pokemon: Pokemon;
};

const PokemonDiscoveryPage = ({ pokemon }: Props) => {
  return (
    <div className="pokemonDiscoverCard">
      <div className="pokemonDiscovery">
        <h2 className="pokemonListName">{pokemon.name}</h2>
        <NavLink className="pokemonSeeMore" to={`/details/${pokemon.name}`}>
          see more
        </NavLink>
      </div>
    </div>
  );
};

export default PokemonDiscoveryPage;
