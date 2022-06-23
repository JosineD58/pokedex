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
    <div className="Pokemon">
      <h2>{pokemon.name}</h2>
      <NavLink to={`/details/${pokemon.name}`}>see more</NavLink>
    </div>
  );
};
