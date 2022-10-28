import React from 'react'
import {UseContador} from '../Hooks/useContador'
import {Contador} from "../Contador/index"
import "./logica.css"

export const Logica = () =>{

    const {aumetar, reset, disminuir, data} = UseContador();


  return (
    <div>
        <Contador Contador = {data}/>
        <button onClick={()=>disminuir()}>-</button>
        <button onClick={()=>reset()}>reset</button>
        <button onClick={()=>aumetar()}>+</button>
    </div>
  )
}
