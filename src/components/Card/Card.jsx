import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";

import Modal from "../Modal/Modal";

import "./Card.css"

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
  
  return (
    <>
      <div className="cont-props">
        <p className="prop-nombres">{/*Nombre:*/} {props.nombre}</p>
        <p className="prop-tiempos">{/*Tiempo:*/} {props.tiempo}</p>
        <p className="prop-dificultades">{/*Dificultad:*/} {props.dificultad}</p>
        <button className="btn-vermas-props"
          onClick={() => {
            btn();
          }}
        >
          Ver más
        </button>
      </div>

      <Modal
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}
        description={description}
        tiempo={props.tiempo}
        dificultad={props.dificultad}
        nombre={props.nombre}
      />
    </>
  );
}

export default Card;
