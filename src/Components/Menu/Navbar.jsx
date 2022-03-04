import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Plus from '../../Images/icon/plus.svg'
import PlusBlack from '../../Images/icon/plus-black.svg'

function Navbar() {
    
    const [ active, setActive ] = useState(false)

    const activarBoton = () => {
        setActive(true)
    } 

    const desactivarBoton = () =>{
        setActive(false)
    }


        return(
            <nav>
                <div className="flexbox padding start">
                    <Link to='/'
                        onClick={ activarBoton }
                    >
                        { 
                            active ? (
                                <div className="option option-1 center"><img src={Plus}></img></div>
                            ) : (
                                <div className="option option-1 center"><img src={PlusBlack}></img></div>
                            )
                        }
                    </Link>
                    <NavLink 
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                color: isActive ? "red" : "gray",
                            };
                        }}
                        onClick={ desactivarBoton }
                        to="/respuestas">
                        <div className="option center">Respuestas</div>
                    </NavLink>
                    <NavLink 
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                color: isActive ? "red" : "gray",
                            };
                        }}
                        onClick={ desactivarBoton }
                        to="/configuracion">
                        <div className="option center">Configuración</div>
                    </NavLink>
                </div>
            </nav>
        )

}

export default Navbar