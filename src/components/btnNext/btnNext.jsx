import React from "react";
import { Link } from 'react-router-dom';

const BtnNext = (prop) =>{

  return (
    <>
      <Link to={prop.to}>Siguiente</Link>
    </>
  )
}

export default BtnNext