import React from 'react';
import './Welcome.css'
import BtnNext from '../btnNext/btnNext'
import cake1 from '../../assets/cake1.png'
import macaroon1 from '../../assets/macaroon1.png'
import taco1 from '../../assets/taco1.png'


const Welcome = () => {
  return (
    <div className="WelcomeDiv">
      <div className='welcome-h2-h3'>
        <h2> ¡Empecemos!</h2>
        <h3>Lee con atención los pasos a seguir.</h3>
      </div>
      <div className='welcome-img-p'>
        <img src={cake1} alt="cake" />
        <p>Navega entre las distintas comidas</p>
      </div>
      <div className='welcome-img-p'>
        <img src={macaroon1} alt="Macaroon" />
        <p>Selecciona las que más te gustan y cuánta cantidad quieres.</p>
      </div>
      <div className='welcome-img-p'>
        <img src={taco1} alt="Taco" />
        <p>Listo! Ya tienes armado tu planner {":)"}</p>
      </div>
      <div className='box-btn-next'>
        <BtnNext to="/CookingRecipe"/>
      </div>
    </div>
  )
}

export default Welcome