
import { useEffect, useState } from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ pokemon }) {
    const[pokemonImage, setPokemonImage] = useState([])
    const[pokemonType, setPokemonType] = useState([])

    function getImagePokemon() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
        .then(res => res.json())
        .then(data => {
            let image = data.sprites.other.dream_world.front_default
            let type = data.types.map(item => item.type.name)
            setPokemonType(type)
            setPokemonImage(image)
        })

    }
    
    useEffect(() => {
    getImagePokemon()
   }, [])

    return (
        <div className={styles.card_container}>
            <div className={styles.card}>       
                <Link href={`/pokemon/${pokemon.id}`}><Image src={pokemonImage} width="120" height="120" alt={pokemon.name}/></Link>
                    <ul>
                        <li className={styles.strong}>Nº{pokemon.id}</li>
                        <li className={styles.pokemon_name}>{pokemon.name}</li>
                        <div className={styles.type}>
                            <span className={`${styles[pokemonType[0]]}`}>{pokemonType[0]}</span> 
                            {pokemonType[1] && <span className={`${styles[pokemonType[1]]}`}> 
                                {pokemonType[1]}
                            </span>}
                           
                        </div>
                    </ul>
            </div>
        </div>
    )
}