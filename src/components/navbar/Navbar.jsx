"use client"

import Link from "next/link";
import styles from "./navbar.module.css"
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const[data, setData] = useState([])
    const[pokemonType, setPokemonType] = useState([])

    function searchPokemon(e) {
        let v = e?.target?.value
        let value = v?.toLowerCase()

        fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(res => res.json())
        .then(data => {
            let type = data?.types?.map(item => item?.type?.name)
            setPokemonType(type)
            setData(data)
        })

    }
    function showDisplay() {
        let div = document.getElementsByClassName('.div_search')
        if(div.style.display == "block") {
            div.style.display = "none"
        }else {
            div.style.display = "block"
        }
    }
    return (
        <nav>
            <div className={styles.navbar}>
                <div>
                    <Link href="/"><Image src="/pokeball.png" width="40" height="40" alt="logo"/></Link>
                    <h1>PokeDex</h1>
                </div>
                <input  placeholder="Pesquise algo ..." onChange={searchPokemon}/>
            </div>
                {data.length == 0 ? '' : (
                    <div className={styles.div_search}>
                        <Link href={`/pokemon/${data.id}`} onClick={showDisplay}> 
                            <Image src={data?.sprites?.other?.dream_world?.front_default} width={50} height={50} alt="pokemon image"/>
                            <div>
                                <p>{data.name}</p>  
                                <>
                                    {pokemonType[0] && <p className={`${[pokemonType[0]]}`}>{data.types[0].type.name}</p>}
                                    {pokemonType[1] && <p className={`${[pokemonType[1]]}`}>{data.types[1].type.name}</p>}
                                </>
                            </div>
                        </Link>
                    </div>
                )}
        </nav>
    )
}