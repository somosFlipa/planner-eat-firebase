import React from 'react'

import "./Spinner.css"

import cargandologo from "../../assets/Logo-sin-fondo 2021-1.png"

function Spinner() {
  return (
    <div className='conte-spinner'>
        <div className='spinner'> <img src={cargandologo} alt="logocargando" /></div>

        <p> Cargando ...</p>
    </div>
  )
}

export default Spinner