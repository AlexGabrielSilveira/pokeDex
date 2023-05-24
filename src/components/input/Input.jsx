"use client"

import { useState } from "react"

export default function Input() {
    const[show, setShow] = useState(false)

    function showDivDisplay() {
        setShow(true)
    }

    return (
        <>
            <input type="text" placeholder="Ex: Pikachu..." onFocus={showDivDisplay}/>

            {show == true &&
                <div>
                    <h1>asldhiquwydauwdaiudhauidh</h1>
                </div>
            }
        </>
    )
}


app = localhost/pokemon/1