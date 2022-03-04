import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Main from '../Main/Main'
import Forms from '../Form/Forms'
import Settings from '../Settings/Settings'

import Navbar from "./Navbar"
import Answers from "../Answers/Answers"

class Menu extends React.Component {

    render(){
        return(

            <>
                <BrowserRouter>
                    <Navbar />
                    <main className="margin">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/formularios" element={<Forms />} />
                        <Route path="/respuestas" element={<Answers />}></Route>
                        <Route path="/configuracion" element={<Settings />} />
                    </Routes>
                    </main>
                </BrowserRouter>
            </>
        )
    }


}

export default Menu


