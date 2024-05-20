import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    stats: [],
    type: [],
  });

  const [namesPokemones, setNamesPokemones] = useState([]);

  const fetchPokemonDetail = async (namePokemon) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
      );
      const data = await response.json();
      setPokemon({
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
        stats: data.stats,
        type: data.types,
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=150`
      );
      const data = await response.json();
      const namesPoke = data.results.map((poke) => poke.name);
      setNamesPokemones(namesPoke);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemon, namesPokemones, fetchPokemonDetail }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
