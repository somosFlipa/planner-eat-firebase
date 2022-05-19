import React, {useEffect, useState } from "react";

import breakfast from "../../assets/Desayunos.png";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.jpg";
import dinner from "../../assets/Cenas.jpg";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";

import "./BtnFoods.css";
import  OpinionModal from '../OpinionModal/OpinionModal'

import ItemCouts from '../ItemCouts/ItemCouts'

function BtnFoods({ recipe }) {
    const [comida, setComida] = useState([]);
    const [opinionModal, setOpinionModal] = useState(false);
    let arrayFilter= [];

  // fuencion para los botones
    async function btnFood(food) {
      recipe && recipe.map((i) => {
        i.Comida && i.Comida.filter((z) => {
          // console.log(z === undefined)
          if ((z === food) === true) {
            arrayFilter.filter((s) => s.foodTime === food);
            if (!arrayFilter.includes(i.Nombre)) {
              arrayFilter.push({
                FoodTime: food,
                Nombre: i.Nombre,
                Dificultad: i.Dificultad,
                Tiempo: i.TiempoCoccion + i.TiempoPreparacion,
                Ingredientes: i.Ingredients,
                Url: i.Url
              });
              setComida(arrayFilter);
            }
          }
        });
      });
    }

    useEffect(()=>{
      btnFood()
      setComida(arrayFilter)
    },[])

    // Modal de opinion
    function btnOpinion () {
      setOpinionModal(true)
    }

    // Paginacion (entre desayuno, almuerzo, merienda y cena)
    function paginacionPrevious(comida) {
      if (comida.length === 12) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 18) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 24) {
        return (btnFood("MERIENDA"))
      }
    }

    function paginacionNex(comida) {
      if (comida.length === 0) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 11) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 12) {
        return btnFood("MERIENDA")
      }
      if (comida.length === 18) {
        return btnFood("CENA")
      }
    }

  return (
    <>
      <p>Comensales: </p>
      <ItemCouts stock={4} initial={1} />
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

      {
        // comida.length === 0 ?
        //   btnFood("DESAYUNO") :
        comida.map((c) => {
          return (
            <>
              <Card
                key={c}
                nombre={c.Nombre}
                tiempo={c.Tiempo}
                dificultad={c.Dificultad}
                ingredientes={c.Ingredientes}
                url={c.Url}
              />
            </>
          );
        })
      }
      <div>
        {
          comida.length === 0 || comida.length === 11 ?
          <BtnPrevious to="/Welcome" /> :
          <button className="btn-anterior-comida" onClick={ () => paginacionPrevious(comida)}>Anterior</button>
        }
        {
          comida.length === 24 ?
          <button className="btn-finalizar-comida"onClick={btnOpinion}>FINALIZAR</button> :
          <button id="btn-siguiente-comida"onClick={ () => paginacionNex(comida)}>Siguiente</button> 
          
        }
        
      </div>
      <OpinionModal opinionModal={opinionModal} setOpinionModal={setOpinionModal}/>
    </>
  );
}

export default BtnFoods;

