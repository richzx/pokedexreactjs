import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GoSearch } from 'react-icons/go';
import PokemonList from './PokemonList.jsx';

function Pokemons() {
  // hook all pokemons
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err))
  }, []);
  
  return (
    <section className='p-4 py-5'>
      <form action="">
        <div className='w-fit bg-white shadow shadow-slate-300/50 p-3 flex rounded-2xl text-lg'>
          <input className='outline-none flex-1' type="text" placeholder='Search your Pokemon' />
          <button className='bg-red-500 text-white p-2 rounded-xl hover:bg-red-400 transition-colors'>
            <GoSearch />
          </button>
        </div>
      </form>
      <PokemonList pokemons={allPokemons}/>
    </section>
  )
}

export default Pokemons