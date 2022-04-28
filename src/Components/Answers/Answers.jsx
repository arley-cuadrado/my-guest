import React from "react";
import { DoughnutChart } from './Chart'
import Statistics from '../../Images/icon/statistics-icon.svg'

class Answers extends React.Component {

    render(){
        return(

            <>
                <div className="center-main main-content">
                <div className="center-main left-main block">
                    <main className="padding flexbox-next">
                        <div className="center-main main-conten left-main block">

                            <div className="full-form">
                                <div className="title-answers"><h2>Resultados</h2> <div className="icons"> <img src={Statistics} alt="" /> </div></div>
                                <div>
                                    <table>
                                        <tr>
                                            <th>Formularios</th>
                                            <th>Respuestas</th>
                                            <th className="active">Activos</th>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>1.254</td>
                                            <td className="active-bg">3</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            {/*
                            <div className="form-input box-shadow veinte form-style padding-b0">
                                <article className="width-picker">
                                    
                                    <div className="color-picker">
                                     
                                    </div>
                                    
                                    <div className="color-picker">
                                        <input type='color' name='' id='color' /> 
                                        <div className="flexbox space-between">Background: <span id="salida">#000000</span></div>
                                    </div>
                                    
                                </article>
                            </div>
                            */}
                        </div>
                    </main>
                </div>
            </div>
            {/* < DoughnutChart /> */}
        </>
            
            
        )
    }

}

export default Answers
