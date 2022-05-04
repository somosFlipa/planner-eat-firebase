import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/dbConfig";

import Modal from "../Modal/Modal";

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
  // console.log(description.map(dato=>(dato.datos)))

  // useEffect(() => {
  //   const listRecipe = [];

  //   if(listRecipe.length === 0){
  //   const obtenerDatos = async () => {
  //     const data = await getDocs(collection(db, "Ingredients"));
  //     data.docs.map((i) => {
  //       listRecipe.push({ datos: i.data(), id: i.id });
  //     });
  //     setIngredients(listRecipe);
  //   };
  //   obtenerDatos()
  // }else{
  //     console.log("datos extraidos")
  //   }
  //   // console.log(listRecipe)
  // }, [ingredients]);
  

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
      <p>Nombre: {props.nombre}</p>
      <p>Tiempo: {props.tiempo}</p>
      <p>Dificultad: {props.dificultad}</p>
      <button
        onClick={() => {
          btn();
        }}
      >
        Ver más
      </button>

      <Modal
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}
        description={description}
        nombre={props.nombre}
      />
    </>
  );
}

export default Card;
