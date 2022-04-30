import React, {useState} from "react";
import { Link } from "react-router-dom";

import Emptyform from '../../Images/emptyform.svg'

const Main = function() {

    var formulariosSize = 0;

    const [ textmain, settextmain ] = useState(formulariosSize)

    const createForm =()=>{
        settextmain(

            /** TODO ...... */

        )
    }

    return(
        <div className="padding title">
            {
                textmain <= 0 ? 
                (
                    <>
                        <div className="empty-form center-main">
                            <img src={Emptyform}></img>
                            <div><span>No hay formularios creados, </span><Link to='/formulario'>crea el primero aquí.</Link> {/* onClick={()=> createForm()} */}</div>
                        </div>
                    </>
                ) 
                :
                (
                    <>
                        <div className="full-form">
                            <h2>Tus formularios</h2>
                        </div>
                    </>
                ) 
            }
        </div>
    )


}

export default Main