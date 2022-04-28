import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ estadoModal, setEstadoModal, description, nombre }) {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    description.map((i) => {
      setIngredients(i.datos);
    });
  }, []);
  // console.log(nombre)
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
            <p>{ingredients.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
