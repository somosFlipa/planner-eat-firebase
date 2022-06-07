import React from "react";
import { Link } from 'react-router-dom';
import './btnNext.css'

const BtnNext = (prop) =>{

  return (
    <>
      <Link className="btn-next" to={prop.to}>Siguiente</Link>
    </>
  )
}

export default BtnNext