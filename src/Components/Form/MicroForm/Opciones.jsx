import React from "react"
import { nanoid } from 'nanoid'


const Opciones = (props) => {

        //setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }]);

        const options = [

            {id: nanoid(), pregunta: 'Lorem ipsum dolor sit amet?', _id: 1},
            {id: nanoid(), pregunta: 'xcepteur sint occaecat cupidatat non proident?', _id: 2},
            {id: nanoid(), pregunta: 'Sunt in culpa qui officia deserunt mollit anim id est laborum?', _id: 3},
            {id: nanoid(), pregunta: 'Sunt in culpa qui officia deserunt?', _id: 4},
        ]

        
        const [ opcion, setOpcion ] = React.useState('')
        const [ opciones, setOpciones ] = React.useState([])
        //const [ contador, setContador ] = React.useState(1)

        //const incrementCounter = () => setContador(contador + 1)

        const incrementCounter = () =>{
            setOpciones([
                ...opciones,
                { id: nanoid(), respuestaOpcion: opcion }
            ])
        }



        const addRadio = e =>{
            e.preventDefault()
            //console.log(object)
            if( !opcion.trim() ){
                console.log('Elemento vacio')
            }
            console.log(opcion)

            setOpciones([
                ...opciones,
                { id: nanoid(), respuestaOpcion: opcion }
            ])

            setOpcion('')
        }
        

        console.log(props)

        return(
            <div>
                <>
                    {/* Varias opciones, ID:  {props.id} */}
                    <form onSubmit={addRadio} className="radioB margin-bottom">
                        
                        {
                            options.map( item =>(
                                <>
                                    <div key={item.id}>
                                    <input
                                        type='text'
                                        name='option'
                                        value={item.pregunta}
                                        placeholder="Escribe la respuesta"
                                        onKeyUp={ e => setOpcion(e.target.value) }
                                    />
                                    <label>Option # {item._id}</label>
                                    </div>
                                </>
                            ))
                        }
                        <button type="submit" onClick={incrementCounter}>Agregar opción</button>
                        
                    </form>

                </>
            </div>
        )


}

export default Opciones