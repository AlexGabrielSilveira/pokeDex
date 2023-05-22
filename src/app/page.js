'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Card from '@/components/card/Card'
import Loading from '@/components/loading/Loading'

export default function Home() {
  const[pokemons, setPokemons] = useState([])
  const[loading, setLoading] = useState(true)

  const maxPokemons = 151

  async function getPokemons() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
    let data = await res.json()

    data.results.forEach((item, index) => {
      item.id = index + 1
    });
    setLoading(false)
    setPokemons(data.results)
  }
  
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      {loading ? <Loading /> : (
        <>
          <h1 className={styles.tittle}><span>Poke</span>Dex</h1>
          <div className={styles.pokemon_container}>
            {pokemons.map((pokemon) => (
              <Card pokemon={pokemon} key={pokemon.id}/>
            ))}
        </div>
        </>
      )}
    </>
  )
}
