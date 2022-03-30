import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
        <h1>Welcome</h1>
        <Link to="/CookingRecipe">Cooking Recipe</Link>
    </div>
  )
}

export default Welcome