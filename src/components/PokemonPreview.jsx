import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { colorByType } from '../constans/pokemon.js';

function PokemonPreview({ pokemonURL }) {
  // hook pokemon data
  const [pokemon, setPokemon] = useState(null);

  // use effect get data pokemon api
  useEffect(() => {
    axios.get(pokemonURL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <article className='text-center bg-white rounded-2xl relative capitalize pb-4 shadow shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group'>
      <header className='h-9'>
        <img className='pixelated absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform' src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
      </header>
      <span className='text-base text-slate-400'>N° {pokemon?.id}</span>
      <h4 className='text-lg font-semibold'>{pokemon?.name}</h4>
      <ul className='flex gap-2 justify-center'>
        {pokemon?.types.map((type) => (
          <li className={`bg-red-500 py-1 px-2 text-sm rounded-md text-white ${colorByType[type.type.name]}`} key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  )
}

export default PokemonPreview