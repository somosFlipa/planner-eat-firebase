import React from 'react';
import Form from '../Form/Form'
import BtnNext from '../btnNext/btnNext'

const Welcome = () => {
  return (
    <div className="WelcomeDiv">
        <h1>Welcome</h1>
        <Form/>
        <BtnNext to="/CookingRecipe"/>
    </div>
  )
}

export default Welcome