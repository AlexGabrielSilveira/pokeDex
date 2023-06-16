"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './pokemon.module.css'
import Image from 'next/image'

export default function PokemonPage() {
    const[data, setData] = useState([])
    const[pokemonType, setPokemonType] = useState([])
    const[load, setLoad] = useState(true)

    let params = useParams()
    let api = `https://pokeapi.co/api/v2/pokemon/${params.id}`

    function getPokemon() {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            let type = data.types.map(item => item.type.name)
            setPokemonType(type)
            setData(data)
            setLoad(false)
        })
    }
    useEffect(() => {
        getPokemon()
    }, [])
    let before = parseInt(params.id) - 1
    let after = parseInt(params.id) + 1

    // weaks
    return (
        <>
            {load == true ? <h1>carregando</h1> : (
            <div className={styles.pokemon_container}>
                <div className={styles.pagination}>
                    <h2>{data.name} <span>Nº {params.id}</span></h2>
                    <div>
                        {before == 0 ? '' : <Link href={`/pokemon/${before}`}>Nº{before}</Link>}
                        <Link href={`/pokemon/${after}`}>Nº{after}</Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={data?.sprites?.other?.dream_world?.front_default} width="350" height="350" alt='pokemon'/>
                    <div className={styles.types_weaks}>
                        <div className={styles.types}>
                            <h3>Tipo</h3>
                            <p className={`${[pokemonType[0]]}`}>{data.types[0].type.name}</p>
                            {pokemonType[1] && <p className={`${[pokemonType[1]]}`}>{data.types[1].type.name}</p>} 
                        </div>
                        <div className={styles.weaks}>
                            <h3>Fraquezas</h3>
                            <p>essa api é uma bosta !</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}