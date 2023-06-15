"use client"

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './pokemon.module.css'
import Image from 'next/image'

export default function PokemonPage() {
    const[data, setData] = useState([])
    let params = useParams()
    let api = `https://pokeapi.co/api/v2/pokemon/${params.id}`

    function getPokemon() {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    }
    let before = parseInt(params.id) - 1
    let after = parseInt(params.id) + 1
    useEffect(() => {
        getPokemon()
    }, [])
    console.log(data)
    return (
        <div className={styles.pokemon_container}>
            <div className={styles.pagination}>
                <Link href={`/pokemon/${before}`}>{before}</Link>
                <Link href={`/pokemon/${after}`}>{after}</Link>
            </div>
            <div className={styles.card}>
                <Image src={data?.sprites?.other?.dream_world?.front_default} width={120} height={120} alt='pokemon'/>
                <h3>{data.name}</h3>
            </div>
        </div>
    )
}