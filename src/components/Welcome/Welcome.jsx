import React from 'react';
import { Link } from 'react-router-dom';
import BtnNext from '../btnNext/btnNext'

const Welcome = () => {
  return (
    <div>
        <h1>Welcome</h1>
        {/* <Link to="/CookingRecipe">Cooking Recipe</Link> */}
        <BtnNext to="/CookingRecipe"/>
    </div>
  )
}

export default Welcome