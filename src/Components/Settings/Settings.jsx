import React from "react";

class Settings extends React.Component{

    render(){

        const selectColor = () =>{
            const color = document.querySelector('#color')
            const salida = document.querySelector('#salida')
            const background = document.querySelector('body')

            console.log(color, salida)

            color.addEventListener('input', () =>{
                const value = color.value
                salida.innerHTML = value
                console.log(value)
                background.style.backgroundColor = value
            })
        }

        return(
            <div className="center-main main-content">
                <div className="center-main left-main block">
                    <main className="padding">
                        <section className="title-form form-style">
                            <div className="form-input">
                                <div className="full-form">
                                    <h2>Personaliza tu formulario</h2>
                                </div>
                            </div>
                            {/*
                            <div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
                                <input type="file" id="fichero-tarifas" className="input-file" value="" />
                                <strong className="name-banner">Subir banner...</strong>
                            </div>
                            */}

                            <div class="input-file custom-input-file ">
                                <input type="file" id="file" className="input-file-input"/>
                                <label for="" className="input-file-btn">
                                    <strong className="name-banner">Subir banner...</strong>
                                </label>
                            </div>

                        </section>

                        <div className="form-input">
                                <div className="full-form">
                                    <h2>Personaliza el color de fondo</h2>
                                </div>
                            </div>
                            <div className="">
                                <span id="salida">#000000</span>
                            </div>
                            <div className="color-picker">
                                <input type='color' name='' id='color' onClick={selectColor}/>
                            </div>
                    </main>

                </div>
            </div>


        )
    }

}

export default Settings