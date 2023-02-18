// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import { PokemonProvider, usePokemon } from './store'
// const ThemeContext = createContext('light')

function SearchBox() {
  const { search, setSearch } = usePokemon()
  return (
    <input 
    className='mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
    placeholder='Search'
    value={search}
    onChange={(e) => {  
      setSearch(e.target.value)
    }}
    />
  )
}


const PokemonList = () => {
  const { pokemon } = usePokemon()
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3'>
      {pokemon.map((p) => (
        <li key={p.id} className='col-span-1 flex flex-col text-center bg-white rounded-lg'>
          <div className='flex-1 flex flex-col p-8'>
            <img
              className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=''
            />
            <h3 className='mt-6 text-gray-900 text-sm font-medium'>
              {p.name}
            </h3>
            <dl className='mt-1 flex-grow flex flex-col justify-between'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-gray-500 text-sm'>{p.type}</dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Home() {
  return (
    <PokemonProvider>
      <div className='mx-auto max-w-3xl'>
        <SearchBox />
        <PokemonList />
      </div>

    </PokemonProvider>
  )
}

export default Home;
