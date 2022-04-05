import React from "react";
import { Link } from 'react-router-dom';

const BtnNext = (prop) =>{

  console.log(prop)
  return (
    <>
      <Link to={prop.to}>Siguiente</Link>
      {/* <Link to="/CookingRecipe"><button>Siguiente</button></Link> */}
    </>
  )
}

export default BtnNext