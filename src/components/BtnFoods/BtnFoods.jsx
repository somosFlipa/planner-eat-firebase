import React, { useState } from "react";

import breakfast from "../../assets/Desayunos.png";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.jpg";
import dinner from "../../assets/Cenas.jpg";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";
//import BtnNext from "../btnNext/btnNext";

import "./BtnFoods.css"

function BtnFoods({ recipe }) {
  let arrayFilter = [];
  const [comida, setComida] = useState([]);

  // fuencion para los botones

  async function btnFood(food) {
    recipe.map((i) => {
      i.Comida.filter((z) => {
        if ((z === food) === true) {
          arrayFilter.filter((s) => s.foodTime === food);
          if (!arrayFilter.includes(i.Nombre)) {
            arrayFilter.push({
              FoodTime: food,
              Nombre: i.Nombre,
              Dificultad: i.Dificultad,
              Tiempo: i.TiempoCoccion + i.TiempoPreparacion,
              Ingredientes: i.Ingredients,
            });
            setComida(arrayFilter);
          }
        }
      });
    });
  }

  return (
    <>
      <p>Comensales: </p>

      {
        // comida.length < 1 ?
        //   btnFood("DESAYUNO") :

        <>
          <button
            id="breakfast"
            onClick={() => {
              btnFood("DESAYUNO");
            }}
          >
            <img className="img-comidas-hover" src={breakfast} alt="" />
          </button>
          <button
            id="lunch"
            onClick={() => {
              btnFood("ALMUERZO");
            }}
          >
            <img className="img-comidas-hover" src={lunch} alt="" />
          </button>
          <button
            id="afternoon"
            onClick={() => {
              btnFood("MERIENDA");
            }}
          >
            <img className="img-comidas-hover" src={afternoon} alt="" />
          </button>
          <button
            id="dinner"
            onClick={() => {
              btnFood("CENA");
            }}
          >
            <img className="img-comidas-hover" src={dinner} alt="" />
          </button>
        </>
      }
      {comida.map((c) => {
        return (
          <>
            <Card
              nombre={c.Nombre}
              tiempo={c.Tiempo}
              dificultad={c.Dificultad}
              ingredientes={c.Ingredientes}
            />
          </>
        );
      })}
      <div>
        <BtnPrevious to="/Welcome" />
      </div>
    </>
  );
}

export default BtnFoods;
