"use client"

import { useEffect, useState } from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ res }) {
    const[data, setData] = useState([])
    const[pokemonType, setPokemonType] = useState([])
    const[load, setLoad] = useState(true)
    let api = res.url


    function getPokemons() {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setData(data)
            let type = data.types.map(item => item.type.name)
            setPokemonType(type)
            setLoad(false)
        })
    }
    useEffect(() => {
        getPokemons()
    }, [])
    return (
        <>
            {load == true ? '' : (
                <Link href={`/pokemon/${data.id}`}>
                    <div className={styles.card}>
                            <Image src={data?.sprites?.other?.dream_world?.front_default} width={120} height={120} alt='pokemon'/>
                            <p>{data.name}</p>
                            <div className={styles.types}>
                                <p className={`${[pokemonType[0]]}`}>{data.types[0].type.name}</p>
                                {pokemonType[1] && <p className={`${[pokemonType[1]]}`}>{data.types[1].type.name}</p>}
                            </div>
                    </div>
                </Link>
            )}
        </>
    )
}