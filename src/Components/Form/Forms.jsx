import React, {useState, useRef } from "react"
import { nanoid } from 'nanoid'
import Opciones  from './MicroForm/Opciones'
import Form from './Form' 

import Close from '../../Images/icon/close.svg'

const Forms = function() {
 
    //-------------------------------
    const [ formulario, setPregunta ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ formularios, setPreguntas ] = useState([])
    const [ idSelect, setIdSelect ] = useState(-1)
    const [ modoEdicion, setModoEdicion ] = useState(false)
    const [ id, setId ] = useState('')
    const [ error, setError ] = useState(null)

    const agregarPregunta = e =>{
        e.preventDefault()
        
        if( !formulario.trim() ){
            console.log('Elemento vacio')
            setError('El campo no puede estar vacío')
            return
        }
        /*
        if( pregunta.length == 5 ){
            document.getElementById('agregar').style.display = 'none'
        }
        */
        console.log(formulario)

        setPreguntas([
            ...formularios, 
            { id: nanoid(), nombrePregunta: formulario },
        ])
        setPregunta('')
        setDescripcion('')
        setError(null)
    
    }

    const eliminarPregunta = id =>{
        const arrayFiltrado = formularios.filter( item => item.id !== id )
        setPreguntas(arrayFiltrado)
        //console.log(id)
    }

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
        if( !formulario.trim() ){
            console.log('Elemento vacio')
            setError('El campo no puede estar vacío')
            return
        }

        const arrayEditado = formularios.map( 
            item => item.id === id ? {id:id, nombrePregunta: formulario } : item 
        )

        setPreguntas(arrayEditado)
        setModoEdicion(false)
        setPregunta('')
        setDescripcion('')
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
                        <section className="flexbox flexbox-column title-form form-style">
                        <div className="cien m-right">
                            <h4>Lista de formularios</h4>
                            <ul>
                                {
                                    formularios.length === 0 ? (
                                        <li className="empty">No hay formularios</li> 
                                    ) : (
                                        formularios.map( item => (
                                            <li key={item.id}>
                                                
                                                <article className="lista-preguntas">
                                                    <div className="pregunta-input-gray cien"><span>{item.nombrePregunta}</span></div>
                                                    {/*<div className="pregunta-input-gray cien"><span>{item.nombrePregunta}</span></div>*/}
                                                    <div className="pregunta-button pregunta-button-gray">
                                                    </div>
                                                    <button onClick={() => eliminarPregunta(item.id)}>
                                                        <img src={Close} alt="" />
                                                    </button>
                                                </article>
                                                <Form />
                                            </li>        
                                    ))
                                        
                                    )

                                }
                            </ul>
                        </div>
                        <div className="form-add cien">
                            <h4>
                                {
                                    modoEdicion ? 'Editar formulario' : 'Agregar formulario'
                                }
                            </h4>
                            
                            <form onSubmit={ modoEdicion ? editarPregunta : agregarPregunta } className="lista-formularios">
                            <div className="form-input">
                                
                                
                                {/*
                                <input 
                                    type="text" 
                                    placeholder="Ingresa pregunta"
                                    onChange={ e => setPregunta(e.target.value) }
                                    value={pregunta}
                                />
                                */}
                                <section className="title-form form-style form-style-title margen-none">
                                    <div className="form-input">
                                        <input id="" 
                                               type="text" 
                                               name="tituloformulario" 
                                               placeholder="Titulo" 
                                               className="input-title" 
                                               value={formulario}
                                               onChange={ e => setPregunta(e.target.value) }
                                        />
                                    </div>
                                    <div className="form-input">
                                        <textarea id="" 
                                            name="descripcion" 
                                            rows="4" cols="50" 
                                            placeholder="Descripción..." 
                                            className="input-info"

                                            type="text" 
                                            value={descripcion}
                                               onChange={ e => setDescripcion(e.target.value) }
                                        >
                                        </textarea>
                                    </div>
                                </section>     



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
                        {/*
                        {
                            modoEdicion ? (
                                <button type="submit" id="agregar">Editar</button>
                            ) : (
                                <button type="submit" >Agregar</button>
                            )
                        }
                        */}
                    </main>

                </div>
            </>
        )

}

export default Forms