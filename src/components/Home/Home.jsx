
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <h1>¡Hola! Bienbenido.</h1>
        <p>El siguiente formulario tiene como objetivo conocerte mejor y brindarte un menu personalizado para que puedas organizar tus comidas de la mejor manera. ¿Comenzamos?</p>
      </div>
      <div>
        <h2>Por favor, completá tus datos.</h2>
        <form>
          <label htmlFor="">Nombre y Apellido*</label>
          <input type="text" />
          <br />
          <label htmlFor="">Mail*</label>
          <input type="email" name="" id="" />
        </form>
      </div>
        <Link to="/Welcome"><button>Continuar</button></Link>
    </>
  )
}

export default Home