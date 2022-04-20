import React, {useState, useRef } from "react"
import { nanoid } from 'nanoid'
import Opciones  from './MicroForm/Opciones'

const Form = function() {
 
    //-------------------------------
    const [ pregunta, setPregunta ] = useState('')
    const [ preguntas, setPreguntas ] = useState([])
    const [ idSelect, setIdSelect ] = useState(-1)
    const [ modoEdicion, setModoEdicion ] = useState(false)
    const [ id, setId ] = useState('')
    const [ error, setError ] = useState(null)

    const agregarPregunta = e =>{
        e.preventDefault()
        
        if( !pregunta.trim() ){
            console.log('Elemento vacio')
            setError('El campo no puede estar vacío')
            return
        }
        /*
        if( pregunta.length == 5 ){
            document.getElementById('agregar').style.display = 'none'
        }
        */
        console.log(pregunta)

        setPreguntas([
            ...preguntas, 
            { id: nanoid(), nombrePregunta: pregunta },
        ])
        setPregunta('')
        setError(null)
    
    }

    const eliminarPregunta = id =>{
        const arrayFiltrado = preguntas.filter( item => item.id !== id )
        setPreguntas(arrayFiltrado)
        //console.log(id)
    }

    const selectOptions = [
        {'option': 'Respuesta libre'},
        {'option': 'Respuesta de opciones'}
    ]
    const handlerFormOptions = (e) =>{
        const idSelect = e.target.value;
        setIdSelect(idSelect)
        //return cardFormulario(idSelect)
    }

    const editar = item =>{
        console.log(item)
        setModoEdicion(true)
        setPregunta(item.nombrePregunta)
        setId(item.id)
    }

    const editarPregunta = e =>{
        e.preventDefault()    
        if( !pregunta.trim() ){
            console.log('Elemento vacio')
            setError('El campo no puede estar vacío')
            return
        }

        const arrayEditado = preguntas.map( 
            item => item.id === id ? {id:id, nombrePregunta: pregunta } : item 
        )

        setPreguntas(arrayEditado)
        setModoEdicion(false)
        setPregunta('')
        setId('')
        setError(null)
    }

        return(
            <>

                <div className="center-main left-main">
                    <main className="padding cien" > {/* key={nanoid()} */}
                        {/*
                        <section className="title-form form-style">
                            <div className="form-input">
                                <input id="" type="text" name="tituloformulario" placeholder="Titulo" className="input-title"></input>
                            </div>
                            <div className="form-input">
                                <textarea id="" name="descripcion" rows="4" cols="50" placeholder="Descripción..." className="input-info"></textarea>
                            </div>
                        </section>  
                        */}                      
                       
                        {/* ------------------------------------------ */}
                        <section className="flexbox title-form form-style box-shadow">
                        <div className="sesenta m-right">
                            <h4>Lista de preguntas</h4>
                            <ul>
                                {
                                    preguntas.length === 0 ? (
                                        <li className="empty">No hay preguntas</li> 
                                    ) : (
                                        preguntas.map( item => (
                                            <li key={item.id}>
                                                
                                                <article className="lista-preguntas">
                                                <div className="pregunta-input-gray cien"><span>{item.nombrePregunta}</span></div>
                                                <div className="pregunta-button pregunta-button-gray cuarenta">
                                                    <button
                                                        onClick={() => eliminarPregunta(item.id)}
                                                    >
                                                        Eliminar
                                                    </button>
    
                                                    <button
                                                        onClick={() => editar(item)}
                                                    >
                                                        Editar
                                                    </button>
                                                </div>
                                                </article>
                                            
                                                <div className="form-input">
                                                    {/* <select name="answer" id="answer-select" defaultValue={'DEFAULT'} onChange={handlerFormOptions}>
                                                    <option value="DEFAULT" disabled>Tipo de respuesta</option>
                                                        {
                                                            selectOptions.map(( item, index ) =>(
                                                                <option key={"select"+index} value={index}>{item.option}</option>
                                                            ))
                                                        }
                                                    </select> */}
                                                </div>
    
                                                <div className="form-input">
                                                    <Opciones />
                                                </div>
    
                                            </li>        
                                    ))
                                        
                                    )

                                }
                            </ul>
                        </div>
                        <div className="form-add cuarenta">
                            <h4>
                                {
                                    modoEdicion ? 'Editar pregunta' : 'Agregar pregunta'
                                }
                            </h4>
                            
                            <form onSubmit={ modoEdicion ? editarPregunta : agregarPregunta }>
                            <div className="form-input">
                                <input 
                                    type="text" 
                                    placeholder="Ingresa pregunta"
                                    onChange={ e => setPregunta(e.target.value) }
                                    value={pregunta}
                                />
                            </div>
                            {
                                error ? <span className="error-message">{error}</span> : null
                            }
                            {
                                modoEdicion ? (
                                    <button type="submit" id="agregar">Editar</button>
                                ) : (
                                    <button type="submit" >Agregar</button>
                                )
                            }
                                
                            </form>
                        </div>
                        </section>
                    </main>

                </div>
            </>
        )

}

export default Form