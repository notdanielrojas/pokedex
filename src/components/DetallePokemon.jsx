import React, { useEffect, useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

export default function DetallePokemon({ namePokemon }) {
  const { pokemon, fetchPokemonDetail } = useContext(PokemonContext);

  useEffect(() => {
    fetchPokemonDetail(namePokemon);
  }, [namePokemon]);

  function capitalizarPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='card'>
      <img src={pokemon.img} alt={pokemon.name} />
      <div className='card-body'>
        <h2>{capitalizarPrimeraLetra(pokemon.name)}</h2>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        {pokemon.type.map((type, index) => (
          <span key={index} className='badge'>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
