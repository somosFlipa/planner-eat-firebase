import React, { useEffect, useState,useContext } from "react";
import {RepiceContext} from "../../Context/RecipeContext.jsx"

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";

import Modal from "../Modal/Modal";
import "./Card.css";

import clock from "../../assets/ep_alarm-clock.png"

function Card(props) {
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState([]);
  const [estadoModal, setEstadoModal] = useState(false); 

  const {addTo,borrar} = useContext(RepiceContext)

  

  useEffect(() => {
    const listRecipe = [];
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "Ingredients"));
      data.docs.map((i) => {
        listRecipe.push({ datos: i.data(), id: i.id });
      });
      setIngredients(listRecipe);
    };
    obtenerDatos()
    
  }, []);


  function btn() {
    setEstadoModal(true);

    let data = [];
    let items = undefined;
    const e = props.ingredientes.map((i) => {
      items = ingredients.filter((f) => {
        return f.id === i.id;
      });
      data.push(items[0]);
    });
    setDescription(data);
  }

  function guardarReceta(e) {

    if(e.target.checked === true){
      const data = addTo(props.nombre)
      
    }
    if(e.target.checked === false){
        const dataBorrar = borrar(props.nombre)
        
    }
    
  }

  return (
    <>
      <div className="cont-props">
        <label className="option_item">
            <input type="checkbox" id="boton" className="checkbox" onChange={(e)=>{guardarReceta(e)}} />
            <div className="option_inner">
            <div className="tickmark">
              <div className="tickmarktilde" ></div>
            </div>
            <img className="prop-imgen" src={props.url} alt=""/>
          </div>
        </label>

        <div className="grupo-eti1">
          <p className="prop-nombres">{/*Nombre:*/} {props.nombre}</p>
          <p className="prop-tiempos">{/*Tiempo:*/} <img className="img-clock" src={clock} alt="" /> {props.tiempo}</p>
          <p className="prop-dificultades">{/*Dificultad:*/} <p className="punto-dificultad">.</p>   {props.dificultad}</p>
        </div>
        
        <div className="grupo-eti2">
          <button className="btn-vermas-props"
            onClick={() => {
              btn();
            }}
          >
            Ver más
          </button>
        </div>
      </div>

      <Modal
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}
        description={description}
        tiempo={props.tiempo}
        dificultad={props.dificultad}
        nombre={props.nombre}
        url={props.url}
      />
    </>
  );
}

export default Card;
