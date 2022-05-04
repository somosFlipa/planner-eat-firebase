import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ estadoModal, setEstadoModal, description, nombre }) {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    description.map((i) => {
      setIngredients(i.datos);
    });
  }, []);
  const item = (description.map(dato=>(dato.datos)))
  // const nameItem = (item.map((name)=>(name.name)))
  // console.log(nameItem)
  return (
    <>
      {estadoModal && (
        <div className="modal">
          <div className="containerModal">
            <button
              onClick={() => {
                setEstadoModal(false);
              }}
            >
              X
            </button>
            <h2>{nombre}</h2>
            <h3>Ingrediente:</h3>
            {
              item.map(li =>(<li>{li.name}</li>))
            }
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;


