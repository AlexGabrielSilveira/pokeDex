"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from  "./pokemonPage.module.css"
import Image from "next/image"
import Loading from "@/components/loading/Loading"


export default function Pokemon() {
    const[infos, setInfos] = useState([])
    const[loading, setLoading ] = useState(true)
    const params = useParams()

    function getPokemonInfo() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        .then(res => res.json())
        .then(data => {
            setInfos(data)
            setLoading(false)
        })
        
        
    }
    useEffect(() => {
        getPokemonInfo()
    }, [])

    return (
        <>
            { loading ? <Loading /> : (
            <div className={styles.infos_container}>
                <div className={styles.img}>
                    <Image src={infos.sprites?.other?.dream_world?.front_default} alt={infos.name} width="0" height="0" /> 
                    <p>Tipo: <span className={`${infos.types[0].type.name}`}>{infos.types[0].type.name}</span> 
                    {infos.types[1]?.type?.name && 
                    <span className={`${infos.types[1].type.name}`}> 
                        {infos.types[1].type.name}
                    </span>
                    }
                    </p>
                </div>
                <div className={styles.pokemon_container}>
                    <div className={styles.list}>
                        <p><strong>Nº </strong> {infos.id}</p>
                        <p><strong>Nome: </strong>{infos.name}</p>
                        <p><strong>Hidden Ability: </strong>{infos?.abilities[1].ability.name}</p>
                        <hr />
                        <ul>
                            {infos.stats.map((item) => (
                                <li className={styles.list_items}><strong>{item.stat.name}: </strong>{item.base_stat} </li>
                            ))}
                        </ul>
                    </div>           
                    <h2>Lista de Movimentos de {infos.name}</h2>
                    <div className={styles.move_list}>
                       {infos.moves.map(i => (
                        <p>{i.move.name}</p>
                       ))}
                    </div>
                </div>
            </div>
            )}
                
        </>
    )
}