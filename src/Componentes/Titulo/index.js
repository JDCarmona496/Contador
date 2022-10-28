import React from 'react'
import sena from "./img/sena.png"
import "./titulo.css"

export const Titulo = () => {

  return (
    <div>

      <div class='titulos'>
        <h1>Servicio Nacional de Aprendizaje</h1>
      </div>

      <div class='center'>
        <img src={sena} alt='logo sena'></img>
      </div>
      
    </div>
  )
}
