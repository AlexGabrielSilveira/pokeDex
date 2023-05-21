"use client"

import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from  "./pokemonPage.module.css"
import Image from "next/image"


export default function Pokemon() {
    const[infos, setInfos] = useState([])
    const params = useParams()

    function getPokemonInfo() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        .then(res => res.json())
        .then(data => {
            setInfos(data)
        })
        
        
    }
    useEffect(() => {
        getPokemonInfo()
    }, [])

    return (
        <>
            <div className={styles.infos_container}>
                <div className={styles.img}>
                    <Image src={infos.sprites?.other?.dream_world?.front_default} alt={infos.name} width="500" height="500" /> 
                    <p><span className={`${styles[infos.types[0].type.name]}`}>{infos.types[0].type.name}</span> 
                    {infos.types[1].type.name && <span className={`${styles[infos.types[1].type.name]}`}> 
                        {infos.types[1].type.name}
                    </span>
                    }
                    </p>
                </div>
                <ul className={styles.list}>
                    <p><strong>Nº </strong> {infos.id}</p>
                    <p><strong>Nome: </strong>{infos.name}</p>
                    <p><strong>Hidden Ability: </strong>{infos?.abilities[1].ability.name}</p>
                    <hr />
                    <div className={styles.space}>
                        <li className={styles.list_items}><strong>{infos.stats[0].stat.name} {infos.stats[0].base_stat}</strong></li> 
                        <li className={styles.list_items}><strong>{infos.stats[1].stat.name} {infos.stats[1].base_stat}</strong></li>
                        <li className={styles.list_items}><strong>{infos.stats[2].stat.name} {infos.stats[2].base_stat}</strong></li>
                        <li className={styles.list_items}><strong>{infos.stats[3].stat.name} {infos.stats[3].base_stat}</strong></li> 
                        <li className={styles.list_items}><strong>{infos.stats[4].stat.name} {infos.stats[4].base_stat}</strong></li>
                        <li className={styles.list_items}><strong>{infos.stats[5].stat.name} {infos.stats[5].base_stat}</strong></li>
                    </div>
                </ul>           

            </div>
        </>
    )
}
// {`${styles[infos.types[0].type.name]}`}