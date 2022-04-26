import React from 'react';

import BtnNext from '../btnNext/btnNext'

const Welcome = () => {
  return (
    <div className="WelcomeDiv">
      <div>
        <h2> ¡Empecemos!</h2>
        <h3>Lee con atención los pasos a seguir.</h3>
      </div>
      <div>
        <img src="" alt="" />
        <p>Navega entre las distintas comidas</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Selecciona las que más te gustan y cuánta cantidad quieres.</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Listo! Ya tienes armado tu planner :")"</p>
      </div>
      <BtnNext to="/CookingRecipe"/>
    </div>
  )
}

export default Welcome