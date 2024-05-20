import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";

export default function Pokemones() {
  const { namesPokemones } = useContext(PokemonContext);
  const [namePokemon, setNamePokemon] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verDetallePokemon = () => {
    if (!namePokemon) {
      setError("¡Tienes que seleccionar un pokemón!");
    } else {
      setError("");
      navigate(`/pokemones/${namePokemon}`);
    }
  };

  return (
    <main>
      <h1>Selecciona un Pokemón</h1>
      <select onChange={({ target }) => setNamePokemon(target.value)}>
        <option value=''>Selecciona un pokemón</option>
        {namesPokemones.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={verDetallePokemon}>Ver Detalles</button>
      <p className='error'>{error}</p>
    </main>
  );
}
