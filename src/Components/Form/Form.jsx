import React, {useState} from "react"

import Corta from './MicroForm/Corta'
import Larga from './MicroForm/Larga'
import Opciones from './MicroForm/Opciones'

const Form = function() {

    const selectOptions = [
        {'option': 'Varias opciones'},
        {'option': 'Respuesta corta'},
        {'option': 'Respuesta larga'}
    ]
    
    console.log(selectOptions)

    const [ idSelect, setIdSelect ] = useState(-1);

    const handlerFormOptions = (e) =>{
        const idSelect = e.target.value;
        setIdSelect(idSelect)
        //return cardFormulario(idSelect)
    }


        return(
            <>
                <div className="center-main left-main">
                    <form className="padding">
                        <section className="title-form form-style">
                            <div className="form-input">
                                <input id="" type="text" name="tituloformulario" placeholder="Titulo" className="input-title"></input>
                            </div>
                            <div className="form-input">
                                <textarea id="" name="descripcion" rows="4" cols="50" placeholder="Descripción..." className="input-info"></textarea>
                            </div>
                        </section>

                        <section className="title-form form-style">
                        <div className="next-to">
                            <div className="form-input setenta">
                                <input id="" type="text" name="pregunta" placeholder="Escribe la pregunta" className=""></input>
                            </div>
                            <div className="form-input">
                                <select name="answer" id="answer-select" defaultValue={'DEFAULT'} onChange={handlerFormOptions}>
                                <option value="DEFAULT" disabled>Selecciona el tipo de respuesta</option>
                                    {
                                        selectOptions.map(( item, index ) =>(
                                            <option key={"select"+index} value={index}>{item.option}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-input">
                            <span>
                            <div>
                            {
                                (() => {
                                        if( idSelect == 0 ) {
                                            return (
                                                <>
                                                    Formulario # {idSelect}
                                                    <Opciones id={idSelect} />
                                                </>
                                            )
                                        } else if ( idSelect == 1 ) {
                                            return (
                                                <>
                                                    Formulario # {idSelect}
                                                    <Corta id={idSelect} />
                                                </>
                                            )
                                        } else if ( idSelect == 2 ){
                                            return (
                                                <>
                                                    Formulario # {idSelect}
                                                    <Larga id={idSelect} />
                                                </>
                                            )
                                        } 
                                })()  
                            }  
                            </div>
                            </span>
                        </div>
                        </section>
                    </form>
                </div>
            </>
        )

}

export default Form