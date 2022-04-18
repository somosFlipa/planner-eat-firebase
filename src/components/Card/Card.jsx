import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";


function Card(props) {
  
  


  return (
    <>
        <p>Nombre: {props.nombre}</p>
        <p>Tiempo: {props.tiempo}</p>
        <p>Dificultad: {props.dificultad}</p>
        <button>Ver más</button>
    </>
  )
}

export default Card