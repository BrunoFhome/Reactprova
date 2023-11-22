import React from 'react'
import "./styles/styles.css"
import Rio from "./images/fundorio.jpg"
import Gramado from "./images/fundogramado.jpg"
import Aparecida from "./images/fundoaparecida.jpg"
import { useState } from 'react'

function Home ()  {
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [foneInput, setFoneInput] = useState("")

    const handleNameInputChange = (event) => setNameInput(event.target.value)
    const handleEmailInputChange = (event) => setEmailInput(event.target.value)
    const handleFoneInputChange = (event) => setFoneInput(event.target.value)

    function dados(event){
        event.preventDefault()
        console.log(nameInput, emailInput, foneInput)
    }

    return (
        <div className="Container">     
        <main>
            <section className="lugares" id="dest">
            <div className="interface">
                <h1 id="conheca">REALIZAR SONHOS É O NOSSO DESTINO!</h1>
                <h2 id="veja"> VEJA MAIS</h2>
                <div className="flex">
                <div className="img-port" style={{ backgroundImage: `url(${Rio})` }}>
                    <div className="overlay">RIO DE JANEIRO</div>
                </div>
                <div className="img-port" style={{ backgroundImage: `url(${Gramado})` }}>
                    <div className="overlay">GRAMADO</div>
                </div>
                <div className="img-port" style={{ backgroundImage: `url(${Aparecida})` }}>
                    <div className="overlay">APARECIDA</div>
                </div>
                </div>
            </div>
            </section>

            <section className="formulario">
            <div className="interface">
                <h2 id="contato">Fale conosco</h2>
                <form action="">
                <input type="text" name="name" placeholder="Seu nome" onChange={handleNameInputChange} />
                <input type="text" name="email" placeholder="Seu Email" onChange={handleEmailInputChange}/>
                <input type="text" name="fone" placeholder="Seu Celular" onChange={handleFoneInputChange} />
                <div className="btn-enviar">
                    <button onClick={dados}>ENVIAR</button>
                </div>
                </form>
            </div>
            </section>
        </main>
        

        </div>
  )
}

export default Home