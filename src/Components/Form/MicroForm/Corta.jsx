import React, { useState } from "react"
import { nanoid } from 'nanoid'

const Corta = (props) => {

        const [ corta, setCorta ] = useState('')
        const [ cortas, setCortas ] = useState([])

    {/*
        const addCorta = e =>{
            e.preventDefault()

            if( !corta.trim() ){
                console.log('Elemento vacio')
            }
            console.log(corta)
            
            setCortas([
                ...cortas, 
                { id: nanoid(), respuestaCorta: corta }
            ]);

            setCorta('')
        }
    */}

    const addCorta = () =>{
        console.timeLog('Just because...')
    }


        console.log(props)

        return(
            <>
            <form onSubmit={addCorta} className='flexbox margin-bottom'>
                
                <input 
                    type="text" 
                    placeholder='Ingresa respuesta'
                    value={corta}
                    onChange={ e => setCorta(e.target.value) }
                />
                {/*<button type="submit">Agregar respuesta</button>*/}                    
                
            </form>

            <div>
                {
                    cortas.map( item => (
                        <>
                            <div key={item.id} className='flexbox margin-bottom'>
                                <input
                                    type="text" 
                                    placeholder={item.respuestaCorta}
                                    
                                />
                                <button type="submit">Editar</button>
                                <button type="submit">Eliminar</button>
                            </div>
                        </>
                    ))
                }
            </div>
            </>
            
            
        )
    }


export default Corta