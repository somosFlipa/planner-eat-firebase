import React, { useEffect, useState, useContext } from "react";
import {RepiceContext} from "../../Context/RecipeContext.jsx";

import breakfast from "../../assets/Desayunos.png";
import lunch from "../../assets/Almuerzos.jpg";
import afternoon from "../../assets/Meriendas.jpg";
import dinner from "../../assets/Cenas.jpg";

import Card from "../Card/Card";
import BtnPrevious from "../BtnPrevious/BtnPrevious";

import "./BtnFoods.css";
import  OpinionModal from '../OpinionModal/OpinionModal';
import ComensalesCount from "../ComensalesCount/ComensalesCount"

function BtnFoods() {
  
  const {checkbox,recipe} = useContext(RepiceContext)

  const [comida, setComida] = useState([]);
  const [opinionModal, setOpinionModal] = useState(false);

  let arrayFilter= [];

  // console.log(recipe)

  // fuencion para los botones
    function btnFood(food) {
      checkbox(food)
      
      recipe && recipe.map((i) => {
        i.Comida && i.Comida.filter((z) => {
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
      // checkbox(comida)
      console.log(comida.length)
      if (comida.length === 1) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 4) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 3) {
        return (btnFood("MERIENDA"))
      }

    }

    function paginacionNex(comida) {
      // checkbox(comida)
      
      if (comida.length === 0) {
        return(btnFood("DESAYUNO"))
      }
      if (comida.length === 2) {
        return(btnFood("ALMUERZO"))
      }
      if (comida.length === 1) {
        return btnFood("MERIENDA")
      }
      if (comida.length === 4) {
        return btnFood("CENA")
      }

    }

  return (
    <>
      <p>Comensales: </p>
      <ComensalesCount stock={4} initial={1}  />
      {
        comida.length < 1 ?
          btnFood("DESAYUNO") :
        <>

          <button
            id="breakfast"
            className="btnActualizar"
            onClick={() => {
              btnFood("DESAYUNO");
            }}
          >
            <img className="img-comidas-hover" src={breakfast} alt="" />
          </button>
          <button
            className="btnActualizar"
            id="lunch"
            onClick={() => {
              btnFood("ALMUERZO");
            }}
          >
            <img className="img-comidas-hover" src={lunch} alt="" />
          </button>
          <button
            className="btnActualizar"
            id="afternoon"
            onClick={() => {
              btnFood("MERIENDA");
            }}
          >
            <img className="img-comidas-hover" src={afternoon} alt="" />
          </button>
          <button
            className="btnActualizar"
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
                // name={name}
              />
            </>
          );
        })
      }
      <div className="btns-div">
        {
          comida.length === 0 || comida.length === 2?
          <BtnPrevious to="/Welcome" /> :
          <button className="btn-anterior-comida" onClick={ () => paginacionPrevious(comida)}>Anterior</button>
        }
        {
          comida.length === 3 ?
          <button className="btn-finalizar-comida"onClick={btnOpinion}>FINALIZAR</button> :
          <button id="btn-siguiente-comida"onClick={ () => paginacionNex(comida)}>Siguiente</button> 
          
        }
        
      </div>
      <OpinionModal opinionModal={opinionModal} setOpinionModal={setOpinionModal}/>
    </>
  );
}

export default BtnFoods;

