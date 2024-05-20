import React from "react";
import Pikachu from "../assets/img/pikachu.png";

export default function Home() {
  return (
    <main>
      <h1>Bienvenido maestro Pokemón</h1>
      <img className='home' src={Pikachu} alt='Pikachu' />
    </main>
  );
}
