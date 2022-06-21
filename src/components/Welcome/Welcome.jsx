import React from 'react';
import './Welcome.css'
import BtnNext from '../btnNext/btnNext'

import fondoeclip from "../../assets/Ellipse 745.jpg"

import hombre from "../../assets/Search-Client.png"
import taco1 from '../../assets/taco1.png'

import macaroon1 from '../../assets/macaroon1.png'

import planner from '../../assets/Logo-sin-fondo 2021-1.png'


const Welcome = () => {
  return (
    <div className="WelcomeDiv">
      <div className='welcome-h2-h3'>
        <img className='ellipse' src={fondoeclip} alt=''/>
        <h2> ¡Empecemos!</h2>
        <h3>Lee con atención los pasos a seguir.</h3>
      </div>
      <div className='welcome-img-p'>
        <img className='hombre-foto' src={hombre} alt='hombre'/>
        <img className='taco1-foto' src={taco1} alt="cake" />
        <p className='card-p-chica'>Ingresa a la Plataforma y navega entre las más deliciosas opciones para tus recetas diarias.</p>
      </div>
      <div className='welcome-img-p'>
        <img src={macaroon1} alt="Macaroon" />
        <p>Selecciona las que más te gusten, define el número de porciones y en cada receta puedes seleccionar cuantas veces a la semana la quieres comer.</p>
      </div>
      <div className='welcome-img-p'>
        <img className='planner-foto' src={planner} alt="planner" />
        <p>Listo! Te enviaremos tu Planner que incluirá además de la lista de ingredientes y del paso a paso, una lista de compras, tips y sugerencias de acompañamientos.</p>
      </div>
      <div className='box-btn-next'>
        <BtnNext to="/CookingRecipe"/>
      </div>
    </div>
  )
}

export default Welcome