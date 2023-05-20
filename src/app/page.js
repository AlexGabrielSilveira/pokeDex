'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Card from '@/components/card/Card'

export default function Home() {
  const[pokemons, setPokemons] = useState([])

  const maxPokemons = 151

  async function getPokemons() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`)
    let data = await res.json()

    data.results.forEach((item, index) => {
      item.id = index + 1
    });

    setPokemons(data.results)
  }
  
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <h1 className={styles.tittle}><span>Poke</span>Dex</h1>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </>
  )
}
