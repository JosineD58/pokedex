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
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png"
          />
          <Card.Body>
            <h2 className="pokemonListName">{pokemon.name}</h2>
            <NavLink className="pokemonSeeMore" to={`/details/${pokemon.name}`}>
              see more
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PokemonDiscoveryPage;
