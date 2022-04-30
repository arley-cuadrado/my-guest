import React, {useState, useRef } from "react"
import { nanoid } from 'nanoid'

const Opciones = function() {
 
    //-------------------------------
    const [ respuesta, setPregunta ] = useState('')
    const [ preguntas, setPreguntas ] = useState([])
    const [ id, setId ] = useState('')

    const agregarRespuesta = e =>{
        e.preventDefault()
        
        if( !respuesta.trim() ){
            console.log('Elemento vacio')
            return
        }
        
        console.log(respuesta)

        setPreguntas([
            ...preguntas, 
            { id: nanoid(), nombreRespuesta: respuesta },
        ])
        setPregunta('')
    
    }

    const eliminarPregunta = id =>{
        const arrayFiltrado = preguntas.filter( item => item.id !== id )
        setPreguntas(arrayFiltrado)
        //console.log(id)
    }

    const handlerFormOptions = (e) =>{
        const idSelect = e.target.value;
        //return cardFormulario(idSelect)
    }

        return(
            <>

                <div className="center-main center-main-small left-main">
                    <main className="padding cien" > {/* key={nanoid()} */}
                       
                        {/* ------------------------------------------ */}
                        <section className="flexbox title-form ">
                        <div className="sesenta m-right">
                            <ul>
                                {
                                    preguntas.length === 0 ? (
                                        <li className="empty">No hay opciones</li> 
                                    ) : (
                                        preguntas.map( item => (
                                            <li key={item.id}>
                                                <article className="lista-preguntas">
                                                <input type="radio" id="" name="" value="" className="radio"></input>
                                                <div className="pregunta-input cien"><span>{item.nombreRespuesta}</span></div>
                                                <div className="pregunta-button cuarenta">
                                                    <button
                                                        onClick={() => eliminarPregunta(item.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                                </article>
    
                                            </li>        
                                    ))
                                        
                                    )

                                }
                            </ul>
                        </div>
                        <div className="form-add cuarenta">
                            
                            <form onSubmit={ agregarRespuesta }>
                            <div className="form-input form-input-border">
                                <input 
                                    type="text" 
                                    placeholder="Ingresa respuesta"
                                    onChange={ e => setPregunta(e.target.value) }
                                    value={respuesta}
                                />
                            </div>
                                
                            </form>
                        </div>
                        </section>
                    </main>

                </div>
            </>
        )

}

export default Opciones