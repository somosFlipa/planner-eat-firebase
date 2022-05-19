import React, { useEffect, useState } from "react";
import "./Modal.css";

import clock from "../../assets/ep_alarm-clock.png"

function Modal({ estadoModal, setEstadoModal, description, tiempo, dificultad, nombre, url }) {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    description.map((i) => {
      setIngredients(i.datos);
    });
  }, []);
  const item = (description.map(dato=>(dato.datos)))
  // const nameItem = (item.map((name)=>(name.name)))
  
  return (
    <>
      {estadoModal && (
        <div className="modal">
          <div className="containerModal">
            <button className="btn-x-modal"
              onClick={() => {
                setEstadoModal(false);
              }}
            >
              X
            </button>
            <h2 className="h2-modal" >{nombre}</h2>
            <h3 className="h3-modal" >Ingrediente:</h3>
            <p className="tiempo-modal"><img className="img-clock" src={clock} alt="" />{tiempo}</p>
            <p className="dificultad-modal"><p className="punto-dificultad">.</p>{dificultad}</p>
            <img className="img-modal" src={url} alt=""/>
            <div className="li-map-modal">
              {
                item.map(li =>(<li>{li.name}</li>))
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;


