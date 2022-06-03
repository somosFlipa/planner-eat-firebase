import React, { useEffect, useState,useContext } from "react";
// import {RepiceContextProvider} from "../../Context/RecipeContext.jsx"

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";

import Modal from "../Modal/Modal";
import ItemCouts from '../ItemCouts/ItemCouts';
import "./Card.css";


import clock from "../../assets/ep_alarm-clock.png"

function Card(props) {
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState([]);
  const [estadoModal, setEstadoModal] = useState(false); 

  const listRecipe = [];

  useEffect(() => {
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
      const data = props.addTo(props.nombre)
    }else{
        const dataBorrar = props.borrar(props.nombre)
    }
    
  }

  return (
    <>
      <div className="cont-props">
        
        <label class="option_item">
            <input type="checkbox" class="checkbox" onChange={(e)=> guardarReceta(e)} />
            <div class="option_inner">
            <div class="tickmark">
              <div className="tickmarktilde" ></div>
            </div>
            <img className="prop-imgen" src={props.url} alt=""/>
            {/*<button className="boton-guardar-menu" ></button>*/}
          </div>
        </label>

        <div className="grupo-eti1">
          <p className="prop-nombres">{/*Nombre:*/} {props.nombre}</p>
          <p className="prop-tiempos">{/*Tiempo:*/} <img className="img-clock" src={clock} alt="" /> {props.tiempo}</p>
          <p className="prop-dificultades">{/*Dificultad:*/} <p className="punto-dificultad">.</p>   {props.dificultad}</p>
        </div>
        
        <div className="grupo-eti2">
          <div className="itemcount-cards">
            <ItemCouts stock={7} initial={1} />
          </div>
          
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
