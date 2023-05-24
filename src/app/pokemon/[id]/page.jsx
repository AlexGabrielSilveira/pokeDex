"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from  "./pokemonPage.module.css"
import Image from "next/image"
import Loading from "@/components/loading/Loading"
import Link from "next/link"


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
    let before = parseInt(params.id) - 1
    let after = parseInt(params.id) + 1
    return (
        <>
            { loading ? <Loading /> : (
            <div className={styles.infos_container}>
                <div className={styles.pagination}>
                {params.id == 1 ? '' : (<Link href={`/pokemon/${before}`}>&#9665; Nº {before}</Link>)}
                <Link href={`/pokemon/${after}`}>Nº {after} &#9655;</Link>
                </div>
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
                        {infos?.abilities[1]?.ability?.name ? (<p><strong>Hidden Ability: </strong>{infos?.abilities[1].ability.name}</p>) : 'o pokemon não possui H/A ( Hidden  Ability)'}   
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