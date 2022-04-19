import React, { useState } from "react"

const Larga = (props) => {

    const [ larga, setLarga ] = useState('')

    const addLarga = e =>{
        e.preventDefault()
        console.log(larga)
        setLarga()
    }

    console.log(props)

        return(
            <>
                <div>
                {/* Respuesta larga, ID:  {props.id} */}
                <form onSubmit={addLarga}>
                    <textarea id="w3review" name="w3review" rows="4" cols="50"
                        onChange={ e => setLarga(e.target.value) }
                    ></textarea>
                </form>
                </div>

                
            </>
        )
    }


export default Larga